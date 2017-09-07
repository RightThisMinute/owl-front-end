
import * as React from 'react'
import { connect } from 'react-redux'
const { createFragmentContainer, graphql } = require('react-relay')

import { store, StoreState } from '../store'
import { Action } from '../reducer'
import SetActiveVideosMutation
	from './SetActiveVideosPage/SetActiveVideos.mutation'

import '../../../src/components/SetActiveVideosPage/style.pcss'


interface OwnProps {
	activeVideos: { id: string }[]
	relay: { environment: any }
}

interface StateProps {
	saved: boolean,
	saving: boolean,
	error: Error|null
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps

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

	componentWillUnmount(): void {
		store.dispatch({ type: Action.ResetSetActiveVideosFlags })
	}

	render() {
		let message: string|React.ReactNode|null = null
		let messageClass: string = ''
		let buttonText: string|null = null
		let disabled = false

		if (this.props.saved) {
			messageClass = 'success'
			message = 'Active videos set successfully.'
		}
		else if (this.props.saving) {
			disabled = true
			buttonText = 'Saving...'
		}
		else if (this.props.error) {
			messageClass = 'error'
			message = `Failed setting active videos (${this.props.error.message}).`
		}

		if (message)
			message = (
				<p className={`status ${messageClass}`}>{message}</p>
			)

		const ids = this.state.ids.trim() === '' ? '' : this.state.ids

		return (
			<section className="set-active-videos">
				<form onSubmit={this.handleSubmit}>
					<p>Put each URL on a separate line.</p>
					<p className="note">Video IDs will be automatically extracted from pasted URLs and replace the URL. If a pasted URL isn't replaced, that likely means it wasn't copied correctly. Only YouTube video URLs are accepted.</p>
					<textarea name="ids" value={ids} rows={32} cols={75}
					          onChange={this.handleInputChange} disabled={disabled}
					          placeholder="Paste YouTube URLs here."
					/>
					<button disabled={disabled}>
						{buttonText || 'Set Active Videos'}
					</button>
					{message}
				</form>
			</section>
		)
	}

}


function mapStateToProps(storeState: StoreState, props: Props): StateProps {
	const { rtmOwl: { setActiveVideos: state } } = storeState

	return Object.assign({}, props,{
		saved: state.setSuccessfully,
		saving: state.currentlyBeingSet,
		error: state.error,
	})
}


const ReduxSetActiveVideosPage = connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps
)(SetActiveVideosPage)


export default  createFragmentContainer(ReduxSetActiveVideosPage, graphql`
	fragment SetActiveVideosPage_activeVideos on Video @relay(plural: true) {
		id
	}
`)
