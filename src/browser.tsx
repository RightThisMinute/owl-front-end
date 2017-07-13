
import 'babel-polyfill'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createInitialBrowserRouter
	= require('found/lib/createInitialBrowserRouter')

import { renderConfig, routeConfig }  from './App'


(async () => {

	const Router = await createInitialBrowserRouter({
		routeConfig,
		render: renderConfig,
	})

	ReactDOM.render(
		<Router/>,
		document.getElementById('root')
	)

})()
