
const createHistoryEnhancer = require('farce/lib/createHistoryEnhancer')

const createMatchEnhancer = require('found/lib/createMatchEnhancer')
const foundReducer = require('found/lib/foundReducer')
const Matcher = require('found/lib/Matcher')

import combineReducers from 'redux/lib/combineReducers'
import compose from 'redux/lib/compose'
import createStore from 'redux/lib/createStore'


import { historyMiddlewares, routeConfig } from './App'


export default function genStore(historyProtocol, preloadedState?) {
	return createStore(
		combineReducers({ found: foundReducer }),
		preloadedState,
		compose(
			createHistoryEnhancer({
				protocol: historyProtocol,
				middleware: historyMiddlewares,
			}),
			createMatchEnhancer(new Matcher(routeConfig)),
		),
	)
}
