"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOMServer = require("react-dom/server");
const serialize = require("serialize-javascript");
function render(element, state, fetcher) {
    return `
<!DOCTYPE html>
<html lang="en-us">

<head>
	<meta charset="utf-8">
	<title>RTM Owl</title>
	<link rel="stylesheet" type="text/css" href="/main.css">
	<link href="https://fonts.googleapis.com/css?family=Rubik:400,700" rel="stylesheet">
</head>

<body>
	<div id="root">${ReactDOMServer.renderToString(element)}</div>

	<script>
		window.__PRELOADED_STATE__ = ${serialize(state, { isJSON: true })}
		window.__RELAY_PAYLOADS__ = ${serialize(fetcher, { isJSON: true })}
	</script>
	<script src="/bundle.js"></script>
</body>

</html>
`.trim();
}
exports.default = render;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC50ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sLnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQWtEO0FBQ2xELGtEQUFpRDtBQUVqRCxnQkFBK0IsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPO0lBQ3JELE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O2tCQVlVLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDOzs7aUNBR3ZCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0NBQ25DLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7OztDQU1uRSxDQUFDLElBQUksRUFBRSxDQUFBO0FBQ1IsQ0FBQztBQXhCRCx5QkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5pbXBvcnQgKiBhcyBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcihlbGVtZW50LCBzdGF0ZSwgZmV0Y2hlcik6IHN0cmluZyB7XG5cdHJldHVybiBgXG48IURPQ1RZUEUgaHRtbD5cbjxodG1sIGxhbmc9XCJlbi11c1wiPlxuXG48aGVhZD5cblx0PG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG5cdDx0aXRsZT5SVE0gT3dsPC90aXRsZT5cblx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvbWFpbi5jc3NcIj5cblx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpazo0MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiPlxuPC9oZWFkPlxuXG48Ym9keT5cblx0PGRpdiBpZD1cInJvb3RcIj4ke1JlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKGVsZW1lbnQpfTwvZGl2PlxuXG5cdDxzY3JpcHQ+XG5cdFx0d2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18gPSAke3NlcmlhbGl6ZShzdGF0ZSwgeyBpc0pTT046IHRydWUgfSl9XG5cdFx0d2luZG93Ll9fUkVMQVlfUEFZTE9BRFNfXyA9ICR7c2VyaWFsaXplKGZldGNoZXIsIHsgaXNKU09OOiB0cnVlIH0pfVxuXHQ8L3NjcmlwdD5cblx0PHNjcmlwdCBzcmM9XCIvYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG48L2JvZHk+XG5cbjwvaHRtbD5cbmAudHJpbSgpXG59XG4iXX0=