
const { commitMutation, graphql } = require('react-relay')

import { Action } from '../reducer'
import { store } from '../store'


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

	return commitMutation(environment, {
		mutation,
		variables: { input: { ids, clientMutationId } },
		onCompleted: () => {
			console.debug('completed mutation')
			store.dispatch({ type: Action.ResetRelayEnvironment })
		},
		// updater: () => {
		// },
	})
}


export default { commit }
