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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLG1DQUFrQztBQUNsQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbEUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2xFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUN0RCw2QkFBNEI7QUFDNUIsaUNBQWdDO0FBQ2hDLCtCQUE4QjtBQUM5Qiw2Q0FBc0M7QUFFdEMsK0JBQ2E7QUFDYix1Q0FBeUM7QUFDekMsbURBQTRDO0FBQzVDLHlDQUFpQztBQUVqQyxxQ0FBb0M7QUFDcEMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBR25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFBO0FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFFekIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7QUFFMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFPLEdBQUcsRUFBRSxHQUFHO0lBQ3pCLE1BQU0sS0FBSyxHQUFHLGtCQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDbkQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUNuQyxNQUFNLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO0lBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksdUJB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T0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNmLEtBQUssQ0FBQTtRQUNOO1lBQ0MsTUFBTSxLQUFLLENBQUE7SUFDYixDQUFDO0FBQ0YsQ0FBQztBQUVEO0lBQ0MsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQy9CLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLEdBQUcsUUFBUSxJQUFJLEVBQUUsR0FBRyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM1RSxLQUFLLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUE7QUFDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgeyBBY3Rpb25zOiBGYXJjZUFjdGlvbnMsIFNlcnZlclByb3RvY29sIH0gPSByZXF1aXJlKCdmYXJjZScpXG5jb25zdCB7IGdldFN0b3JlUmVuZGVyQXJncywgUmVkaXJlY3RFeGNlcHRpb24gfSA9IHJlcXVpcmUoJ2ZvdW5kJylcbmNvbnN0IHsgUm91dGVyUHJvdmlkZXIgfSA9IHJlcXVpcmUoJ2ZvdW5kL2xpYi9zZXJ2ZXInKVxuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJ1xuaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gJ21vcmdhbidcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgY3JlYXRlUmVzb2x2ZXIsIHJlbmRlckNvbmZpZyB9XG5cdGZyb20gJy4vQXBwJ1xuaW1wb3J0IHsgU2VydmVyRmV0Y2hlciB9IGZyb20gJy4vZmV0Y2hlcidcbmltcG9ydCByZW5kZXJUZW1wbGF0ZSBmcm9tICcuL2h0bWwudGVtcGxhdGUnXG5pbXBvcnQgZ2VuU3RvcmUgZnJvbSAnLi9nZW5TdG9yZSdcblxuaW1wb3J0ICogYXMgY3JlYXRlRGVidWcgZnJvbSAnZGVidWcnXG5jb25zdCBkZWJ1ZyA9IGNyZWF0ZURlYnVnKCdzZXJ2ZXInKVxuXG5cbmNvbnN0IHNlcnZlciA9IGV4cHJlc3MoKVxuc2VydmVyLnVzZShsb2dnZXIoJ2RldicpKVxuXG5zZXJ2ZXIudXNlKGV4cHJlc3Muc3RhdGljKCdidWlsZC9wdWJsaWMnKSlcblxuc2VydmVyLnVzZShhc3luYyAocmVxLCByZXMpID0+IHtcblx0Y29uc3Qgc3RvcmUgPSBnZW5TdG9yZShuZXcgU2VydmVyUHJvdG9jb2wocmVxLnVybCkpXG5cdHN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpXG5cdGNvbnN0IG1hdGNoQ29udGV4dCA9IHsgc3RvcmUgfVxuXHRjb25zdCBmZXRjaGVyID0gbmV3IFNlcnZlckZldGNoZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsJylcblxuXHRsZXQgcmVuZGVyQXJnc1xuXG5cdHRyeSB7XG5cdFx0cmVuZGVyQXJncyA9IGF3YWl0IGdldFN0b3JlUmVuZGVyQXJncyh7XG5cdFx0XHRzdG9yZSxcblx0XHRcdG1hdGNoQ29udGV4dCxcblx0XHRcdHJlc29sdmVyOiBjcmVhdGVSZXNvbHZlcihmZXRjaGVyKSxcblx0XHR9KVxuXHR9XG5cdGNhdGNoIChleGNlcHRpb24pIHtcblx0XHRpZiAoZXhjZXB0aW9uIGluc3RhbmNlb2YgUmVkaXJlY3RFeGNlcHRpb24pIHtcblx0XHRcdHJlcy5yZWRpcmVjdCgzMDIsIHN0b3JlLmZhcmNlLmNyZWF0ZUhyZWYoZXhjZXB0aW9uLmxvY2F0aW9uKSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdHRocm93IGV4Y2VwdGlvblxuXHR9XG5cblx0cmVzXG5cdFx0LnN0YXR1cyhyZW5kZXJBcmdzLmVycm9yID8gcmVuZGVyQXJncy5lcnJvci5zdGF0dXMgOiAyMDApXG5cdFx0LnNlbmQocmVuZGVyVGVtcGxhdGUoXG5cdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0XHQ8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyZW5kZXJBcmdzLnJvdXRlcn0+XG5cdFx0XHRcdFx0XHR7cmVuZGVyQ29uZmlnKHJlbmRlckFyZ3MpfVxuXHRcdFx0XHRcdDwvUm91dGVyUHJvdmlkZXI+XG5cdFx0XHRcdDwvUHJvdmlkZXI+LFxuXHRcdFx0c3RvcmUuZ2V0U3RhdGUoKSxcblx0XHRcdGZldGNoZXIsXG5cdFx0KSlcbn0pXG5cbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMSlcbnNlcnZlci5zZXQoJ3BvcnQnLCBwb3J0KVxuXG5jb25zdCBodHRwU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoc2VydmVyKVxuaHR0cFNlcnZlci5saXN0ZW4ocG9ydClcbmh0dHBTZXJ2ZXIub24oJ2Vycm9yJywgb25FcnJvcilcbmh0dHBTZXJ2ZXIub24oJ2xpc3RlbmluZycsIG9uTGlzdGVuaW5nKVxuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBudW1iZXJ8c3RyaW5nKTogbnVtYmVyfHN0cmluZ3xib29sZWFuIHtcblx0bGV0IHBvcnQ6IG51bWJlciA9ICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykgPyBwYXJzZUludCh2YWwsIDEwKSA6IHZhbFxuXHRpZiAoaXNOYU4ocG9ydCkpcmV0dXJuIHZhbFxuXHRlbHNlIGlmIChwb3J0ID49IDApIHJldHVybiBwb3J0XG5cdGVsc2UgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbik6IHZvaWQge1xuXHRpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHRocm93IGVycm9yXG5cdGxldCBiaW5kID0gKHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJykgPyAnUGlwZSAnICsgcG9ydCA6ICdQb3J0ICcgKyBwb3J0XG5cdHN3aXRjaChlcnJvci5jb2RlKSB7XG5cdFx0Y2FzZSAnRUFDQ0VTJzpcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApXG5cdFx0XHRwcm9jZXNzLmV4aXQoMSlcblx0XHRcdGJyZWFrXG5cdFx0Y2FzZSAnRUFERFJJTlVTRSc6XG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2JpbmR9IGlzIGFscmVhZHkgaW4gdXNlYClcblx0XHRcdHByb2Nlc3MuZXhpdCgxKVxuXHRcdFx0YnJlYWtcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgZXJyb3Jcblx0fVxufVxuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpOiB2b2lkIHtcblx0bGV0IGFkZHIgPSBodHRwU2VydmVyLmFkZHJlc3MoKVxuXHRsZXQgYmluZCA9ICh0eXBlb2YgYWRkciA9PT0gJ3N0cmluZycpID8gYHBpcGUgJHthZGRyfWAgOiBgcG9ydCAke2FkZHIucG9ydH1gXG5cdGRlYnVnKGBMaXN0ZW5pbmcgb24gJHtiaW5kfWApXG59XG4iXX0=