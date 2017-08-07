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
	<link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700" 
	      rel="stylesheet">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC50ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sLnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQWtEO0FBQ2xELGtEQUFpRDtBQUVqRCxnQkFBK0IsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPO0lBQ3JELE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7OztrQkFhVSxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7O2lDQUd2QixTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUNuQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7Q0FNbkUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUNSLENBQUM7QUF6QkQseUJBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0ICogYXMgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoZWxlbWVudCwgc3RhdGUsIGZldGNoZXIpOiBzdHJpbmcge1xuXHRyZXR1cm4gYFxuPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW4tdXNcIj5cblxuPGhlYWQ+XG5cdDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuXHQ8dGl0bGU+UlRNIE93bDwvdGl0bGU+XG5cdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL21haW4uY3NzXCI+XG5cdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6NDAwLDUwMCw3MDBcIiBcblx0ICAgICAgcmVsPVwic3R5bGVzaGVldFwiPlxuPC9oZWFkPlxuXG48Ym9keT5cblx0PGRpdiBpZD1cInJvb3RcIj4ke1JlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKGVsZW1lbnQpfTwvZGl2PlxuXG5cdDxzY3JpcHQ+XG5cdFx0d2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18gPSAke3NlcmlhbGl6ZShzdGF0ZSwgeyBpc0pTT046IHRydWUgfSl9XG5cdFx0d2luZG93Ll9fUkVMQVlfUEFZTE9BRFNfXyA9ICR7c2VyaWFsaXplKGZldGNoZXIsIHsgaXNKU09OOiB0cnVlIH0pfVxuXHQ8L3NjcmlwdD5cblx0PHNjcmlwdCBzcmM9XCIvYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG48L2JvZHk+XG5cbjwvaHRtbD5cbmAudHJpbSgpXG59XG4iXX0=