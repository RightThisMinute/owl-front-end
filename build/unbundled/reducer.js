"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action;
(function (Action) {
    Action["ResetRelayEnvironment"] = "reset Relay environment";
    Action["SetActiveVideosSucceeded"] = "succeeded setting active Videos";
    Action["SettingActiveVideos"] = "currently setting active videos";
    Action["SetActiveVideosFailed"] = "failed setting active videos";
    Action["ResetSetActiveVideosFlags"] = "reset flags related to set active videos page";
})(Action = exports.Action || (exports.Action = {}));
const defaultState = {
    relayStateRebuildCount: 0,
    setActiveVideos: {
        setSuccessfully: false,
        currentlyBeingSet: false,
        error: null,
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
    }
    return prevState;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsSUFBWSxNQU1YO0FBTkQsV0FBWSxNQUFNO0lBQ2pCLDJEQUFpRCxDQUFBO0lBQ2pELHNFQUE0RCxDQUFBO0lBQzVELGlFQUF1RCxDQUFBO0lBQ3ZELGdFQUFzRCxDQUFBO0lBQ3RELHFGQUEyRSxDQUFBO0FBQzVFLENBQUMsRUFOVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFNakI7QUFFRCxNQUFNLFlBQVksR0FBcUI7SUFDdEMsc0JBQXNCLEVBQUUsQ0FBQztJQUN6QixlQUFlLEVBQUU7UUFDaEIsZUFBZSxFQUFFLEtBQUs7UUFDdEIsaUJBQWlCLEVBQUUsS0FBSztRQUN4QixLQUFLLEVBQUUsSUFBSTtLQUNYO0NBQ0QsQ0FBQTtBQUVZLFFBQUEsT0FBTyxHQUE4QixDQUFDLFNBQVMsRUFBRSxNQUFNO0lBQ25FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsQ0FBQztRQUNwQyxNQUFNLENBQUMsWUFBWSxDQUFBO0lBRXBCLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXJCLEtBQUssTUFBTSxDQUFDLHFCQUFxQjtZQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO2dCQUNuQyxzQkFBc0IsRUFBRSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsQ0FBQzthQUM1RCxDQUFDLENBQUE7UUFFSCxLQUFLLE1BQU0sQ0FBQyxtQkFBbUI7WUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRTtnQkFDbkMsZUFBZSxFQUFFO29CQUNoQixlQUFlLEVBQUUsS0FBSztvQkFDdEIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsS0FBSyxFQUFFLEtBQUs7aUJBQ1o7YUFDRCxDQUFDLENBQUE7UUFFSCxLQUFLLE1BQU0sQ0FBQyx3QkFBd0I7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRTtnQkFDbkMsZUFBZSxFQUFFO29CQUNoQixlQUFlLEVBQUUsSUFBSTtvQkFDckIsaUJBQWlCLEVBQUUsS0FBSztvQkFDeEIsS0FBSyxFQUFFLEtBQUs7aUJBQ1o7YUFDRCxDQUFDLENBQUE7UUFFSCxLQUFLLE1BQU0sQ0FBQyxxQkFBcUI7WUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRTtnQkFDbkMsZUFBZSxFQUFFO29CQUNoQixlQUFlLEVBQUUsS0FBSztvQkFDdEIsaUJBQWlCLEVBQUUsS0FBSztvQkFDeEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2lCQUNuQjthQUNELENBQUMsQ0FBQTtRQUVILEtBQUssTUFBTSxDQUFDLHlCQUF5QjtZQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO2dCQUNuQyxlQUFlLEVBQUU7b0JBQ2hCLGVBQWUsRUFBRSxLQUFLO29CQUN0QixpQkFBaUIsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLGlCQUFpQjtvQkFDOUQsS0FBSyxFQUFFLElBQUk7aUJBQ1g7YUFDRCxDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQTtBQUNqQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFJlZHVjZXIgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IHsgUlRNT3dsU3RvcmVTdGF0ZSB9IGZyb20gJy4vc3RvcmUnXG5cblxuZXhwb3J0IGVudW0gQWN0aW9uIHtcblx0UmVzZXRSZWxheUVudmlyb25tZW50ID0gJ3Jlc2V0IFJlbGF5IGVudmlyb25tZW50Jyxcblx0U2V0QWN0aXZlVmlkZW9zU3VjY2VlZGVkID0gJ3N1Y2NlZWRlZCBzZXR0aW5nIGFjdGl2ZSBWaWRlb3MnLFxuXHRTZXR0aW5nQWN0aXZlVmlkZW9zID0gJ2N1cnJlbnRseSBzZXR0aW5nIGFjdGl2ZSB2aWRlb3MnLFxuXHRTZXRBY3RpdmVWaWRlb3NGYWlsZWQgPSAnZmFpbGVkIHNldHRpbmcgYWN0aXZlIHZpZGVvcycsXG5cdFJlc2V0U2V0QWN0aXZlVmlkZW9zRmxhZ3MgPSAncmVzZXQgZmxhZ3MgcmVsYXRlZCB0byBzZXQgYWN0aXZlIHZpZGVvcyBwYWdlJyxcbn1cblxuY29uc3QgZGVmYXVsdFN0YXRlOiBSVE1Pd2xTdG9yZVN0YXRlID0ge1xuXHRyZWxheVN0YXRlUmVidWlsZENvdW50OiAwLFxuXHRzZXRBY3RpdmVWaWRlb3M6IHtcblx0XHRzZXRTdWNjZXNzZnVsbHk6IGZhbHNlLFxuXHRcdGN1cnJlbnRseUJlaW5nU2V0OiBmYWxzZSxcblx0XHRlcnJvcjogbnVsbCxcblx0fSxcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8UlRNT3dsU3RvcmVTdGF0ZT4gPSAocHJldlN0YXRlLCBhY3Rpb24pID0+IHtcblx0aWYgKHR5cGVvZiBwcmV2U3RhdGUgPT09ICd1bmRlZmluZWQnKVxuXHRcdHJldHVybiBkZWZhdWx0U3RhdGVcblxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cblx0XHRjYXNlIEFjdGlvbi5SZXNldFJlbGF5RW52aXJvbm1lbnQ6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG5cdFx0XHRcdHJlbGF5U3RhdGVSZWJ1aWxkQ291bnQ6IHByZXZTdGF0ZS5yZWxheVN0YXRlUmVidWlsZENvdW50ICsgMSxcblx0XHRcdH0pXG5cblx0XHRjYXNlIEFjdGlvbi5TZXR0aW5nQWN0aXZlVmlkZW9zOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuXHRcdFx0XHRzZXRBY3RpdmVWaWRlb3M6IHtcblx0XHRcdFx0XHRzZXRTdWNjZXNzZnVsbHk6IGZhbHNlLFxuXHRcdFx0XHRcdGN1cnJlbnRseUJlaW5nU2V0OiB0cnVlLFxuXHRcdFx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cblx0XHRjYXNlIEFjdGlvbi5TZXRBY3RpdmVWaWRlb3NTdWNjZWVkZWQ6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG5cdFx0XHRcdHNldEFjdGl2ZVZpZGVvczoge1xuXHRcdFx0XHRcdHNldFN1Y2Nlc3NmdWxseTogdHJ1ZSxcblx0XHRcdFx0XHRjdXJyZW50bHlCZWluZ1NldDogZmFsc2UsXG5cdFx0XHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblxuXHRcdGNhc2UgQWN0aW9uLlNldEFjdGl2ZVZpZGVvc0ZhaWxlZDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcblx0XHRcdFx0c2V0QWN0aXZlVmlkZW9zOiB7XG5cdFx0XHRcdFx0c2V0U3VjY2Vzc2Z1bGx5OiBmYWxzZSxcblx0XHRcdFx0XHRjdXJyZW50bHlCZWluZ1NldDogZmFsc2UsXG5cdFx0XHRcdFx0ZXJyb3I6IGFjdGlvbi5lcnJvcixcblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cblx0XHRjYXNlIEFjdGlvbi5SZXNldFNldEFjdGl2ZVZpZGVvc0ZsYWdzOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuXHRcdFx0XHRzZXRBY3RpdmVWaWRlb3M6IHtcblx0XHRcdFx0XHRzZXRTdWNjZXNzZnVsbHk6IGZhbHNlLFxuXHRcdFx0XHRcdGN1cnJlbnRseUJlaW5nU2V0OiBwcmV2U3RhdGUuc2V0QWN0aXZlVmlkZW9zLmN1cnJlbnRseUJlaW5nU2V0LFxuXHRcdFx0XHRcdGVycm9yOiBudWxsLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblxuXHR9XG5cblx0cmV0dXJuIHByZXZTdGF0ZVxufVxuXG4iXX0=