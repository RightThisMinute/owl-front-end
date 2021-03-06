
import * as React from 'react'
import Link = require('found/lib/Link')

import RouteComponentProps from '../props/RouteComponent'

// Relative to [PROJECT_ROOT/build/unbundled] since we compile TypeScript
// directly with `tsc` instead of working through Webpack. Unfortunately,
// we need this setup to support relay-compiler.
import '../../../src/components/Main/general.pcss'
import '../../../src/components/Main/frame.pcss'
import '../../../src/components/Main/header.pcss'
import '../../../src/components/Main/footer.pcss'


export default class Main extends React.Component<RouteComponentProps, any> {

	render() { return (
		<section className="doc">
			<header>
				<h1><Link to="/" activeClassName="active">RTM Owl</Link></h1>
				<nav>
					<ul>
						<li><Link to="/" activeClassName="active">
							Home
						</Link></li>
						<li><Link to="/videos/forms/set_active" activeClassName="active">
							Set Videos
						</Link></li>
					</ul>
				</nav>
			</header>
			<section className="page">
				{this.props.children}
			</section>
			<section className="footer">
				Vector graphics by <a href="http://www.vecteezy.com/">Vecteezy!</a>.
			</section>
		</section>
	) }

}
