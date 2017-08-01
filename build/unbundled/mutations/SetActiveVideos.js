"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { commitMutation, graphql } = require('react-relay');
const reducer_1 = require("../reducer");
const store_1 = require("../store");
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
        onCompleted: () => {
            console.debug('completed mutation');
            store_1.store.dispatch({ type: reducer_1.Action.ResetRelayEnvironment });
        },
    });
}
exports.default = { commit };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0QWN0aXZlVmlkZW9zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL211dGF0aW9ucy9TZXRBY3RpdmVWaWRlb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUUxRCx3Q0FBbUM7QUFDbkMsb0NBQWdDO0FBR2hDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQTs7Ozs7O0NBTXZCLENBQUE7QUFFRCxJQUFJLG9CQUFvQixHQUFHLENBQUMsQ0FBQTtBQUU1QixnQkFBZ0IsV0FBVyxFQUFFLEdBQWE7SUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsRUFBRSxDQUFBO0lBRS9DLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO1FBQ2xDLFFBQVE7UUFDUixTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRTtRQUMvQyxXQUFXLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7WUFDbkMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQTtRQUN2RCxDQUFDO0tBR0QsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUdELGtCQUFlLEVBQUUsTUFBTSxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY29tbWl0TXV0YXRpb24sIGdyYXBocWwgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlbGF5JylcblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcidcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5cblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuXHRtdXRhdGlvbiBTZXRBY3RpdmVWaWRlb3NNdXRhdGlvbigkaW5wdXQ6IFNldEFjdGl2ZVZpZGVvc0lucHV0ISkge1xuXHRcdHNldEFjdGl2ZVZpZGVvcyhpbnB1dDogJGlucHV0KSB7XG5cdFx0XHRjbGllbnRNdXRhdGlvbklkXG5cdFx0fVxuXHR9XG5gXG5cbmxldCBuZXh0Q2xpZW50TXV0YXRpb25JZCA9IDBcblxuZnVuY3Rpb24gY29tbWl0KGVudmlyb25tZW50LCBpZHM6IHN0cmluZ1tdKSB7XG5cdGNvbnN0IGNsaWVudE11dGF0aW9uSWQgPSBuZXh0Q2xpZW50TXV0YXRpb25JZCsrXG5cblx0cmV0dXJuIGNvbW1pdE11dGF0aW9uKGVudmlyb25tZW50LCB7XG5cdFx0bXV0YXRpb24sXG5cdFx0dmFyaWFibGVzOiB7IGlucHV0OiB7IGlkcywgY2xpZW50TXV0YXRpb25JZCB9IH0sXG5cdFx0b25Db21wbGV0ZWQ6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUuZGVidWcoJ2NvbXBsZXRlZCBtdXRhdGlvbicpXG5cdFx0XHRzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IEFjdGlvbi5SZXNldFJlbGF5RW52aXJvbm1lbnQgfSlcblx0XHR9LFxuXHRcdC8vIHVwZGF0ZXI6ICgpID0+IHtcblx0XHQvLyB9LFxuXHR9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHsgY29tbWl0IH1cbiJdfQ==