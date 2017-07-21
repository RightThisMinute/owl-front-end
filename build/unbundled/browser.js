"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("babel-polyfill");
const BrowserProtocol = require("farce/lib/BrowserProtocol");
const createInitialFarceRouter = require("found/lib/createInitialFarceRouter");
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./App");
const fetcher_1 = require("./fetcher");
(() => __awaiter(this, void 0, void 0, function* () {
    const fetcher = new fetcher_1.ClientFetcher('http://localhost:3000/graphql', window['__RELAY_PAYLOADS__']);
    const resolver = App_1.createResolver(fetcher);
    const Router = yield createInitialFarceRouter({
        historyProtocol: new BrowserProtocol(),
        historyMiddlewares: App_1.historyMiddlewares,
        routeConfig: App_1.routeConfig,
        resolver,
        render: App_1.renderConfig,
    });
    ReactDOM.render(React.createElement(Router, { resolver: resolver }), document.getElementById('root'));
}))();
//# sourceMappingURL=browser.js.map