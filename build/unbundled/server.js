"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server_1 = require("found/lib/server");
const http = require("http");
const logger = require("morgan");
const ReactDOMServer = require("react-dom/server");
const serialize = require("serialize-javascript");
const App_1 = require("./App");
const fetcher_1 = require("./fetcher");
const createDebug = require("debug");
const debug = createDebug('server');
const server = express();
server.use(logger('dev'));
server.use(express.static('build/public'));
server.use((req, res) => __awaiter(this, void 0, void 0, function* () {
    const fetcher = new fetcher_1.ServerFetcher('http://localhost:3000/graphql');
    const { redirect, status, element } = yield server_1.getFarceResult({
        url: req.url,
        historyMiddlewares: App_1.historyMiddlewares,
        routeConfig: App_1.routeConfig,
        resolver: App_1.createResolver(fetcher),
        render: App_1.renderConfig,
    });
    if (redirect) {
        res.redirect(302, redirect.url);
        return;
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

<script>
	window.__RELAY_PAYLOADS__ = ${serialize(fetcher, { isJSON: true })}
</script>
<script src="/bundle.js"></script>
</body>
</html>
	`.trim());
}));
const port = normalizePort(process.env.PORT || 3001);
server.set('port', port);
const httpServer = http.createServer(server);
httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);
function normalizePort(val) {
    let port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = httpServer.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
//# sourceMappingURL=server.js.map