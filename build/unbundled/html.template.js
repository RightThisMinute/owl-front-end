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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC50ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sLnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQWtEO0FBQ2xELGtEQUFpRDtBQUVqRCxnQkFBK0IsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPO0lBQ3JELE1BQU0sQ0FBQzs7Ozs7Ozs7OztrQkFVVSxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7O2lDQUd2QixTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUNuQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7Q0FNbkUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUNSLENBQUM7QUF0QkQseUJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0ICogYXMgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoZWxlbWVudCwgc3RhdGUsIGZldGNoZXIpOiBzdHJpbmcge1xuXHRyZXR1cm4gYFxuPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW4tdXNcIj5cblxuPGhlYWQ+XG5cdDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuXHQ8dGl0bGU+UlRNIE93bDwvdGl0bGU+XG48L2hlYWQ+XG5cbjxib2R5PlxuXHQ8ZGl2IGlkPVwicm9vdFwiPiR7UmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoZWxlbWVudCl9PC9kaXY+XG5cblx0PHNjcmlwdD5cblx0XHR3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXyA9ICR7c2VyaWFsaXplKHN0YXRlLCB7IGlzSlNPTjogdHJ1ZSB9KX1cblx0XHR3aW5kb3cuX19SRUxBWV9QQVlMT0FEU19fID0gJHtzZXJpYWxpemUoZmV0Y2hlciwgeyBpc0pTT046IHRydWUgfSl9XG5cdDwvc2NyaXB0PlxuXHQ8c2NyaXB0IHNyYz1cIi9idW5kbGUuanNcIj48L3NjcmlwdD5cbjwvYm9keT5cblxuPC9odG1sPlxuYC50cmltKClcbn1cbiJdfQ==