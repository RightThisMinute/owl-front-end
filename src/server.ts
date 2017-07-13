
import * as express from 'express'
import { getFarceResult } from 'found/lib/server'
import * as http from 'http'
import * as logger from 'morgan'
import * as ReactDOMServer from 'react-dom/server'

import { renderConfig, routeConfig } from './App'

import * as createDebug from 'debug'
const debug = createDebug('server')


const server = express()
server.use(logger('dev'))

server.use(express.static('build/public'))

server.use(async (req, res) => {
	const { redirect, status, element } = await getFarceResult({
		url: req.url,
		routeConfig,
		render: renderConfig,
	})

	if (redirect) {
		res.redirect(302, redirect.url)
		return
	}

	res.status(status).send(`
<!DOCTYPE html>
<html lang="en-us">
<head>
	<meta charset="utf-8">
	<title>RTM Owl</title>
</head>
<body>
<div id="root">${ReactDOMServer.renderToString(element)}</div>

<script src="/bundle.js"></script>
</body>
</html>
	`.trim())
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
