
const { commitMutation, graphql } = require('react-relay')


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
		onCompleted: (response: object) => {
			console.debug('mutation completed', response)
		},
	})
}


export default { commit }
