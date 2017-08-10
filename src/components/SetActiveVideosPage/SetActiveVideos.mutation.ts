
const { commitMutation, graphql } = require('react-relay')

import { Action } from '../../reducer'
import { store } from '../../store'


const mutation = graphql`
	mutation SetActiveVideosMutation($input: SetActiveVideosInput!) {
		setActiveVideos(input: $input) {
			clientMutationId
		}
	}
`

let nextClientMutationId = 0

function commit(environment, ids: string[]) {
	const clientMutationId = nextClientMutationId++

	store.dispatch({ type: Action.SettingActiveVideos })

	return commitMutation(environment, {
		mutation,
		variables: { input: { ids, clientMutationId } },
		onCompleted: () => {
			store.dispatch({ type: Action.ResetRelayEnvironment })
			store.dispatch({ type: Action.SetActiveVideosSucceeded })
		},
		onError: (error: Error) => {
			store.dispatch({ type: Action.SetActiveVideosFailed, error })
			console.error('Failed setting active videos.', error)
		},
	})
}


export default { commit }
