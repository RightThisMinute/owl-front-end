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
const BrowserProtocol = require('farce/lib/BrowserProtocol');
const createConnectedRouter = require('found/lib/createConnectedRouter');
const getStoreRenderArgs = require('found/lib/getStoreRenderArgs');
const React = require("react");
const ReactDOM = require("react-dom");
const Provider_1 = require("react-redux/lib/components/Provider");
const App_1 = require("./App");
const fetcher_1 = require("./fetcher");
const genStore_1 = require("./genStore");
const store = genStore_1.default(new BrowserProtocol(), window['__PRELOADED_STATE__']);
const matchContext = { store };
const ConnectedRouter = createConnectedRouter({ render: App_1.renderConfig });
(() => __awaiter(this, void 0, void 0, function* () {
    const fetcher = new fetcher_1.ClientFetcher('http://localhost:3000/graphql', window['__RELAY_PAYLOADS__']);
    const resolver = App_1.createResolver(fetcher);
    const initialRenderArgs = yield getStoreRenderArgs({
        store,
        matchContext,
        resolver
    });
    ReactDOM.render(React.createElement(Provider_1.default, { store: store },
        React.createElement(ConnectedRouter, { matchContext: matchContext, resolver: resolver, initialRenderArgs: initialRenderArgs })), document.getElementById('root'));
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMEJBQXVCO0FBRXZCLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELE1BQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFDeEUsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQTtBQUNsRSwrQkFBOEI7QUFDOUIsc0NBQXFDO0FBQ3JDLGtFQUEwRDtBQUUxRCwrQkFBb0Q7QUFDcEQsdUNBQXlDO0FBQ3pDLHlDQUFpQztBQUdqQyxNQUFNLEtBQUssR0FBRyxrQkFBUSxDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtBQUM1RSxNQUFNLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO0FBQzlCLE1BQU0sZUFBZSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFZLEVBQUUsQ0FBQyxDQUV0RTtBQUFBLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUFhLENBQUMsK0JBQStCLEVBQy9CLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDL0QsTUFBTSxRQUFRLEdBQUcsb0JBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV4QyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sa0JBQWtCLENBQUM7UUFDbEQsS0FBSztRQUNMLFlBQVk7UUFDWixRQUFRO0tBQ1IsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLE1BQU0sQ0FDZCxvQkFBQyxrQkFBUSxJQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3JCLG9CQUFDLGVBQWUsSUFBQyxZQUFZLEVBQUUsWUFBWSxFQUMxQixRQUFRLEVBQUUsUUFBUSxFQUNsQixpQkFBaUIsRUFBRSxpQkFBaUIsR0FBSSxDQUMvQyxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQy9CLENBQUE7QUFFRixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5cbmNvbnN0IEJyb3dzZXJQcm90b2NvbCA9IHJlcXVpcmUoJ2ZhcmNlL2xpYi9Ccm93c2VyUHJvdG9jb2wnKVxuY29uc3QgY3JlYXRlQ29ubmVjdGVkUm91dGVyID0gcmVxdWlyZSgnZm91bmQvbGliL2NyZWF0ZUNvbm5lY3RlZFJvdXRlcicpXG5jb25zdCBnZXRTdG9yZVJlbmRlckFyZ3MgPSByZXF1aXJlKCdmb3VuZC9saWIvZ2V0U3RvcmVSZW5kZXJBcmdzJylcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gJ3JlYWN0LXJlZHV4L2xpYi9jb21wb25lbnRzL1Byb3ZpZGVyJ1xuXG5pbXBvcnQgeyBjcmVhdGVSZXNvbHZlciwgcmVuZGVyQ29uZmlnIH0gZnJvbSAnLi9BcHAnXG5pbXBvcnQgeyBDbGllbnRGZXRjaGVyIH0gZnJvbSAnLi9mZXRjaGVyJ1xuaW1wb3J0IGdlblN0b3JlIGZyb20gJy4vZ2VuU3RvcmUnXG5cblxuY29uc3Qgc3RvcmUgPSBnZW5TdG9yZShuZXcgQnJvd3NlclByb3RvY29sKCksIHdpbmRvd1snX19QUkVMT0FERURfU1RBVEVfXyddKVxuY29uc3QgbWF0Y2hDb250ZXh0ID0geyBzdG9yZSB9XG5jb25zdCBDb25uZWN0ZWRSb3V0ZXIgPSBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoeyByZW5kZXI6IHJlbmRlckNvbmZpZyB9KVxuXG47KGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBmZXRjaGVyID0gbmV3IENsaWVudEZldGNoZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snX19SRUxBWV9QQVlMT0FEU19fJ10pXG5cdGNvbnN0IHJlc29sdmVyID0gY3JlYXRlUmVzb2x2ZXIoZmV0Y2hlcilcblxuXHRjb25zdCBpbml0aWFsUmVuZGVyQXJncyA9IGF3YWl0IGdldFN0b3JlUmVuZGVyQXJncyh7XG5cdFx0c3RvcmUsXG5cdFx0bWF0Y2hDb250ZXh0LFxuXHRcdHJlc29sdmVyXG5cdH0pXG5cblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0PENvbm5lY3RlZFJvdXRlciBtYXRjaENvbnRleHQ9e21hdGNoQ29udGV4dH1cblx0XHRcdCAgICAgICAgICAgICAgICAgcmVzb2x2ZXI9e3Jlc29sdmVyfVxuXHRcdFx0ICAgICAgICAgICAgICAgICBpbml0aWFsUmVuZGVyQXJncz17aW5pdGlhbFJlbmRlckFyZ3N9IC8+XG5cdFx0PC9Qcm92aWRlcj4sXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuXHQpXG5cbn0pKClcbiJdfQ==