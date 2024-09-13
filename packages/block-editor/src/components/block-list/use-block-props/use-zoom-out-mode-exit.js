/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useRefEffect } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../../store';
import { unlock } from '../../../lock-unlock';

/**
 * Allows Zoom Out mode to be exited by double clicking in the selected block.
 *
 */
export function useZoomOutModeExit() {
	const { getSettings, __unstableGetEditorMode } = useSelect( ( select ) =>
		select( blockEditorStore )
	);

	const { __unstableSetEditorMode } = unlock(
		useDispatch( blockEditorStore )
	);

	return useRefEffect(
		( node ) => {
			function onDoubleClick( event ) {
				if (
					! event.defaultPrevented &&
					__unstableGetEditorMode() === 'zoom-out'
				) {
					event.preventDefault();

					const { __experimentalSetIsInserterOpened } = getSettings();

					if (
						typeof __experimentalSetIsInserterOpened === 'function'
					) {
						__experimentalSetIsInserterOpened( false );
					}
					__unstableSetEditorMode( 'edit' );
				}
			}

			node.addEventListener( 'dblclick', onDoubleClick );

			return () => {
				node.removeEventListener( 'dblclick', onDoubleClick );
			};
		},
		[ __unstableSetEditorMode, __unstableGetEditorMode ]
	);
}
