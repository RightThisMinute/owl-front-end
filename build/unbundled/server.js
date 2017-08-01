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
const store_1 = require("./store");
const createDebug = require("debug");
const debug = createDebug('server');
const server = express();
server.use(logger('dev'));
server.use(express.static('build/public'));
server.use((req, res) => __awaiter(this, void 0, void 0, function* () {
    const store = store_1.genStore(new ServerProtocol(req.url));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLG1DQUFrQztBQUNsQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbEUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2xFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUN0RCw2QkFBNEI7QUFDNUIsaUNBQWdDO0FBQ2hDLCtCQUE4QjtBQUM5Qiw2Q0FBc0M7QUFFdEMsK0JBQW9EO0FBQ3BELHVDQUF5QztBQUN6QyxtREFBNEM7QUFDNUMsbUNBQWtDO0FBRWxDLHFDQUFvQztBQUNwQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7QUFHbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUE7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUV6QixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtBQUUxQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQU8sR0FBRyxFQUFFLEdBQUc7SUFDekIsTUFBTSxLQUFLLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNuRCxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ25DLE1BQU0sWUFBWSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUE7SUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1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QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2YsS0FBSyxDQUFBO1FBQ047WUFDQyxNQUFNLEtBQUssQ0FBQTtJQUNiLENBQUM7QUFDRixDQUFDO0FBRUQ7SUFDQyxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsR0FBRyxRQUFRLElBQUksRUFBRSxHQUFHLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzVFLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCB7IEFjdGlvbnM6IEZhcmNlQWN0aW9ucywgU2VydmVyUHJvdG9jb2wgfSA9IHJlcXVpcmUoJ2ZhcmNlJylcbmNvbnN0IHsgZ2V0U3RvcmVSZW5kZXJBcmdzLCBSZWRpcmVjdEV4Y2VwdGlvbiB9ID0gcmVxdWlyZSgnZm91bmQnKVxuY29uc3QgeyBSb3V0ZXJQcm92aWRlciB9ID0gcmVxdWlyZSgnZm91bmQvbGliL3NlcnZlcicpXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnXG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnbW9yZ2FuJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBjcmVhdGVSZXNvbHZlciwgcmVuZGVyQ29uZmlnIH0gZnJvbSAnLi9BcHAnXG5pbXBvcnQgeyBTZXJ2ZXJGZXRjaGVyIH0gZnJvbSAnLi9mZXRjaGVyJ1xuaW1wb3J0IHJlbmRlclRlbXBsYXRlIGZyb20gJy4vaHRtbC50ZW1wbGF0ZSdcbmltcG9ydCB7IGdlblN0b3JlIH0gZnJvbSAnLi9zdG9yZSdcblxuaW1wb3J0ICogYXMgY3JlYXRlRGVidWcgZnJvbSAnZGVidWcnXG5jb25zdCBkZWJ1ZyA9IGNyZWF0ZURlYnVnKCdzZXJ2ZXInKVxuXG5cbmNvbnN0IHNlcnZlciA9IGV4cHJlc3MoKVxuc2VydmVyLnVzZShsb2dnZXIoJ2RldicpKVxuXG5zZXJ2ZXIudXNlKGV4cHJlc3Muc3RhdGljKCdidWlsZC9wdWJsaWMnKSlcblxuc2VydmVyLnVzZShhc3luYyAocmVxLCByZXMpID0+IHtcblx0Y29uc3Qgc3RvcmUgPSBnZW5TdG9yZShuZXcgU2VydmVyUHJvdG9jb2wocmVxLnVybCkpXG5cdHN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpXG5cdGNvbnN0IG1hdGNoQ29udGV4dCA9IHsgc3RvcmUgfVxuXHRjb25zdCBmZXRjaGVyID0gbmV3IFNlcnZlckZldGNoZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsJylcblxuXHRsZXQgcmVuZGVyQXJnc1xuXG5cdHRyeSB7XG5cdFx0cmVuZGVyQXJncyA9IGF3YWl0IGdldFN0b3JlUmVuZGVyQXJncyh7XG5cdFx0XHRzdG9yZSxcblx0XHRcdG1hdGNoQ29udGV4dCxcblx0XHRcdHJlc29sdmVyOiBjcmVhdGVSZXNvbHZlcihmZXRjaGVyKSxcblx0XHR9KVxuXHR9XG5cdGNhdGNoIChleGNlcHRpb24pIHtcblx0XHRpZiAoZXhjZXB0aW9uIGluc3RhbmNlb2YgUmVkaXJlY3RFeGNlcHRpb24pIHtcblx0XHRcdHJlcy5yZWRpcmVjdCgzMDIsIHN0b3JlLmZhcmNlLmNyZWF0ZUhyZWYoZXhjZXB0aW9uLmxvY2F0aW9uKSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdHRocm93IGV4Y2VwdGlvblxuXHR9XG5cblx0cmVzXG5cdFx0LnN0YXR1cyhyZW5kZXJBcmdzLmVycm9yID8gcmVuZGVyQXJncy5lcnJvci5zdGF0dXMgOiAyMDApXG5cdFx0LnNlbmQocmVuZGVyVGVtcGxhdGUoXG5cdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0XHQ8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyZW5kZXJBcmdzLnJvdXRlcn0+XG5cdFx0XHRcdFx0XHR7cmVuZGVyQ29uZmlnKHJlbmRlckFyZ3MpfVxuXHRcdFx0XHRcdDwvUm91dGVyUHJvdmlkZXI+XG5cdFx0XHRcdDwvUHJvdmlkZXI+LFxuXHRcdFx0c3RvcmUuZ2V0U3RhdGUoKSxcblx0XHRcdGZldGNoZXIsXG5cdFx0KSlcbn0pXG5cbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMSlcbnNlcnZlci5zZXQoJ3BvcnQnLCBwb3J0KVxuXG5jb25zdCBodHRwU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoc2VydmVyKVxuaHR0cFNlcnZlci5saXN0ZW4ocG9ydClcbmh0dHBTZXJ2ZXIub24oJ2Vycm9yJywgb25FcnJvcilcbmh0dHBTZXJ2ZXIub24oJ2xpc3RlbmluZycsIG9uTGlzdGVuaW5nKVxuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBudW1iZXJ8c3RyaW5nKTogbnVtYmVyfHN0cmluZ3xib29sZWFuIHtcblx0bGV0IHBvcnQ6IG51bWJlciA9ICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykgPyBwYXJzZUludCh2YWwsIDEwKSA6IHZhbFxuXHRpZiAoaXNOYU4ocG9ydCkpcmV0dXJuIHZhbFxuXHRlbHNlIGlmIChwb3J0ID49IDApIHJldHVybiBwb3J0XG5cdGVsc2UgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbik6IHZvaWQge1xuXHRpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHRocm93IGVycm9yXG5cdGxldCBiaW5kID0gKHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJykgPyAnUGlwZSAnICsgcG9ydCA6ICdQb3J0ICcgKyBwb3J0XG5cdHN3aXRjaChlcnJvci5jb2RlKSB7XG5cdFx0Y2FzZSAnRUFDQ0VTJzpcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApXG5cdFx0XHRwcm9jZXNzLmV4aXQoMSlcblx0XHRcdGJyZWFrXG5cdFx0Y2FzZSAnRUFERFJJTlVTRSc6XG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2JpbmR9IGlzIGFscmVhZHkgaW4gdXNlYClcblx0XHRcdHByb2Nlc3MuZXhpdCgxKVxuXHRcdFx0YnJlYWtcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgZXJyb3Jcblx0fVxufVxuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpOiB2b2lkIHtcblx0bGV0IGFkZHIgPSBodHRwU2VydmVyLmFkZHJlc3MoKVxuXHRsZXQgYmluZCA9ICh0eXBlb2YgYWRkciA9PT0gJ3N0cmluZycpID8gYHBpcGUgJHthZGRyfWAgOiBgcG9ydCAke2FkZHIucG9ydH1gXG5cdGRlYnVnKGBMaXN0ZW5pbmcgb24gJHtiaW5kfWApXG59XG4iXX0=