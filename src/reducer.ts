
import { Reducer } from 'redux'

import { RTMOwlStoreState } from './store'


export enum Action {
	ResetRelayEnvironment = 'reset Relay environment',
	// SettingActiveVideos = 'currently setting active videos',
	// SetActiveVideosFailed = 'failed setting active videos'
}

const defaultState: RTMOwlStoreState = {
	relayStateRebuildCount: 0
}

export const reducer: Reducer<RTMOwlStoreState> = (prevState, action) => {
	if (typeof prevState === 'undefined')
		return defaultState

	switch (action.type) {

		case Action.ResetRelayEnvironment:
			return Object.assign({}, prevState, {
				relayStateRebuildCount: prevState.relayStateRebuildCount + 1
			})
		
	}

	return prevState
}

