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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsbUNBQWtDO0FBQ2xDLDZDQUFpRDtBQUNqRCw2QkFBNEI7QUFDNUIsaUNBQWdDO0FBQ2hDLG1EQUFrRDtBQUNsRCxrREFBaUQ7QUFFakQsK0JBQ2E7QUFDYix1Q0FBeUM7QUFFekMscUNBQW9DO0FBQ3BDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUduQyxNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQTtBQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBRXpCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0FBRTFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBTyxHQUFHLEVBQUUsR0FBRztJQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUFhLENBQUMsK0JBQStCLENBQUMsQ0FBQTtJQUVsRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxNQUFNLHVCQUFjLENBQUM7UUFDMUQsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO1FBQ1osa0JBQWtCLEVBQWxCLHdCQUFrQjtRQUNsQixXQUFXLEVBQVgsaUJBQVc7UUFDWCxRQUFRLEVBQUUsb0JBQWMsQ0FBQyxPQUFPLENBQUM7UUFDakMsTUFBTSxFQUFFLGtCQUFZO0tBQ3BCLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDZCxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsTUFBTSxDQUFBO0lBQ1AsQ0FBQztJQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDOzs7Ozs7OztpQkFRUixjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7OytCQUd4QixTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzs7OztFQUtqRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDVixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBO0FBQ3BELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRXhCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDNUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN2QixVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUMvQixVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUd2Qyx1QkFBdUIsR0FBa0I7SUFDeEMsSUFBSSxJQUFJLEdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtJQUN0RSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsR0FBRyxDQUFBO0lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtJQUMvQixJQUFJO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtBQUNsQixDQUFDO0FBRUQsaUJBQWlCLEtBQTRCO0lBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDO1FBQUMsTUFBTSxLQUFLLENBQUE7SUFDM0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFDdkUsTUFBTSxDQUFBLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkIsS0FBSyxRQUFRO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksK0JBQStCLENBQUMsQ0FBQTtZQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2YsS0FBSyxDQUFBO1FBQ04sS0FBSyxZQUFZO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLG9CQUFvQixDQUFDLENBQUE7WUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNmLEtBQUssQ0FBQTtRQUNOO1lBQ0MsTUFBTSxLQUFLLENBQUE7SUFDYixDQUFDO0FBQ0YsQ0FBQztBQUVEO0lBQ0MsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQy9CLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLEdBQUcsUUFBUSxJQUFJLEVBQUUsR0FBRyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM1RSxLQUFLLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUE7QUFDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHsgZ2V0RmFyY2VSZXN1bHQgfSBmcm9tICdmb3VuZC9saWIvc2VydmVyJ1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJ1xuaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gJ21vcmdhbidcbmltcG9ydCAqIGFzIFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5pbXBvcnQgKiBhcyBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnXG5cbmltcG9ydCB7IGNyZWF0ZVJlc29sdmVyLCBoaXN0b3J5TWlkZGxld2FyZXMsIHJlbmRlckNvbmZpZywgcm91dGVDb25maWcgfVxuXHRmcm9tICcuL0FwcCdcbmltcG9ydCB7IFNlcnZlckZldGNoZXIgfSBmcm9tICcuL2ZldGNoZXInXG5cbmltcG9ydCAqIGFzIGNyZWF0ZURlYnVnIGZyb20gJ2RlYnVnJ1xuY29uc3QgZGVidWcgPSBjcmVhdGVEZWJ1Zygnc2VydmVyJylcblxuXG5jb25zdCBzZXJ2ZXIgPSBleHByZXNzKClcbnNlcnZlci51c2UobG9nZ2VyKCdkZXYnKSlcblxuc2VydmVyLnVzZShleHByZXNzLnN0YXRpYygnYnVpbGQvcHVibGljJykpXG5cbnNlcnZlci51c2UoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IGZldGNoZXIgPSBuZXcgU2VydmVyRmV0Y2hlcignaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWwnKVxuXG5cdGNvbnN0IHsgcmVkaXJlY3QsIHN0YXR1cywgZWxlbWVudCB9ID0gYXdhaXQgZ2V0RmFyY2VSZXN1bHQoe1xuXHRcdHVybDogcmVxLnVybCxcblx0XHRoaXN0b3J5TWlkZGxld2FyZXMsXG5cdFx0cm91dGVDb25maWcsXG5cdFx0cmVzb2x2ZXI6IGNyZWF0ZVJlc29sdmVyKGZldGNoZXIpLFxuXHRcdHJlbmRlcjogcmVuZGVyQ29uZmlnLFxuXHR9KVxuXG5cdGlmIChyZWRpcmVjdCkge1xuXHRcdHJlcy5yZWRpcmVjdCgzMDIsIHJlZGlyZWN0LnVybClcblx0XHRyZXR1cm5cblx0fVxuXG5cdHJlcy5zdGF0dXMoc3RhdHVzKS5zZW5kKGBcbjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuLXVzXCI+XG48aGVhZD5cblx0PG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG5cdDx0aXRsZT5SVE0gT3dsPC90aXRsZT5cbjwvaGVhZD5cbjxib2R5PlxuPGRpdiBpZD1cInJvb3RcIj4ke1JlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKGVsZW1lbnQpfTwvZGl2PlxuXG48c2NyaXB0PlxuXHR3aW5kb3cuX19SRUxBWV9QQVlMT0FEU19fID0gJHtzZXJpYWxpemUoZmV0Y2hlciwgeyBpc0pTT046IHRydWUgfSl9XG48L3NjcmlwdD5cbjxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPlxuXHRgLnRyaW0oKSlcbn0pXG5cbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMSlcbnNlcnZlci5zZXQoJ3BvcnQnLCBwb3J0KVxuXG5jb25zdCBodHRwU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoc2VydmVyKVxuaHR0cFNlcnZlci5saXN0ZW4ocG9ydClcbmh0dHBTZXJ2ZXIub24oJ2Vycm9yJywgb25FcnJvcilcbmh0dHBTZXJ2ZXIub24oJ2xpc3RlbmluZycsIG9uTGlzdGVuaW5nKVxuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBudW1iZXJ8c3RyaW5nKTogbnVtYmVyfHN0cmluZ3xib29sZWFuIHtcblx0bGV0IHBvcnQ6IG51bWJlciA9ICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykgPyBwYXJzZUludCh2YWwsIDEwKSA6IHZhbFxuXHRpZiAoaXNOYU4ocG9ydCkpcmV0dXJuIHZhbFxuXHRlbHNlIGlmIChwb3J0ID49IDApIHJldHVybiBwb3J0XG5cdGVsc2UgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbik6IHZvaWQge1xuXHRpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHRocm93IGVycm9yXG5cdGxldCBiaW5kID0gKHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJykgPyAnUGlwZSAnICsgcG9ydCA6ICdQb3J0ICcgKyBwb3J0XG5cdHN3aXRjaChlcnJvci5jb2RlKSB7XG5cdFx0Y2FzZSAnRUFDQ0VTJzpcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApXG5cdFx0XHRwcm9jZXNzLmV4aXQoMSlcblx0XHRcdGJyZWFrXG5cdFx0Y2FzZSAnRUFERFJJTlVTRSc6XG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2JpbmR9IGlzIGFscmVhZHkgaW4gdXNlYClcblx0XHRcdHByb2Nlc3MuZXhpdCgxKVxuXHRcdFx0YnJlYWtcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgZXJyb3Jcblx0fVxufVxuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpOiB2b2lkIHtcblx0bGV0IGFkZHIgPSBodHRwU2VydmVyLmFkZHJlc3MoKVxuXHRsZXQgYmluZCA9ICh0eXBlb2YgYWRkciA9PT0gJ3N0cmluZycpID8gYHBpcGUgJHthZGRyfWAgOiBgcG9ydCAke2FkZHIucG9ydH1gXG5cdGRlYnVnKGBMaXN0ZW5pbmcgb24gJHtiaW5kfWApXG59XG4iXX0=