
import { Reducer } from 'redux'

import { RTMOwlStoreState } from './store'


export enum Action {
	ResetRelayEnvironment = 'reset Relay environment',
	SetActiveVideosSucceeded = 'succeeded setting active Videos',
	SettingActiveVideos = 'currently setting active videos',
	SetActiveVideosFailed = 'failed setting active videos',
	ResetSetActiveVideosFlags = 'reset flags related to set active videos page',
	ViewportResizeStarted = 'viewport resize started',
	ViewportResizeEnded = 'viewport resize ended',
}

const defaultState: RTMOwlStoreState = {
	relayStateRebuildCount: 0,
	setActiveVideos: {
		setSuccessfully: false,
		currentlyBeingSet: false,
		error: null,
	},
	viewport: {
		resizeInProgress: false,
	},
}

export const reducer: Reducer<RTMOwlStoreState> = (prevState, action) => {
	if (typeof prevState === 'undefined')
		return defaultState

	switch (action.type) {

		case Action.ResetRelayEnvironment:
			return Object.assign({}, prevState, {
				relayStateRebuildCount: prevState.relayStateRebuildCount + 1,
			})

		case Action.SettingActiveVideos:
			return Object.assign({}, prevState, {
				setActiveVideos: {
					setSuccessfully: false,
					currentlyBeingSet: true,
					error: false,
				},
			})

		case Action.SetActiveVideosSucceeded:
			return Object.assign({}, prevState, {
				setActiveVideos: {
					setSuccessfully: true,
					currentlyBeingSet: false,
					error: false,
				},
			})

		case Action.SetActiveVideosFailed:
			return Object.assign({}, prevState, {
				setActiveVideos: {
					setSuccessfully: false,
					currentlyBeingSet: false,
					error: action.error,
				},
			})

		case Action.ResetSetActiveVideosFlags:
			return Object.assign({}, prevState, {
				setActiveVideos: {
					setSuccessfully: false,
					currentlyBeingSet: prevState.setActiveVideos.currentlyBeingSet,
					error: null,
				},
			})

		case Action.ViewportResizeStarted:
			console.debug('resize started')
			return Object.assign({}, prevState, {
				viewport: { resizeInProgress: true }
			})

		case Action.ViewportResizeEnded:
			console.debug('resize ended')
			return Object.assign({}, prevState, {
				viewport: { resizeInProgress: false }
			})
	}

	return prevState
}

