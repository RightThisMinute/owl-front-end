
import * as React from 'react'
import Link = require('found/lib/Link')

import RouteComponentProps from '../props/RouteComponent'


export default class Main extends React.Component<RouteComponentProps, any> {

	render() { return (
		<section className="doc">
			<header>
				<h1><a href="/">RTM Owl</a></h1>
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
				{ this.props.children }
			</section>
		</section>
	) }

}
