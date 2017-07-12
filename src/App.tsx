
import createRender = require('found/lib/createRender')
import makeRouteConfig = require('found/lib/makeRouteConfig')
import Route = require('found/lib/Route')
import * as React from 'react'

import RouteComponentProps from './props/RouteComponentProps'
import AppHead from './components/AppHead'
import Main from './components/Main'
import ErrorPage from './components/ErrorPage'


export class AppFrame extends React.Component<RouteComponentProps, any> {

	render() { return (
		<html>
			<AppHead/>
			<body>
				<div id="root">
					<Main>
						{ this.props.children }
					</Main>
				</div>
				<script src="/bundle.js" />
			</body>
		</html>
	) }

}


export const routeConfig = makeRouteConfig(
	<Route path="/" Component={AppFrame}>
		<Route path="videos/forms/replace" Component={() => <div>Form</div>} />
		<Route path="goomba" Component={() => <div>Goomba</div>} />
	</Route>,
)

export const renderConfig = createRender({
	renderError: ({ error }) => { return (
		<AppFrame>
			<ErrorPage error={error}/>
		</AppFrame>
	) }
})

