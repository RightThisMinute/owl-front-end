
import 'babel-polyfill'

const BrowserProtocol = require('farce/lib/BrowserProtocol')
const createConnectedRouter = require('found/lib/createConnectedRouter')
const getStoreRenderArgs = require('found/lib/getStoreRenderArgs')
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Provider from 'react-redux/lib/components/Provider'

import { createResolver, renderConfig } from './App'
import { ClientFetcher } from './fetcher'
import genStore from './genStore'


const store = genStore(new BrowserProtocol(), window['__PRELOADED_STATE__'])
const matchContext = { store }
const ConnectedRouter = createConnectedRouter({ render: renderConfig })

;(async () => {

	const fetcher = new ClientFetcher('http://localhost:3000/graphql',
	                                  window['__RELAY_PAYLOADS__'])
	const resolver = createResolver(fetcher)

	const initialRenderArgs = await getStoreRenderArgs({
		store,
		matchContext,
		resolver
	})

	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter matchContext={matchContext}
			                 resolver={resolver}
			                 initialRenderArgs={initialRenderArgs} />
		</Provider>,
		document.getElementById('root')
	)

})()
