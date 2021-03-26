/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { store as noticesStore } from '@wordpress/notices';
import { store as interfaceStore } from '@wordpress/interface';
/**
 * Internal dependencies
 */
import { dispatch, select } from './controls';
import { transformBlockToWidget } from './transformers';
import {
	buildWidgetAreaPostId,
	buildWidgetAreasQuery,
	createStubPost,
	KIND,
	POST_TYPE,
	WIDGET_AREA_ENTITY_TYPE,
} from './utils';
import { STORE_NAME as editWidgetsStoreName } from './constants';

/**
 * Persists a stub post with given ID to core data store. The post is meant to be in-memory only and
 * shouldn't be saved via the API.
 *
 * @param  {string} id Post ID.
 * @param  {Array}  blocks Blocks the post should consist of.
 * @return {Object} The post object.
 */
export const persistStubPost = function* ( id, blocks ) {
	const stubPost = createStubPost( id, blocks );
	yield dispatch(
		'core',
		'receiveEntityRecords',
		KIND,
		POST_TYPE,
		stubPost,
		{ id: stubPost.id },
		false
	);
	return stubPost;
};

export function* saveEditedWidgetAreas() {
	const editedWidgetAreas = yield select(
		editWidgetsStoreName,
		'getEditedWidgetAreas'
	);
	if ( ! editedWidgetAreas?.length ) {
		return;
	}
	try {
		yield* saveWidgetAreas( editedWidgetAreas );
		yield dispatch(
			noticesStore,
			'createSuccessNotice',
			__( 'Widgets saved.' ),
			{
				type: 'snackbar',
			}
		);
	} catch ( e ) {
		yield dispatch(
			noticesStore,
			'createErrorNotice',
			/* translators: %s: The error message. */
			sprintf( __( 'There was an error. %s' ), e.message ),
			{
				type: 'snackbar',
			}
		);
	}
}

export function* saveWidgetAreas( widgetAreas ) {
	try {
		for ( const widgetArea of widgetAreas ) {
			yield* saveWidgetArea( widgetArea.id );
		}
	} finally {
		// saveEditedEntityRecord resets the resolution status, let's fix it manually
		yield dispatch(
			'core',
			'finishResolution',
			'getEntityRecord',
			KIND,
			WIDGET_AREA_ENTITY_TYPE,
			buildWidgetAreasQuery()
		);
	}
}

export function* saveWidgetArea( widgetAreaId ) {
	const widgets = yield select( editWidgetsStoreName, 'getWidgets' );

	const post = yield select(
		'core',
		'getEditedEntityRecord',
		KIND,
		POST_TYPE,
		buildWidgetAreaPostId( widgetAreaId )
	);

	// Remove all duplicate reference widget instances
	const usedReferenceWidgets = [];
	const widgetsBlocks = post.blocks.filter( ( { attributes: { id } } ) => {
		if ( id ) {
			if ( usedReferenceWidgets.includes( id ) ) {
				return false;
			}
			usedReferenceWidgets.push( id );
		}
		return true;
	} );

	const batchMeta = [];
	const batchTasks = [];
	const sidebarWidgetsIds = [];
	for ( let i = 0; i < widgetsBlocks.length; i++ ) {
		const block = widgetsBlocks[ i ];
		const widgetId = block.attributes.__internalWidgetId;
		const oldWidget = widgets[ widgetId ];
		const widget = transformBlockToWidget( block, oldWidget );
		// We'll replace the null widgetId after save, but we track it here
		// since order is important.
		sidebarWidgetsIds.push( widgetId );

		if ( widgetId ) {
			yield dispatch(
				'core',
				'editEntityRecord',
				'root',
				'widget',
				widgetId,
				{
					...widget,
					sidebar: widgetAreaId,
				}
			);

			const hasEdits = yield select(
				'core',
				'hasEditsForEntityRecord',
				'root',
				'widget',
				widgetId
			);

			if ( ! hasEdits ) {
				continue;
			}

			batchTasks.push( ( { saveEditedEntityRecord } ) =>
				saveEditedEntityRecord( 'root', 'widget', widgetId )
			);
		} else {
			batchTasks.push( ( { saveEntityRecord } ) =>
				saveEntityRecord( 'root', 'widget', {
					...widget,
					sidebar: widgetAreaId,
				} )
			);
		}

		batchMeta.push( {
			block,
			position: i,
			clientId: block.clientId,
		} );
	}

	const records = yield dispatch( 'core', '__experimentalBatch', batchTasks );

	const failedWidgetNames = [];

	for ( let i = 0; i < records.length; i++ ) {
		const widget = records[ i ];
		const { block, position } = batchMeta[ i ];

		const error = yield select(
			'core',
			'getLastEntitySaveError',
			'root',
			'widget',
			widget.id
		);
		if ( error ) {
			failedWidgetNames.push( block.attributes?.name || block?.name );
		}

		if ( ! sidebarWidgetsIds[ position ] ) {
			sidebarWidgetsIds[ position ] = widget.id;
		}
	}

	if ( failedWidgetNames.length ) {
		throw new Error(
			sprintf(
				/* translators: %s: List of widget names */
				__( 'Could not save the following widgets: %s.' ),
				failedWidgetNames.join( ', ' )
			)
		);
	}

	yield dispatch(
		'core',
		'editEntityRecord',
		KIND,
		WIDGET_AREA_ENTITY_TYPE,
		widgetAreaId,
		{
			widgets: sidebarWidgetsIds,
		}
	);

	yield* trySaveWidgetArea( widgetAreaId );

	yield dispatch(
		'core',
		'receiveEntityRecords',
		KIND,
		POST_TYPE,
		post,
		undefined
	);
}

