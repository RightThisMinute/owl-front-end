"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { commitMutation, graphql } = require('react-relay');
const reducer_1 = require("../../reducer");
const store_1 = require("../../store");
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
    store_1.store.dispatch({ type: reducer_1.Action.SettingActiveVideos });
    return commitMutation(environment, {
        mutation,
        variables: { input: { ids, clientMutationId } },
        onCompleted: () => {
            store_1.store.dispatch({ type: reducer_1.Action.ResetRelayEnvironment });
            store_1.store.dispatch({ type: reducer_1.Action.SetActiveVideosSucceeded });
        },
        onError: (error) => {
            store_1.store.dispatch({ type: reducer_1.Action.SetActiveVideosFailed, error });
            console.error('Failed setting active videos.', error);
        },
    });
}
exports.default = { commit };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0QWN0aXZlVmlkZW9zLm11dGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU2V0QWN0aXZlVmlkZW9zUGFnZS9TZXRBY3RpdmVWaWRlb3MubXV0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUUxRCwyQ0FBc0M7QUFDdEMsdUNBQW1DO0FBR25DLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQTs7Ozs7O0NBTXZCLENBQUE7QUFFRCxJQUFJLG9CQUFvQixHQUFHLENBQUMsQ0FBQTtBQUU1QixnQkFBZ0IsV0FBVyxFQUFFLEdBQWE7SUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsRUFBRSxDQUFBO0lBRS9DLGFBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUE7SUFFcEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7UUFDbEMsUUFBUTtRQUNSLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFO1FBQy9DLFdBQVcsRUFBRTtZQUNaLGFBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUE7WUFDdEQsYUFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQTtRQUMxRCxDQUFDO1FBQ0QsT0FBTyxFQUFFLENBQUMsS0FBWTtZQUNyQixhQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFNLENBQUMscUJBQXFCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUM3RCxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3RELENBQUM7S0FDRCxDQUFDLENBQUE7QUFDSCxDQUFDO0FBR0Qsa0JBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjb21taXRNdXRhdGlvbiwgZ3JhcGhxbCB9ID0gcmVxdWlyZSgncmVhY3QtcmVsYXknKVxuXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuLi8uLi9yZWR1Y2VyJ1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZSdcblxuXG5jb25zdCBtdXRhdGlvbiA9IGdyYXBocWxgXG5cdG11dGF0aW9uIFNldEFjdGl2ZVZpZGVvc011dGF0aW9uKCRpbnB1dDogU2V0QWN0aXZlVmlkZW9zSW5wdXQhKSB7XG5cdFx0c2V0QWN0aXZlVmlkZW9zKGlucHV0OiAkaW5wdXQpIHtcblx0XHRcdGNsaWVudE11dGF0aW9uSWRcblx0XHR9XG5cdH1cbmBcblxubGV0IG5leHRDbGllbnRNdXRhdGlvbklkID0gMFxuXG5mdW5jdGlvbiBjb21taXQoZW52aXJvbm1lbnQsIGlkczogc3RyaW5nW10pIHtcblx0Y29uc3QgY2xpZW50TXV0YXRpb25JZCA9IG5leHRDbGllbnRNdXRhdGlvbklkKytcblxuXHRzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IEFjdGlvbi5TZXR0aW5nQWN0aXZlVmlkZW9zIH0pXG5cblx0cmV0dXJuIGNvbW1pdE11dGF0aW9uKGVudmlyb25tZW50LCB7XG5cdFx0bXV0YXRpb24sXG5cdFx0dmFyaWFibGVzOiB7IGlucHV0OiB7IGlkcywgY2xpZW50TXV0YXRpb25JZCB9IH0sXG5cdFx0b25Db21wbGV0ZWQ6ICgpID0+IHtcblx0XHRcdHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogQWN0aW9uLlJlc2V0UmVsYXlFbnZpcm9ubWVudCB9KVxuXHRcdFx0c3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb24uU2V0QWN0aXZlVmlkZW9zU3VjY2VlZGVkIH0pXG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3I6IEVycm9yKSA9PiB7XG5cdFx0XHRzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IEFjdGlvbi5TZXRBY3RpdmVWaWRlb3NGYWlsZWQsIGVycm9yIH0pXG5cdFx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgc2V0dGluZyBhY3RpdmUgdmlkZW9zLicsIGVycm9yKVxuXHRcdH0sXG5cdH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgeyBjb21taXQgfVxuIl19