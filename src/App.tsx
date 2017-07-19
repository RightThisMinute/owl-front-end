
import createRender = require('found/lib/createRender')
import makeRouteConfig = require('found/lib/makeRouteConfig')
import Route = require('found/lib/Route')
import * as React from 'react'
const graphql = require('react-relay').graphql
import { Resolver } from 'found-relay'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

import RouteComponentProps from './props/RouteComponentProps'
import Main from './components/Main'
import VideoList from './components/VideoList'
import ErrorPage from './components/ErrorPage'





export class AppFrame extends React.Component<RouteComponentProps, any> {

	render() { return (
		<Main>
			{this.props.children}
		</Main>
	)}

}


export function createResolver(fetcher) {
	const environment = new Environment({
		network: Network.create((...args) => fetcher.fetch(...args)),
		store: new Store(new RecordSource()),
	});

	return new Resolver(environment);
}


export const renderConfig = createRender({
	renderError: ({ error }) => { return (
		<AppFrame>
			<ErrorPage error={error}/>
		</AppFrame>
	) }
})


const ActiveVideosQuery = graphql`
	query App_ActiveVideos_Query {
		activeVideos {
			...VideoList_activeVideos
		}
	}
`

export const routeConfig = makeRouteConfig(
	<Route path="/" Component={AppFrame}>
		<Route Component={VideoList} query={ActiveVideosQuery} />
		{/*<Route Component={() => <h2>Video List</h2>} />*/}
		<Route path="videos/forms/replace" Component={() => <h2>Form</h2>} />
		<Route path="goomba" Component={() => <h2>Goomba</h2>} />
	</Route>,
)
