"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action;
(function (Action) {
    Action["ResetRelayEnvironment"] = "reset Relay environment";
    // SettingActiveVideos = 'currently setting active videos',
    // SetActiveVideosFailed = 'failed setting active videos'
})(Action = exports.Action || (exports.Action = {}));
const defaultState = {
    relayStateRebuildCount: 0
};
exports.reducer = (prevState, action) => {
    if (typeof prevState === 'undefined')
        return defaultState;
    switch (action.type) {
        case Action.ResetRelayEnvironment:
            return Object.assign({}, prevState, {
                relayStateRebuildCount: prevState.relayStateRebuildCount + 1
            });
    }
    return prevState;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsSUFBWSxNQUlYO0FBSkQsV0FBWSxNQUFNO0lBQ2pCLDJEQUFpRCxDQUFBO0lBQ2pELDJEQUEyRDtJQUMzRCx5REFBeUQ7QUFDMUQsQ0FBQyxFQUpXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUlqQjtBQUVELE1BQU0sWUFBWSxHQUFxQjtJQUN0QyxzQkFBc0IsRUFBRSxDQUFDO0NBQ3pCLENBQUE7QUFFWSxRQUFBLE9BQU8sR0FBOEIsQ0FBQyxTQUFTLEVBQUUsTUFBTTtJQUNuRSxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXLENBQUM7UUFDcEMsTUFBTSxDQUFDLFlBQVksQ0FBQTtJQUVwQixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVyQixLQUFLLE1BQU0sQ0FBQyxxQkFBcUI7WUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRTtnQkFDbkMsc0JBQXNCLEVBQUUsU0FBUyxDQUFDLHNCQUFzQixHQUFHLENBQUM7YUFDNUQsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUE7QUFDakIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCB7IFJUTU93bFN0b3JlU3RhdGUgfSBmcm9tICcuL3N0b3JlJ1xuXG5cbmV4cG9ydCBlbnVtIEFjdGlvbiB7XG5cdFJlc2V0UmVsYXlFbnZpcm9ubWVudCA9ICdyZXNldCBSZWxheSBlbnZpcm9ubWVudCcsXG5cdC8vIFNldHRpbmdBY3RpdmVWaWRlb3MgPSAnY3VycmVudGx5IHNldHRpbmcgYWN0aXZlIHZpZGVvcycsXG5cdC8vIFNldEFjdGl2ZVZpZGVvc0ZhaWxlZCA9ICdmYWlsZWQgc2V0dGluZyBhY3RpdmUgdmlkZW9zJ1xufVxuXG5jb25zdCBkZWZhdWx0U3RhdGU6IFJUTU93bFN0b3JlU3RhdGUgPSB7XG5cdHJlbGF5U3RhdGVSZWJ1aWxkQ291bnQ6IDBcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8UlRNT3dsU3RvcmVTdGF0ZT4gPSAocHJldlN0YXRlLCBhY3Rpb24pID0+IHtcblx0aWYgKHR5cGVvZiBwcmV2U3RhdGUgPT09ICd1bmRlZmluZWQnKVxuXHRcdHJldHVybiBkZWZhdWx0U3RhdGVcblxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cblx0XHRjYXNlIEFjdGlvbi5SZXNldFJlbGF5RW52aXJvbm1lbnQ6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG5cdFx0XHRcdHJlbGF5U3RhdGVSZWJ1aWxkQ291bnQ6IHByZXZTdGF0ZS5yZWxheVN0YXRlUmVidWlsZENvdW50ICsgMVxuXHRcdFx0fSlcblx0XHRcblx0fVxuXG5cdHJldHVybiBwcmV2U3RhdGVcbn1cblxuIl19