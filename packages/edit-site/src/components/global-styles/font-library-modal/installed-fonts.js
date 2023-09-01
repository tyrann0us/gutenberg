/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useContext, useEffect, useState } from '@wordpress/element';
import {
	__experimentalHStack as HStack,
	__experimentalSpacer as Spacer,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import TabLayout from './tab-layout';
import { FontLibraryContext } from './context';
import FontsGrid from './fonts-grid';
import LibraryFontDetails from './library-font-details';
import SaveButton from '../../save-button';
import LibraryFontCard from './library-font-card';
import { Button } from '@wordpress/components';

function InstalledFonts() {
	const {
		baseCustomFonts,
		libraryFontSelected,
		baseThemeFonts,
		handleSetLibraryFontSelected,
		refreshLibrary,
		uninstallFont,
	} = useContext( FontLibraryContext );
	const [ isConfirmDeleteOpen, setIsConfirmDeleteOpen ] = useState( false );

	const handleUnselectFont = () => {
		handleSetLibraryFontSelected( null );
	};

	const handleSelectFont = ( font ) => {
		handleSetLibraryFontSelected( font );
	};

	const handleConfirmUninstall = async () => {
		const result = await uninstallFont( libraryFontSelected );
		// If the font was succesfully uninstalled it is unselected
		if ( result ) {
			handleUnselectFont();
		}
	};

	const handleUninstallClick = async () => {
		setIsConfirmDeleteOpen( true );
	};

	const handleCancelUninstall = () => {
		setIsConfirmDeleteOpen( false );
	};

	const tabDescription = !! libraryFontSelected
		? __(
				'Choose font variants. Keep in mind that too many variants could make your site slower.'
		  )
		: null;

	const shouldDisplayDeleteButton = !! libraryFontSelected && libraryFontSelected?.source !== 'theme';

	useEffect( () => {
		refreshLibrary();
	}, [] );

	return (
		<TabLayout
			title={ libraryFontSelected?.name || '' }
			description={ tabDescription }
			handleBack={ !! libraryFontSelected && handleUnselectFont }
			footer={ (
				<Footer
					shouldDisplayDeleteButton={ shouldDisplayDeleteButton }
					handleUninstallClick={ handleUninstallClick }
				/>
			) }
		>
			{ ! libraryFontSelected && (
				<>
					{ baseCustomFonts.length > 0 && (
						<>
							<Spacer margin={ 2 } />
							<FontsGrid>
								{ baseCustomFonts.map( ( font ) => (
									<LibraryFontCard
										font={ font }
										key={ font.slug }
										onClick={ () => {
											handleSelectFont( font );
										} }
									/>
								) ) }
							</FontsGrid>
						</>
					) }

					{ baseThemeFonts.length > 0 && (
						<>
							<Spacer margin={ 8 } />
							<FontsGrid title={ __( 'Theme Fonts' ) }>
								{ baseThemeFonts.map( ( font ) => (
									<LibraryFontCard
										font={ font }
										key={ font.slug }
										onClick={ () => {
											handleSelectFont( font );
										} }
									/>
								) ) }
							</FontsGrid>
						</>
					) }
				</>
			) }

			{ libraryFontSelected && (
				<LibraryFontDetails
					font={ libraryFontSelected }
					isConfirmDeleteOpen={ isConfirmDeleteOpen }
					handleConfirmUninstall={ handleConfirmUninstall }
					handleCancelUninstall={ handleCancelUninstall }
				/>
			) }
		</TabLayout>
	);
}

function Footer({ shouldDisplayDeleteButton, handleUninstallClick }) {
	return (
		<HStack justify="space-between">
			<div>
				{ shouldDisplayDeleteButton && (
					<Button
						isDestructive
						variant="link"
						onClick={ handleUninstallClick }
					>
						{ __( 'Delete permanently' ) }
					</Button>
				)}
			</div>
			<SaveButton
				textForDefaultState={ __( 'Update' ) }
				textForIsDirtyState={ __( 'Update' ) }
				textForDisabledState={ __( 'Update' ) }
			/>
		</HStack>
	);
}

export default InstalledFonts;
