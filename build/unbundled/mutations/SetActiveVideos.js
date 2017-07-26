"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { commitMutation, graphql } = require('react-relay');
const mutation = graphql `
	mutation SetActiveVideosMutation($input: SetActiveVideosInput!) {
		setActiveVideos(input: $input) {
			clientMutationId
		}
	}
`;
let nextClientMutationId = 0;
function commit(environment, ids) {
    const clientMutationId = nextClientMutationId++;
    return commitMutation(environment, {
        mutation,
        variables: { input: { ids, clientMutationId } },
        onComplete: (response) => {
            console.debug('mutation completed', response);
        }
    });
}
exports.default = { commit };
//# sourceMappingURL=SetActiveVideos.js.map