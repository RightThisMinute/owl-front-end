
import createRender = require('found/lib/createRender')
import makeRouteConfig = require('found/lib/makeRouteConfig')
import Route = require('found/lib/Route')
import * as React from 'react'

import RouteComponentProps from './props/RouteComponentProps'
import Main from './components/Main'
import ErrorPage from './components/ErrorPage'


export class AppFrame extends React.Component<RouteComponentProps, any> {

	render() { return (
		<Main>
			{ this.props.children }
		</Main>
	)}

}


export const routeConfig = makeRouteConfig(
	<Route path="/" Component={AppFrame}>
		<Route Component={() => <h2>Home</h2>} />
		<Route path="videos/forms/replace" Component={() => <h2>Form</h2>} />
		<Route path="goomba" Component={() => <h2>Goomba</h2>} />
	</Route>,
)

export const renderConfig = createRender({
	renderError: ({ error }) => { return (
		<AppFrame>
			<ErrorPage error={error}/>
		</AppFrame>
	) }
})

