
import 'babel-polyfill'

const BrowserProtocol = require('farce/lib/BrowserProtocol')
const createConnectedRouter = require('found/lib/createConnectedRouter')
const getStoreRenderArgs = require('found/lib/getStoreRenderArgs')
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Provider from 'react-redux/lib/components/Provider'

import { createResolver, renderConfig } from './App'
import { ClientFetcher } from './fetcher'
import { genStore } from './store'


const store = genStore(new BrowserProtocol(), window['__PRELOADED_STATE__'])
const matchContext = { store }
const ConnectedRouter = createConnectedRouter({ render: renderConfig })


async function buildRelayState(): Promise<State> {
	const fetcher = new ClientFetcher('http://localhost:3000/graphql',
	                                  window['__RELAY_PAYLOADS__'])
	const resolver = createResolver(fetcher)

	const initialRenderArgs = await getStoreRenderArgs({
		store,
		matchContext,
		resolver
	})

	return {
		resolver,
		initialRenderArgs
	}
}


interface Props {
	initialState: State
}

interface State {
	resolver: any
	initialRenderArgs: any
}

class Wrap extends React.Component<Props, State> {

	private relayStateRebuildCount: number

	constructor(props) {
		super(props)

		this.state = this.props.initialState
		this.relayStateRebuildCount = store.getState().rtmOwl.relayStateRebuildCount
		store.subscribe(this.rebuildRelayState.bind(this))
	}

	async rebuildRelayState(): Promise<void> {
		const rebuildCount = store.getState().rtmOwl.relayStateRebuildCount

		if (rebuildCount === this.relayStateRebuildCount)
			return;

		this.relayStateRebuildCount = rebuildCount
		this.setState(await buildRelayState())
	}

	render() { return(
		<ConnectedRouter matchContext={matchContext}
										 resolver={this.state.resolver}
										 initialRenderArgs={this.state.initialRenderArgs} />
	)}

}


;(async () => {
	const initialState = await buildRelayState()

	ReactDOM.render(
		<Provider store={store}>
			<Wrap initialState={initialState} />
		</Provider>,
		document.getElementById('root')
	)
})()
