<?php
/**
 * Updates the script-loader.php file
 *
 * @package gutenberg
 */

/**
 * Removes the actions that output all duotone SVG filter presets.
 * WP_Duotone_Gutenberg now handles which SVG filters should be output
 * depending on the block content.
 */
remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' );
remove_action( 'in_admin_header', 'wp_global_styles_render_svg_filters' );

/**
 * Collect the block editor assets that need to be loaded into the editor's iframe.
 *
 * @since 6.0.0
 * @access private
 *
 * @return array {
 *     The block editor assets.
 *
 *     @type string|false $styles  String containing the HTML for styles.
 *     @type string|false $scripts String containing the HTML for scripts.
 * }
 */
function _gutenberg_get_iframed_editor_assets() {
	global $wp_styles, $wp_scripts, $pagenow;

	// Keep track of the styles and scripts instance to restore later.
	$current_wp_styles  = $wp_styles;
	$current_wp_scripts = $wp_scripts;

	// Create new instances to collect the assets.
	$wp_styles  = new WP_Styles();
	$wp_scripts = new WP_Scripts();

	// Register all currently registered styles and scripts. The actions that
	// follow enqueue assets, but don't necessarily register them.
	$wp_styles->registered  = $current_wp_styles->registered;
	$wp_scripts->registered = $current_wp_scripts->registered;

	// We generally do not need reset styles for the iframed editor.
	// However, if it's a classic theme, margins will be added to every block,
	// which is reset specifically for list items, so classic themes rely on
	// these reset styles.
	$wp_styles->done =
		wp_theme_has_theme_json() ? array( 'wp-reset-editor-styles' ) : array();

	wp_enqueue_script( 'wp-polyfill' );
	// Enqueue the `editorStyle` handles for all core block, and dependencies.
	wp_enqueue_style( 'wp-edit-blocks' );

	if ( 'site-editor.php' === $pagenow ) {
		wp_enqueue_style( 'wp-edit-site' );
	}

	if ( current_theme_supports( 'wp-block-styles' ) ) {
		wp_enqueue_style( 'wp-block-library-theme' );
	}

	// We don't want to load EDITOR scripts in the iframe, only enqueue
	// front-end assets for the content.
	add_filter( 'should_load_block_editor_scripts_and_styles', '__return_false' );
	do_action( 'enqueue_block_assets' );
	remove_filter( 'should_load_block_editor_scripts_and_styles', '__return_false' );

	$block_registry = WP_Block_Type_Registry::get_instance();

	// Additionally, do enqueue `editorStyle` assets for all blocks, which
	// contains editor-only styling for blocks (editor content).
	foreach ( $block_registry->get_all_registered() as $block_type ) {
		if ( isset( $block_type->editor_style_handles ) && is_array( $block_type->editor_style_handles ) ) {
			foreach ( $block_type->editor_style_handles as $style_handle ) {
				wp_enqueue_style( $style_handle );
			}
		}
	}

	ob_start();
	wp_print_styles();
	wp_print_fonts( true );
	$styles = ob_get_clean();

	ob_start();
	wp_print_head_scripts();
	wp_print_footer_scripts();
	$scripts = ob_get_clean();

	// Restore the original instances.
	$wp_styles  = $current_wp_styles;
	$wp_scripts = $current_wp_scripts;

	return array(
		'styles'  => $styles,
		'scripts' => $scripts,
	);
}

add_filter(
	'block_editor_settings_all',
	static function( $settings ) {
		// We must override what core is passing now.
		$settings['__unstableResolvedAssets'] = _gutenberg_get_iframed_editor_assets();
		return $settings;
	}
);

/**
 * Registers interactivity runtime and vendor scripts to use with interactive blocks.
 *
 * @param WP_Scripts $scripts WP_Scripts instance.
 */
function gutenberg_register_interactivity_scripts( $scripts ) {
	// When in production, use the plugin's version as the default asset version;
	// else (for development or test) default to use the current time.
	$default_version = defined( 'GUTENBERG_VERSION' ) && ! SCRIPT_DEBUG ? GUTENBERG_VERSION : time();

	foreach ( array( 'vendors', 'runtime' ) as $script_name ) {
		$script_path = "build/block-library/interactivity/$script_name.min.js";
		// Replace extension with `.asset.php` to find the generated dependencies file.
		$asset_file   = gutenberg_dir_path() . substr( $script_path, 0, -( strlen( '.js' ) ) ) . '.asset.php';
		$asset        = file_exists( $asset_file )
			? require $asset_file
			: null;
		$dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : array();
		$version      = isset( $asset['version'] ) ? $asset['version'] : $default_version;

		gutenberg_override_script(
			$scripts,
			"wp-interactivity-$script_name",
			gutenberg_url( $script_path ),
			$dependencies,
			$version
		);
	}
}
add_action( 'wp_default_scripts', 'gutenberg_register_interactivity_scripts', 10, 1 );

/**
 * Adds the "defer" attribute to all the interactivity script tags.
 *
 * @param string $tag    The generated script tag.
 * @param string $handle The script handle.
 *
 * @return string The modified script tag.
 */
function gutenberg_interactivity_scripts_add_defer_attribute( $tag, $handle ) {
	if ( str_starts_with( $handle, 'wp-interactivity-' ) || str_contains( $tag, '/interactivity.min.js' ) ) {
		$p = new WP_HTML_Tag_Processor( $tag );
		$p->next_tag( array( 'tag' => 'script' ) );
		$p->set_attribute( 'defer', true );
		return $p->get_updated_html();
	}
	return $tag;
}
add_filter( 'script_loader_tag', 'gutenberg_interactivity_scripts_add_defer_attribute', 10, 2 );
