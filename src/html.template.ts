
import * as ReactDOMServer from 'react-dom/server'
import * as serialize from 'serialize-javascript'

import config from './config'

export default function render(element, state, fetcher): string {
	return `
<!DOCTYPE html>
<html lang="en-us">

<head>
	<meta charset="utf-8">
	<title>RTM Owl</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="/main.css">
	<link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700" 
	      rel="stylesheet">
</head>

<body>
	<div id="root">${ReactDOMServer.renderToString(element)}</div>

	<script>
		window.__PRELOADED_STATE__ = ${serialize(state, { isJSON: true })}
		window.__RELAY_PAYLOADS__ = ${serialize(fetcher, { isJSON: true })}
		window.__CONFIG__ = ${serialize(config.client, { isJSON: true })}
	</script>
	<script src="/bundle.js"></script>
</body>

</html>
`.trim()
}
