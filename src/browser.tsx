
import 'babel-polyfill'

import BrowserProtocol = require('farce/lib/BrowserProtocol')
import createInitialFarceRouter = require('found/lib/createInitialFarceRouter')
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { createResolver, historyMiddlewares, renderConfig, routeConfig }
	from './App'
import { ClientFetcher } from './fetcher'


(async () => {

	const fetcher = new ClientFetcher('http://localhost:3000/graphql',
	                                  window['__RELAY_PAYLOADS__'])
	const resolver = createResolver(fetcher)

	const Router = await createInitialFarceRouter({
		historyProtocol: new BrowserProtocol(),
		historyMiddlewares,
		routeConfig,
		resolver,
		render: renderConfig,
	})

	ReactDOM.render(
		<Router resolver={resolver} />,
		document.getElementById('root')
	)

})()
