"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createHistoryEnhancer = require('farce/lib/createHistoryEnhancer');
const createMatchEnhancer = require('found/lib/createMatchEnhancer');
const foundReducer = require('found/lib/foundReducer');
const Matcher = require('found/lib/Matcher');
const redux_1 = require("redux");
const App_1 = require("./App");
const reducer_1 = require("./reducer");
function genStore(historyProtocol, preloadedState) {
    if (typeof exports.store !== 'undefined')
        return exports.store;
    exports.store = redux_1.createStore(redux_1.combineReducers({
        found: foundReducer,
        rtmOwl: reducer_1.reducer,
    }), preloadedState, redux_1.compose(createHistoryEnhancer({
        protocol: historyProtocol,
        middleware: App_1.historyMiddlewares,
    }), createMatchEnhancer(new Matcher(App_1.routeConfig))));
    return exports.store;
}
exports.genStore = genStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBRXhFLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUE7QUFDcEUsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUE7QUFDdEQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUE7QUFFNUMsaUNBQWtGO0FBRWxGLCtCQUF1RDtBQUN2RCx1Q0FBbUM7QUEyQm5DLGtCQUF5QixlQUFlLEVBQUUsY0FBZTtJQUN4RCxFQUFFLENBQUMsQ0FBQyxPQUFPLGFBQUssS0FBSyxXQUFXLENBQUM7UUFDaEMsTUFBTSxDQUFDLGFBQUssQ0FBQTtJQUViLGFBQUssR0FBRyxtQkFBVyxDQUNsQix1QkFBZSxDQUFDO1FBQ2YsS0FBSyxFQUFFLFlBQVk7UUFDbkIsTUFBTSxFQUFFLGlCQUFPO0tBQ2YsQ0FBQyxFQUNGLGNBQWMsRUFDZCxlQUFPLENBQ04scUJBQXFCLENBQUM7UUFDckIsUUFBUSxFQUFFLGVBQWU7UUFDekIsVUFBVSxFQUFFLHdCQUFrQjtLQUM5QixDQUFDLEVBQ0YsbUJBQW1CLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQVcsQ0FBQyxDQUFDLENBQzdDLENBQ2EsQ0FBQTtJQUVmLE1BQU0sQ0FBQyxhQUFLLENBQUE7QUFDYixDQUFDO0FBcEJELDRCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY3JlYXRlSGlzdG9yeUVuaGFuY2VyID0gcmVxdWlyZSgnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcicpXG5cbmNvbnN0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgPSByZXF1aXJlKCdmb3VuZC9saWIvY3JlYXRlTWF0Y2hFbmhhbmNlcicpXG5jb25zdCBmb3VuZFJlZHVjZXIgPSByZXF1aXJlKCdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJylcbmNvbnN0IE1hdGNoZXIgPSByZXF1aXJlKCdmb3VuZC9saWIvTWF0Y2hlcicpXG5cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUsIFN0b3JlIGFzIFJlZHV4U3RvcmUgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IHsgaGlzdG9yeU1pZGRsZXdhcmVzLCByb3V0ZUNvbmZpZyB9IGZyb20gJy4vQXBwJ1xuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcidcblxuXG5pbnRlcmZhY2UgU3RvcmU8Uz4gZXh0ZW5kcyBSZWR1eFN0b3JlPFM+IHtcblx0ZmFyY2U6IGFueSAvLyBBZGRlZCBieSBgY3JlYXRlSGlzdG9yeUVuaGFuY2VyKClgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmVTdGF0ZSB7XG5cdHJ0bU93bDogUlRNT3dsU3RvcmVTdGF0ZVxuXHRmb3VuZD86IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJUTU93bFN0b3JlU3RhdGUge1xuXHRyZWxheVN0YXRlUmVidWlsZENvdW50OiBudW1iZXJcblx0c2V0QWN0aXZlVmlkZW9zOiB7XG5cdFx0c2V0U3VjY2Vzc2Z1bGx5OiBib29sZWFuXG5cdFx0Y3VycmVudGx5QmVpbmdTZXQ6IGJvb2xlYW5cblx0XHRlcnJvcjogRXJyb3J8bnVsbFxuXHR9XG5cdHZpZXdwb3J0OiB7XG5cdFx0cmVzaXplSW5Qcm9ncmVzczogYm9vbGVhblxuXHR9XG59XG5cblxuZXhwb3J0IGxldCBzdG9yZTogU3RvcmU8YW55PlxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuU3RvcmUoaGlzdG9yeVByb3RvY29sLCBwcmVsb2FkZWRTdGF0ZT8pIHtcblx0aWYgKHR5cGVvZiBzdG9yZSAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0cmV0dXJuIHN0b3JlXG5cblx0c3RvcmUgPSBjcmVhdGVTdG9yZShcblx0XHRjb21iaW5lUmVkdWNlcnMoe1xuXHRcdFx0Zm91bmQ6IGZvdW5kUmVkdWNlcixcblx0XHRcdHJ0bU93bDogcmVkdWNlcixcblx0XHR9KSxcblx0XHRwcmVsb2FkZWRTdGF0ZSxcblx0XHRjb21wb3NlKFxuXHRcdFx0Y3JlYXRlSGlzdG9yeUVuaGFuY2VyKHtcblx0XHRcdFx0cHJvdG9jb2w6IGhpc3RvcnlQcm90b2NvbCxcblx0XHRcdFx0bWlkZGxld2FyZTogaGlzdG9yeU1pZGRsZXdhcmVzLFxuXHRcdFx0fSksXG5cdFx0XHRjcmVhdGVNYXRjaEVuaGFuY2VyKG5ldyBNYXRjaGVyKHJvdXRlQ29uZmlnKSksXG5cdFx0KSxcblx0KSBhcyBTdG9yZTxhbnk+XG5cblx0cmV0dXJuIHN0b3JlXG59XG4iXX0=