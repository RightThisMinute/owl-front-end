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
const { Actions: FarceActions, ServerProtocol } = require('farce');
const { getStoreRenderArgs, RedirectException } = require('found');
const { RouterProvider } = require('found/lib/server');
const http = require("http");
const logger = require("morgan");
const React = require("react");
const react_redux_1 = require("react-redux");
const App_1 = require("./App");
const fetcher_1 = require("./fetcher");
const html_template_1 = require("./html.template");
const genStore_1 = require("./genStore");
const createDebug = require("debug");
const debug = createDebug('server');
const server = express();
server.use(logger('dev'));
server.use(express.static('build/public'));
server.use((req, res) => __awaiter(this, void 0, void 0, function* () {
    const store = genStore_1.default(new ServerProtocol(req.url));
    store.dispatch(FarceActions.init());
    const matchContext = { store };
    const fetcher = new fetcher_1.ServerFetcher('http://localhost:3000/graphql');
    let renderArgs;
    try {
        renderArgs = yield getStoreRenderArgs({
            store,
            matchContext,
            resolver: App_1.createResolver(fetcher),
        });
    }
    catch (exception) {
        if (exception instanceof RedirectException) {
            res.redirect(302, store.farce.createHref(exception.location));
            return;
        }
        throw exception;
    }
    res
        .status(renderArgs.error ? renderArgs.error.status : 200)
        .send(html_template_1.default(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(RouterProvider, { router: renderArgs.router }, App_1.renderConfig(renderArgs))), store.getState(), fetcher));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLG1DQUFrQztBQUNsQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbEUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2xFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUN0RCw2QkFBNEI7QUFDNUIsaUNBQWdDO0FBQ2hDLCtCQUE4QjtBQUM5Qiw2Q0FBc0M7QUFFdEMsK0JBQW9EO0FBQ3BELHVDQUF5QztBQUN6QyxtREFBNEM7QUFDNUMseUNBQWlDO0FBRWpDLHFDQUFvQztBQUNwQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7QUFHbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUE7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUV6QixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtBQUUxQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQU8sR0FBRyxFQUFFLEdBQUc7SUFDekIsTUFBTSxLQUFLLEdBQUcsa0JBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNuRCxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ25DLE1BQU0sWUFBWSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUE7SUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1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QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2YsS0FBSyxDQUFBO1FBQ047WUFDQyxNQUFNLEtBQUssQ0FBQTtJQUNiLENBQUM7QUFDRixDQUFDO0FBRUQ7SUFDQyxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsR0FBRyxRQUFRLElBQUksRUFBRSxHQUFHLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzVFLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCB7IEFjdGlvbnM6IEZhcmNlQWN0aW9ucywgU2VydmVyUHJvdG9jb2wgfSA9IHJlcXVpcmUoJ2ZhcmNlJylcbmNvbnN0IHsgZ2V0U3RvcmVSZW5kZXJBcmdzLCBSZWRpcmVjdEV4Y2VwdGlvbiB9ID0gcmVxdWlyZSgnZm91bmQnKVxuY29uc3QgeyBSb3V0ZXJQcm92aWRlciB9ID0gcmVxdWlyZSgnZm91bmQvbGliL3NlcnZlcicpXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnXG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnbW9yZ2FuJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBjcmVhdGVSZXNvbHZlciwgcmVuZGVyQ29uZmlnIH0gZnJvbSAnLi9BcHAnXG5pbXBvcnQgeyBTZXJ2ZXJGZXRjaGVyIH0gZnJvbSAnLi9mZXRjaGVyJ1xuaW1wb3J0IHJlbmRlclRlbXBsYXRlIGZyb20gJy4vaHRtbC50ZW1wbGF0ZSdcbmltcG9ydCBnZW5TdG9yZSBmcm9tICcuL2dlblN0b3JlJ1xuXG5pbXBvcnQgKiBhcyBjcmVhdGVEZWJ1ZyBmcm9tICdkZWJ1ZydcbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoJ3NlcnZlcicpXG5cblxuY29uc3Qgc2VydmVyID0gZXhwcmVzcygpXG5zZXJ2ZXIudXNlKGxvZ2dlcignZGV2JykpXG5cbnNlcnZlci51c2UoZXhwcmVzcy5zdGF0aWMoJ2J1aWxkL3B1YmxpYycpKVxuXG5zZXJ2ZXIudXNlKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCBzdG9yZSA9IGdlblN0b3JlKG5ldyBTZXJ2ZXJQcm90b2NvbChyZXEudXJsKSlcblx0c3RvcmUuZGlzcGF0Y2goRmFyY2VBY3Rpb25zLmluaXQoKSlcblx0Y29uc3QgbWF0Y2hDb250ZXh0ID0geyBzdG9yZSB9XG5cdGNvbnN0IGZldGNoZXIgPSBuZXcgU2VydmVyRmV0Y2hlcignaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWwnKVxuXG5cdGxldCByZW5kZXJBcmdzXG5cblx0dHJ5IHtcblx0XHRyZW5kZXJBcmdzID0gYXdhaXQgZ2V0U3RvcmVSZW5kZXJBcmdzKHtcblx0XHRcdHN0b3JlLFxuXHRcdFx0bWF0Y2hDb250ZXh0LFxuXHRcdFx0cmVzb2x2ZXI6IGNyZWF0ZVJlc29sdmVyKGZldGNoZXIpLFxuXHRcdH0pXG5cdH1cblx0Y2F0Y2ggKGV4Y2VwdGlvbikge1xuXHRcdGlmIChleGNlcHRpb24gaW5zdGFuY2VvZiBSZWRpcmVjdEV4Y2VwdGlvbikge1xuXHRcdFx0cmVzLnJlZGlyZWN0KDMwMiwgc3RvcmUuZmFyY2UuY3JlYXRlSHJlZihleGNlcHRpb24ubG9jYXRpb24pKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0dGhyb3cgZXhjZXB0aW9uXG5cdH1cblxuXHRyZXNcblx0XHQuc3RhdHVzKHJlbmRlckFyZ3MuZXJyb3IgPyByZW5kZXJBcmdzLmVycm9yLnN0YXR1cyA6IDIwMClcblx0XHQuc2VuZChyZW5kZXJUZW1wbGF0ZShcblx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0XHRcdDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JlbmRlckFyZ3Mucm91dGVyfT5cblx0XHRcdFx0XHRcdHtyZW5kZXJDb25maWcocmVuZGVyQXJncyl9XG5cdFx0XHRcdFx0PC9Sb3V0ZXJQcm92aWRlcj5cblx0XHRcdFx0PC9Qcm92aWRlcj4sXG5cdFx0XHRzdG9yZS5nZXRTdGF0ZSgpLFxuXHRcdFx0ZmV0Y2hlcixcblx0XHQpKVxufSlcblxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAxKVxuc2VydmVyLnNldCgncG9ydCcsIHBvcnQpXG5cbmNvbnN0IGh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihzZXJ2ZXIpXG5odHRwU2VydmVyLmxpc3Rlbihwb3J0KVxuaHR0cFNlcnZlci5vbignZXJyb3InLCBvbkVycm9yKVxuaHR0cFNlcnZlci5vbignbGlzdGVuaW5nJywgb25MaXN0ZW5pbmcpXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWw6IG51bWJlcnxzdHJpbmcpOiBudW1iZXJ8c3RyaW5nfGJvb2xlYW4ge1xuXHRsZXQgcG9ydDogbnVtYmVyID0gKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSA/IHBhcnNlSW50KHZhbCwgMTApIDogdmFsXG5cdGlmIChpc05hTihwb3J0KSlyZXR1cm4gdmFsXG5cdGVsc2UgaWYgKHBvcnQgPj0gMCkgcmV0dXJuIHBvcnRcblx0ZWxzZSByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gb25FcnJvcihlcnJvcjogTm9kZUpTLkVycm5vRXhjZXB0aW9uKTogdm9pZCB7XG5cdGlmIChlcnJvci5zeXNjYWxsICE9PSAnbGlzdGVuJykgdGhyb3cgZXJyb3Jcblx0bGV0IGJpbmQgPSAodHlwZW9mIHBvcnQgPT09ICdzdHJpbmcnKSA/ICdQaXBlICcgKyBwb3J0IDogJ1BvcnQgJyArIHBvcnRcblx0c3dpdGNoKGVycm9yLmNvZGUpIHtcblx0XHRjYXNlICdFQUNDRVMnOlxuXHRcdFx0Y29uc29sZS5lcnJvcihgJHtiaW5kfSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYClcblx0XHRcdHByb2Nlc3MuZXhpdCgxKVxuXHRcdFx0YnJlYWtcblx0XHRjYXNlICdFQUREUklOVVNFJzpcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gaXMgYWxyZWFkeSBpbiB1c2VgKVxuXHRcdFx0cHJvY2Vzcy5leGl0KDEpXG5cdFx0XHRicmVha1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBlcnJvclxuXHR9XG59XG5cbmZ1bmN0aW9uIG9uTGlzdGVuaW5nKCk6IHZvaWQge1xuXHRsZXQgYWRkciA9IGh0dHBTZXJ2ZXIuYWRkcmVzcygpXG5cdGxldCBiaW5kID0gKHR5cGVvZiBhZGRyID09PSAnc3RyaW5nJykgPyBgcGlwZSAke2FkZHJ9YCA6IGBwb3J0ICR7YWRkci5wb3J0fWBcblx0ZGVidWcoYExpc3RlbmluZyBvbiAke2JpbmR9YClcbn1cbiJdfQ==