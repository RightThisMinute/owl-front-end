
import * as React from 'react'
const { createFragmentContainer, graphql } = require('react-relay')

import SetActiveVideosMutation from '../mutations/SetActiveVideos'


interface Props {
	activeVideos: { id: string }[]
	relay: { environment: any }
}

interface State {
	ids: string
}

class SetActiveVideosPage extends React.Component<Props, State> {

	constructor(props) {
		super(props)

		this.state = {
			ids: props.activeVideos.map(({ id }) => id).join("\n") + "\n"
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	private handleInputChange(event): void {
		const target = event.target
		let value = target.type === 'checkbox' ? target.checked : target.value

		if (target.name === 'ids')
			value = value
				.split("\n")
				.filter(url => url.trim() !== '')
				.map((url) => {
					const match = url.trim().match(
						/(?:[?&]v=|embed\/|youtu\.be\/)([\w\d_\-]*)/i
					)
					return match !== null ? match[1] : url
				})
				.join("\n") + "\n"

		this.setState({
			[target.name]: value
		})
	}

	private handleSubmit(event): void {
		event.preventDefault()

		const ids = this.state.ids.trim().split("\n")

		SetActiveVideosMutation.commit(this.props.relay.environment, ids)
	}

	render() {
		return (
			<section className="set-active-videos">
				<form onSubmit={this.handleSubmit}>
					<p>Put each URL on a separate line.</p>
					<textarea name="ids" value={this.state.ids}
					          onChange={this.handleInputChange}
					/>
					<button>Replace Active Videos</button>
				</form>
			</section>
		)
	}

}


export default  createFragmentContainer(SetActiveVideosPage, graphql`
	fragment SetActiveVideosPage_activeVideos on Video @relay(plural: true) {
		id
	}
`)