function* trySaveWidgetArea( widgetAreaId ) {
	const saveErrorBefore = yield select(
		'core',
		'getLastEntitySaveError',
		KIND,
		WIDGET_AREA_ENTITY_TYPE,
		widgetAreaId
	);
	yield dispatch(
		'core',
		'saveEditedEntityRecord',
		KIND,
		WIDGET_AREA_ENTITY_TYPE,
		widgetAreaId
	);
	const saveErrorAfter = yield select(
		'core',
		'getLastEntitySaveError',
		KIND,
		WIDGET_AREA_ENTITY_TYPE,
		widgetAreaId
	);
	if ( saveErrorAfter && saveErrorBefore !== saveErrorAfter ) {
		throw new Error( saveErrorAfter );
	}
}

/**
 * Sets the clientId stored for a particular widgetId.
 *
 * @param  {number} clientId  Client id.
 * @param  {number} widgetId  Widget id.
 * @return {Object}           Action.
 */
export function setWidgetIdForClientId( clientId, widgetId ) {
	return {
		type: 'SET_WIDGET_ID_FOR_CLIENT_ID',
		clientId,
		widgetId,
	};
}

/**
 * Sets the open state of all the widget areas.
 *
 * @param  {Object} widgetAreasOpenState The open states of all the widget areas.
 * @return {Object}                      Action.
 */
export function setWidgetAreasOpenState( widgetAreasOpenState ) {
	return {
		type: 'SET_WIDGET_AREAS_OPEN_STATE',
		widgetAreasOpenState,
	};
}

/**
 * Sets the open state of the widget area.
 *
 * @param  {string}  clientId   The clientId of the widget area.
 * @param  {boolean} isOpen     Whether the widget area should be opened.
 * @return {Object}             Action.
 */
export function setIsWidgetAreaOpen( clientId, isOpen ) {
	return {
		type: 'SET_IS_WIDGET_AREA_OPEN',
		clientId,
		isOpen,
	};
}

/**
 * Returns an action object used to open/close the inserter.
 *
 * @param {boolean} value A boolean representing whether the inserter should be opened or closed.
 * @return {Object} Action object.
 */
export function setIsInserterOpened( value ) {
	return {
		type: 'SET_IS_INSERTER_OPENED',
		value,
	};
}

/**
 * Returns an action object signalling that the user closed the sidebar.
 *
 * @yield {Object} Action object.
 */
export function* closeGeneralSidebar() {
	yield dispatch(
		interfaceStore.name,
		'disableComplementaryArea',
		editWidgetsStoreName
	);
}
