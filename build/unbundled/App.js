"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createRender = require("found/lib/createRender");
const makeRouteConfig = require("found/lib/makeRouteConfig");
const Route = require("found/lib/Route");
const React = require("react");
const graphql = require('react-relay').graphql;
const found_relay_1 = require("found-relay");
const relay_runtime_1 = require("relay-runtime");
const Main_1 = require("./components/Main");
const VideoList_1 = require("./components/VideoList");
const ErrorPage_1 = require("./components/ErrorPage");
class AppFrame extends React.Component {
    render() {
        return (React.createElement(Main_1.default, null, this.props.children));
    }
}
exports.AppFrame = AppFrame;
function createResolver(fetcher) {
    const environment = new relay_runtime_1.Environment({
        network: relay_runtime_1.Network.create((...args) => fetcher.fetch(...args)),
        store: new relay_runtime_1.Store(new relay_runtime_1.RecordSource()),
    });
    return new found_relay_1.Resolver(environment);
}
exports.createResolver = createResolver;
exports.renderConfig = createRender({
    renderError: ({ error }) => {
        return (React.createElement(AppFrame, null,
            React.createElement(ErrorPage_1.default, { error: error })));
    }
});
const ActiveVideosQuery = graphql `
	query App_ActiveVideos_Query {
		activeVideos {
			...VideoList_activeVideos
		}
	}
`;
exports.routeConfig = makeRouteConfig(React.createElement(Route, { path: "/", Component: AppFrame },
    React.createElement(Route, { Component: VideoList_1.default, query: ActiveVideosQuery }),
    React.createElement(Route, { path: "videos/forms/replace", Component: () => React.createElement("h2", null, "Form") }),
    React.createElement(Route, { path: "goomba", Component: () => React.createElement("h2", null, "Goomba") })));
//# sourceMappingURL=App.js.map