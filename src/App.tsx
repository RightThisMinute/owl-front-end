
import createRender = require('found/lib/createRender')
import makeRouteConfig = require('found/lib/makeRouteConfig')
import Route = require('found/lib/Route')
import * as React from 'react'


export class App {

	private _serverSide: Boolean
	public get serverSide() { return this._serverSide }

	constructor(serverSide: boolean) {
		this._serverSide = serverSide
	}

}

console.debug('route', Route)

function AppFrame({ children }: {children: any}) {
	return (
		<div>
			<h1>Home</h1>
			<div>{children}</div>
		</div>
	)
}

export const routeConfig = makeRouteConfig(
	<Route path="/" Component={AppFrame}>
		<Route path="videos/forms/replace" Component={() => <div>Form</div>} />
		<Route path="goomba" Component={() => <div>Goomba</div>} />
	</Route>,
)

export const renderConfig = createRender({
	renderError: ({ error }) => (
		<div>
			{ error.status === 404 ? 'Not found' : 'Error' }
		</div>
	)
})

