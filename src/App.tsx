
import queryMiddleware = require('farce/lib/queryMiddleware')
import createRender = require('found/lib/createRender')
import makeRouteConfig = require('found/lib/makeRouteConfig')
import Route = require('found/lib/Route')
import * as React from 'react'
const { graphql } = require('react-relay')
import { Resolver } from 'found-relay'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

import RouteComponentProps from './props/RouteComponent'
import Main from './components/Main'
import VideoList from './components/VideoList'
import SetActiveVideosPage from './components/SetActiveVideosPage'
import ErrorPage from './components/ErrorPage'

class AppFrame extends React.Component<RouteComponentProps, any> {

	render() { return (
		<Main>
			{this.props.children}
		</Main>
	)}

}


export const historyMiddlewares = [queryMiddleware]


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
	query App_ActiveVideos_Query($statsAge: Int!) {
		activeVideos {
			...SetActiveVideosPage_activeVideos
			...VideoList_activeVideos
		}
	}
`

const aDay = 4 * 24 * 60 * 60

export const routeConfig = makeRouteConfig(
	<Route path="/" Component={AppFrame}>
		<Route Component={VideoList} query={ActiveVideosQuery}
		       prepareVariables={params => ({ ...params, statsAge: aDay })} />
		<Route path="videos/forms/set_active"
		       Component={SetActiveVideosPage} query={ActiveVideosQuery}
		       prepareVariables={params => ({ ...params, statsAge: aDay })} />
	</Route>
)
