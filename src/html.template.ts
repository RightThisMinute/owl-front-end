
import * as ReactDOMServer from 'react-dom/server'
import * as serialize from 'serialize-javascript'

export default function render(element, state, fetcher): string {
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
`.trim()
}
