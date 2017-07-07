
import * as express from 'express'
import * as http from 'http'
import * as logger from 'morgan'

import * as createDebug from 'debug'
const debug = createDebug('server')


const server = express()
server.use(logger('dev'))

const router = express.Router()
// placeholder route handler
router.get('/', (req, res, next) => {
	res.json({
		message: 'Hello, World!'
	})
})
server.use('/', router)

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
