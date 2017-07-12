
import * as React from 'react'

import { Error } from 'found/lib/createRender'


interface ErrorPageProps {
	error: Error
}


export default class ErrorPage extends React.Component<ErrorPageProps, any> {

	render() { return (
		<div className="error">
			<h2>Error</h2>
			<div>
				{ this.props.error.status === 404 ? 'Not found' : 'Error' }
			</div>
		</div>
	) }

}
