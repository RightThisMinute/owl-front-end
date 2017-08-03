
import * as ReactDOMServer from 'react-dom/server'
import * as serialize from 'serialize-javascript'

export default function render(element, state, fetcher): string {
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
`.trim()
}
