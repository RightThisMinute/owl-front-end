
import * as express from 'express'
const { Actions: FarceActions, ServerProtocol } = require('farce')
const { getStoreRenderArgs, RedirectException } = require('found')
const { RouterProvider } = require('found/lib/server')
import * as http from 'http'
import * as logger from 'morgan'
import * as React from 'react'
import { Provider } from 'react-redux'

import { createResolver, renderConfig } from './App'
import { ServerFetcher } from './fetcher'
import renderTemplate from './html.template'
import { genStore } from './store'

import * as createDebug from 'debug'
const debug = createDebug('server')


const server = express()
server.use(logger('dev'))

server.use(express.static('build/public'))

server.use(async (req, res) => {
	const store = genStore(new ServerProtocol(req.url))
	store.dispatch(FarceActions.init())
	const matchContext = { store }
	const fetcher = new ServerFetcher('http://localhost:3000/graphql')

	let renderArgs

	try {
		renderArgs = await getStoreRenderArgs({
			store,
			matchContext,
			resolver: createResolver(fetcher),
		})
	}
	catch (exception) {
		if (exception instanceof RedirectException) {
			res.redirect(302, store.farce.createHref(exception.location))
			return
		}

		throw exception
	}

	res
		.status(renderArgs.error ? renderArgs.error.status : 200)
		.send(renderTemplate(
			<Provider store={store}>
					<RouterProvider router={renderArgs.router}>
						{renderConfig(renderArgs)}
					</RouterProvider>
				</Provider>,
			store.getState(),
			fetcher,
		))
})

const port = normalizePort(process.env.PORT || 3001)
server.set('port', port)

const httpServer = http.createServer(server)
httpServer.listen(port)
httpServer.on('error', onError)
httpServer.on('listening', onListening)


function normalizePort(val: number|string): number|string|boolean {
	let port: number = (typeof val === 'string') ? parseInt(val, 10) : val
	if (isNaN(port))return val
	else if (port >= 0) return port
	else return false
}

function onError(error: NodeJS.ErrnoException): void {
	if (error.syscall !== 'listen') throw error
	let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port
	switch(error.code) {
		case 'EACCES':
			console.error(`${bind} requires elevated privileges`)
			process.exit(1)
			break
		case 'EADDRINUSE':
			console.error(`${bind} is already in use`)
			process.exit(1)
			break
		default:
			throw error
	}
}

function onListening(): void {
	let addr = httpServer.address()
	let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`
	debug(`Listening on ${bind}`)
}
