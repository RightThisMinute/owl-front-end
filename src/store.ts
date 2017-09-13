
const createHistoryEnhancer = require('farce/lib/createHistoryEnhancer')

const createMatchEnhancer = require('found/lib/createMatchEnhancer')
const foundReducer = require('found/lib/foundReducer')
const Matcher = require('found/lib/Matcher')

import { combineReducers, compose, createStore, Store as ReduxStore } from 'redux'

import { historyMiddlewares, routeConfig } from './App'
import { reducer } from './reducer'


interface _Store<S> extends ReduxStore<S> {
	farce: any // Added by `createHistoryEnhancer()`
}

export type Store = _Store<StoreState>

export interface StoreState {
	rtmOwl: RTMOwlStoreState
	found?: any
}

export interface RTMOwlStoreState {
	relayStateRebuildCount: number
	setActiveVideos: {
		setSuccessfully: boolean
		currentlyBeingSet: boolean
		error: Error|null
	}
	viewport: {
		resizeInProgress: boolean
	}
}

export function genStore(historyProtocol, preloadedState?): Store {
	 return createStore(
		combineReducers({
			found: foundReducer,
			rtmOwl: reducer,
		}),
		preloadedState,
		compose(
			createHistoryEnhancer({
				protocol: historyProtocol,
				middleware: historyMiddlewares,
			}),
			createMatchEnhancer(new Matcher(routeConfig)),
		),
	) as Store
}
