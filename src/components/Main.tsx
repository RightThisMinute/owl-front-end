
import * as React from 'react'

import RouteComponentProps from '../props/RouteComponentProps'


export default class Main extends React.Component<RouteComponentProps, any> {

	render() { return (
		<section className="doc">
			<header>
				<h1><a href="/">RTM Owl</a></h1>
			</header>
			<section className="page">
				{ this.props.children }
			</section>
		</section>
	) }

}
