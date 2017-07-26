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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMEJBQXVCO0FBRXZCLDZEQUE2RDtBQUM3RCwrRUFBK0U7QUFDL0UsK0JBQThCO0FBQzlCLHNDQUFxQztBQUVyQywrQkFDYTtBQUNiLHVDQUF5QztBQUd6QyxDQUFDO0lBRUEsTUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBYSxDQUFDLCtCQUErQixFQUMvQixNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0lBQy9ELE1BQU0sUUFBUSxHQUFHLG9CQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7SUFFeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSx3QkFBd0IsQ0FBQztRQUM3QyxlQUFlLEVBQUUsSUFBSSxlQUFlLEVBQUU7UUFDdEMsa0JBQWtCLEVBQWxCLHdCQUFrQjtRQUNsQixXQUFXLEVBQVgsaUJBQVc7UUFDWCxRQUFRO1FBQ1IsTUFBTSxFQUFFLGtCQUFZO0tBQ3BCLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxNQUFNLENBQ2Qsb0JBQUMsTUFBTSxJQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUksRUFDOUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDL0IsQ0FBQTtBQUVGLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcblxuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCA9IHJlcXVpcmUoJ2ZhcmNlL2xpYi9Ccm93c2VyUHJvdG9jb2wnKVxuaW1wb3J0IGNyZWF0ZUluaXRpYWxGYXJjZVJvdXRlciA9IHJlcXVpcmUoJ2ZvdW5kL2xpYi9jcmVhdGVJbml0aWFsRmFyY2VSb3V0ZXInKVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCB7IGNyZWF0ZVJlc29sdmVyLCBoaXN0b3J5TWlkZGxld2FyZXMsIHJlbmRlckNvbmZpZywgcm91dGVDb25maWcgfVxuXHRmcm9tICcuL0FwcCdcbmltcG9ydCB7IENsaWVudEZldGNoZXIgfSBmcm9tICcuL2ZldGNoZXInXG5cblxuKGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBmZXRjaGVyID0gbmV3IENsaWVudEZldGNoZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snX19SRUxBWV9QQVlMT0FEU19fJ10pXG5cdGNvbnN0IHJlc29sdmVyID0gY3JlYXRlUmVzb2x2ZXIoZmV0Y2hlcilcblxuXHRjb25zdCBSb3V0ZXIgPSBhd2FpdCBjcmVhdGVJbml0aWFsRmFyY2VSb3V0ZXIoe1xuXHRcdGhpc3RvcnlQcm90b2NvbDogbmV3IEJyb3dzZXJQcm90b2NvbCgpLFxuXHRcdGhpc3RvcnlNaWRkbGV3YXJlcyxcblx0XHRyb3V0ZUNvbmZpZyxcblx0XHRyZXNvbHZlcixcblx0XHRyZW5kZXI6IHJlbmRlckNvbmZpZyxcblx0fSlcblxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0PFJvdXRlciByZXNvbHZlcj17cmVzb2x2ZXJ9IC8+LFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcblx0KVxuXG59KSgpXG4iXX0=