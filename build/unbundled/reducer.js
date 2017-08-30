"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action;
(function (Action) {
    Action["ResetRelayEnvironment"] = "reset Relay environment";
    Action["SetActiveVideosSucceeded"] = "succeeded setting active Videos";
    Action["SettingActiveVideos"] = "currently setting active videos";
    Action["SetActiveVideosFailed"] = "failed setting active videos";
    Action["ResetSetActiveVideosFlags"] = "reset flags related to set active videos page";
    Action["ViewportResizeStarted"] = "viewport resize started";
    Action["ViewportResizeEnded"] = "viewport resize ended";
})(Action = exports.Action || (exports.Action = {}));
const defaultState = {
    relayStateRebuildCount: 0,
    setActiveVideos: {
        setSuccessfully: false,
        currentlyBeingSet: false,
        error: null,
    },
    viewport: {
        resizeInProgress: false,
    },
};
exports.reducer = (prevState, action) => {
    if (typeof prevState === 'undefined')
        return defaultState;
    switch (action.type) {
        case Action.ResetRelayEnvironment:
            return Object.assign({}, prevState, {
                relayStateRebuildCount: prevState.relayStateRebuildCount + 1,
            });
        case Action.SettingActiveVideos:
            return Object.assign({}, prevState, {
                setActiveVideos: {
                    setSuccessfully: false,
                    currentlyBeingSet: true,
                    error: false,
                },
            });
        case Action.SetActiveVideosSucceeded:
            return Object.assign({}, prevState, {
                setActiveVideos: {
                    setSuccessfully: true,
                    currentlyBeingSet: false,
                    error: false,
                },
            });
        case Action.SetActiveVideosFailed:
            return Object.assign({}, prevState, {
                setActiveVideos: {
                    setSuccessfully: false,
                    currentlyBeingSet: false,
                    error: action.error,
                },
            });
        case Action.ResetSetActiveVideosFlags:
            return Object.assign({}, prevState, {
                setActiveVideos: {
                    setSuccessfully: false,
                    currentlyBeingSet: prevState.setActiveVideos.currentlyBeingSet,
                    error: null,
                },
            });
        case Action.ViewportResizeStarted:
            console.debug('resize started');
            return Object.assign({}, prevState, {
                viewport: { resizeInProgress: true }
            });
        case Action.ViewportResizeEnded:
            console.debug('resize ended');
            return Object.assign({}, prevState, {
                viewport: { resizeInProgress: false }
            });
    }
    return prevState;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsSUFBWSxNQVFYO0FBUkQsV0FBWSxNQUFNO0lBQ2pCLDJEQUFpRCxDQUFBO0lBQ2pELHNFQUE0RCxDQUFBO0lBQzVELGlFQUF1RCxDQUFBO0lBQ3ZELGdFQUFzRCxDQUFBO0lBQ3RELHFGQUEyRSxDQUFBO0lBQzNFLDJEQUFpRCxDQUFBO0lBQ2pELHVEQUE2QyxDQUFBO0FBQzlDLENBQUMsRUFSVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFRakI7QUFFRCxNQUFNLFlBQVksR0FBcUI7SUFDdEMsc0JBQXNCLEVBQUUsQ0FBQztJQUN6QixlQUFlLEVBQUU7UUFDaEIsZUFBZSxFQUFFLEtBQUs7UUFDdEIsaUJBQWlCLEVBQUUsS0FBSztRQUN4QixLQUFLLEVBQUUsSUFBSTtLQUNYO0lBQ0QsUUFBUSxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUUsS0FBSztLQUN2QjtDQUNELENBQUE7QUFFWSxRQUFBLE9BQU8sR0FBOEIsQ0FBQyxTQUFTLEVBQUUsTUFBTTtJQUNuRSxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXLENBQUM7UUFDcEMsTUFBTSxDQUFDLFlBQVksQ0FBQTtJQUVwQixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVyQixLQUFLLE1BQU0sQ0FBQyxxQkFBcUI7WUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRTtnQkFDbkMsc0JBQXNCLEVBQUUsU0FBUyxDQUFDLHNCQUFzQixHQUFHLENBQUM7YUFDNUQsQ0FBQyxDQUFBO1FBRUgsS0FBSyxNQUFNLENBQUMsbUJBQW1CO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7Z0JBQ25DLGVBQWUsRUFBRTtvQkFDaEIsZUFBZSxFQUFFLEtBQUs7b0JBQ3RCLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLEtBQUssRUFBRSxLQUFLO2lCQUNaO2FBQ0QsQ0FBQyxDQUFBO1FBRUgsS0FBSyxNQUFNLENBQUMsd0JBQXdCO1lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7Z0JBQ25DLGVBQWUsRUFBRTtvQkFDaEIsZUFBZSxFQUFFLElBQUk7b0JBQ3JCLGlCQUFpQixFQUFFLEtBQUs7b0JBQ3hCLEtBQUssRUFBRSxLQUFLO2lCQUNaO2FBQ0QsQ0FBQyxDQUFBO1FBRUgsS0FBSyxNQUFNLENBQUMscUJBQXFCO1lBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7Z0JBQ25DLGVBQWUsRUFBRTtvQkFDaEIsZUFBZSxFQUFFLEtBQUs7b0JBQ3RCLGlCQUFpQixFQUFFLEtBQUs7b0JBQ3hCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztpQkFDbkI7YUFDRCxDQUFDLENBQUE7UUFFSCxLQUFLLE1BQU0sQ0FBQyx5QkFBeUI7WUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRTtnQkFDbkMsZUFBZSxFQUFFO29CQUNoQixlQUFlLEVBQUUsS0FBSztvQkFDdEIsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUI7b0JBQzlELEtBQUssRUFBRSxJQUFJO2lCQUNYO2FBQ0QsQ0FBQyxDQUFBO1FBRUgsS0FBSyxNQUFNLENBQUMscUJBQXFCO1lBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO2dCQUNuQyxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUU7YUFDcEMsQ0FBQyxDQUFBO1FBRUgsS0FBSyxNQUFNLENBQUMsbUJBQW1CO1lBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRTtnQkFDbkMsUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFO2FBQ3JDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFBO0FBQ2pCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgeyBSVE1Pd2xTdG9yZVN0YXRlIH0gZnJvbSAnLi9zdG9yZSdcblxuXG5leHBvcnQgZW51bSBBY3Rpb24ge1xuXHRSZXNldFJlbGF5RW52aXJvbm1lbnQgPSAncmVzZXQgUmVsYXkgZW52aXJvbm1lbnQnLFxuXHRTZXRBY3RpdmVWaWRlb3NTdWNjZWVkZWQgPSAnc3VjY2VlZGVkIHNldHRpbmcgYWN0aXZlIFZpZGVvcycsXG5cdFNldHRpbmdBY3RpdmVWaWRlb3MgPSAnY3VycmVudGx5IHNldHRpbmcgYWN0aXZlIHZpZGVvcycsXG5cdFNldEFjdGl2ZVZpZGVvc0ZhaWxlZCA9ICdmYWlsZWQgc2V0dGluZyBhY3RpdmUgdmlkZW9zJyxcblx0UmVzZXRTZXRBY3RpdmVWaWRlb3NGbGFncyA9ICdyZXNldCBmbGFncyByZWxhdGVkIHRvIHNldCBhY3RpdmUgdmlkZW9zIHBhZ2UnLFxuXHRWaWV3cG9ydFJlc2l6ZVN0YXJ0ZWQgPSAndmlld3BvcnQgcmVzaXplIHN0YXJ0ZWQnLFxuXHRWaWV3cG9ydFJlc2l6ZUVuZGVkID0gJ3ZpZXdwb3J0IHJlc2l6ZSBlbmRlZCcsXG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogUlRNT3dsU3RvcmVTdGF0ZSA9IHtcblx0cmVsYXlTdGF0ZVJlYnVpbGRDb3VudDogMCxcblx0c2V0QWN0aXZlVmlkZW9zOiB7XG5cdFx0c2V0U3VjY2Vzc2Z1bGx5OiBmYWxzZSxcblx0XHRjdXJyZW50bHlCZWluZ1NldDogZmFsc2UsXG5cdFx0ZXJyb3I6IG51bGwsXG5cdH0sXG5cdHZpZXdwb3J0OiB7XG5cdFx0cmVzaXplSW5Qcm9ncmVzczogZmFsc2UsXG5cdH0sXG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFJUTU93bFN0b3JlU3RhdGU+ID0gKHByZXZTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdGlmICh0eXBlb2YgcHJldlN0YXRlID09PSAndW5kZWZpbmVkJylcblx0XHRyZXR1cm4gZGVmYXVsdFN0YXRlXG5cblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG5cdFx0Y2FzZSBBY3Rpb24uUmVzZXRSZWxheUVudmlyb25tZW50OlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuXHRcdFx0XHRyZWxheVN0YXRlUmVidWlsZENvdW50OiBwcmV2U3RhdGUucmVsYXlTdGF0ZVJlYnVpbGRDb3VudCArIDEsXG5cdFx0XHR9KVxuXG5cdFx0Y2FzZSBBY3Rpb24uU2V0dGluZ0FjdGl2ZVZpZGVvczpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcblx0XHRcdFx0c2V0QWN0aXZlVmlkZW9zOiB7XG5cdFx0XHRcdFx0c2V0U3VjY2Vzc2Z1bGx5OiBmYWxzZSxcblx0XHRcdFx0XHRjdXJyZW50bHlCZWluZ1NldDogdHJ1ZSxcblx0XHRcdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KVxuXG5cdFx0Y2FzZSBBY3Rpb24uU2V0QWN0aXZlVmlkZW9zU3VjY2VlZGVkOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuXHRcdFx0XHRzZXRBY3RpdmVWaWRlb3M6IHtcblx0XHRcdFx0XHRzZXRTdWNjZXNzZnVsbHk6IHRydWUsXG5cdFx0XHRcdFx0Y3VycmVudGx5QmVpbmdTZXQ6IGZhbHNlLFxuXHRcdFx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cblx0XHRjYXNlIEFjdGlvbi5TZXRBY3RpdmVWaWRlb3NGYWlsZWQ6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG5cdFx0XHRcdHNldEFjdGl2ZVZpZGVvczoge1xuXHRcdFx0XHRcdHNldFN1Y2Nlc3NmdWxseTogZmFsc2UsXG5cdFx0XHRcdFx0Y3VycmVudGx5QmVpbmdTZXQ6IGZhbHNlLFxuXHRcdFx0XHRcdGVycm9yOiBhY3Rpb24uZXJyb3IsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KVxuXG5cdFx0Y2FzZSBBY3Rpb24uUmVzZXRTZXRBY3RpdmVWaWRlb3NGbGFnczpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcblx0XHRcdFx0c2V0QWN0aXZlVmlkZW9zOiB7XG5cdFx0XHRcdFx0c2V0U3VjY2Vzc2Z1bGx5OiBmYWxzZSxcblx0XHRcdFx0XHRjdXJyZW50bHlCZWluZ1NldDogcHJldlN0YXRlLnNldEFjdGl2ZVZpZGVvcy5jdXJyZW50bHlCZWluZ1NldCxcblx0XHRcdFx0XHRlcnJvcjogbnVsbCxcblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cblx0XHRjYXNlIEFjdGlvbi5WaWV3cG9ydFJlc2l6ZVN0YXJ0ZWQ6XG5cdFx0XHRjb25zb2xlLmRlYnVnKCdyZXNpemUgc3RhcnRlZCcpXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG5cdFx0XHRcdHZpZXdwb3J0OiB7IHJlc2l6ZUluUHJvZ3Jlc3M6IHRydWUgfVxuXHRcdFx0fSlcblxuXHRcdGNhc2UgQWN0aW9uLlZpZXdwb3J0UmVzaXplRW5kZWQ6XG5cdFx0XHRjb25zb2xlLmRlYnVnKCdyZXNpemUgZW5kZWQnKVxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuXHRcdFx0XHR2aWV3cG9ydDogeyByZXNpemVJblByb2dyZXNzOiBmYWxzZSB9XG5cdFx0XHR9KVxuXHR9XG5cblx0cmV0dXJuIHByZXZTdGF0ZVxufVxuXG4iXX0=