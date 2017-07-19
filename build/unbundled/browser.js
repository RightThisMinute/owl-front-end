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
const React = require("react");
const ReactDOM = require("react-dom");
const createInitialBrowserRouter = require("found/lib/createInitialBrowserRouter");
const App_1 = require("./App");
(() => __awaiter(this, void 0, void 0, function* () {
    const Router = yield createInitialBrowserRouter({
        routeConfig: App_1.routeConfig,
        render: App_1.renderConfig,
    });
    ReactDOM.render(React.createElement(Router, null), document.getElementById('root'));
}))();
//# sourceMappingURL=browser.js.map