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
const store_1 = require("./store");
const store = store_1.genStore(new BrowserProtocol(), window['__PRELOADED_STATE__']);
const matchContext = { store };
const ConnectedRouter = createConnectedRouter({ render: App_1.renderConfig });
function buildRelayState() {
    return __awaiter(this, void 0, void 0, function* () {
        const fetcher = new fetcher_1.ClientFetcher('http://localhost:3000/graphql', window['__RELAY_PAYLOADS__']);
        const resolver = App_1.createResolver(fetcher);
        const initialRenderArgs = yield getStoreRenderArgs({
            store,
            matchContext,
            resolver
        });
        return {
            resolver,
            initialRenderArgs
        };
    });
}
class Wrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialState;
        this.relayStateRebuildCount = store.getState().rtmOwl.relayStateRebuildCount;
        store.subscribe(this.rebuildRelayState.bind(this));
    }
    rebuildRelayState() {
        return __awaiter(this, void 0, void 0, function* () {
            const rebuildCount = store.getState().rtmOwl.relayStateRebuildCount;
            if (rebuildCount === this.relayStateRebuildCount)
                return;
            this.relayStateRebuildCount = rebuildCount;
            this.setState(yield buildRelayState());
        });
    }
    render() {
        return (React.createElement(ConnectedRouter, { matchContext: matchContext, resolver: this.state.resolver, initialRenderArgs: this.state.initialRenderArgs }));
    }
}
;
(() => __awaiter(this, void 0, void 0, function* () {
    const initialState = yield buildRelayState();
    ReactDOM.render(React.createElement(Provider_1.default, { store: store },
        React.createElement(Wrap, { initialState: initialState })), document.getElementById('root'));
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMEJBQXVCO0FBRXZCLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELE1BQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFDeEUsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQTtBQUNsRSwrQkFBOEI7QUFDOUIsc0NBQXFDO0FBQ3JDLGtFQUEwRDtBQUUxRCwrQkFBb0Q7QUFDcEQsdUNBQXlDO0FBQ3pDLG1DQUFrQztBQUdsQyxNQUFNLEtBQUssR0FBRyxnQkFBUSxDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtBQUM1RSxNQUFNLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO0FBQzlCLE1BQU0sZUFBZSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFZLEVBQUUsQ0FBQyxDQUFBO0FBR3ZFOztRQUNDLE1BQU0sT0FBTyxHQUFHLElBQUksdUJBQWEsQ0FBQywrQkFBK0IsRUFDL0IsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtRQUMvRCxNQUFNLFFBQVEsR0FBRyxvQkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRXhDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQztZQUNsRCxLQUFLO1lBQ0wsWUFBWTtZQUNaLFFBQVE7U0FDUixDQUFDLENBQUE7UUFFRixNQUFNLENBQUM7WUFDTixRQUFRO1lBQ1IsaUJBQWlCO1NBQ2pCLENBQUE7SUFDRixDQUFDO0NBQUE7QUFZRCxVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQXVCO0lBSS9DLFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFBO1FBQzVFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFSyxpQkFBaUI7O1lBQ3RCLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUE7WUFFbkUsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztnQkFDaEQsTUFBTSxDQUFDO1lBRVIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQTtZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sZUFBZSxFQUFFLENBQUMsQ0FBQTtRQUN2QyxDQUFDO0tBQUE7SUFFRCxNQUFNO1FBQUssTUFBTSxDQUFBLENBQ2hCLG9CQUFDLGVBQWUsSUFBQyxZQUFZLEVBQUUsWUFBWSxFQUNsQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUksQ0FDNUQsQ0FBQTtJQUFBLENBQUM7Q0FFRjtBQUdELENBQUM7QUFBQSxDQUFDO0lBQ0QsTUFBTSxZQUFZLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQTtJQUU1QyxRQUFRLENBQUMsTUFBTSxDQUNkLG9CQUFDLGtCQUFRLElBQUMsS0FBSyxFQUFFLEtBQUs7UUFDckIsb0JBQUMsSUFBSSxJQUFDLFlBQVksRUFBRSxZQUFZLEdBQUksQ0FDMUIsRUFDWCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUMvQixDQUFBO0FBQ0YsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuXG5jb25zdCBCcm93c2VyUHJvdG9jb2wgPSByZXF1aXJlKCdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJylcbmNvbnN0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlciA9IHJlcXVpcmUoJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInKVxuY29uc3QgZ2V0U3RvcmVSZW5kZXJBcmdzID0gcmVxdWlyZSgnZm91bmQvbGliL2dldFN0b3JlUmVuZGVyQXJncycpXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBQcm92aWRlciBmcm9tICdyZWFjdC1yZWR1eC9saWIvY29tcG9uZW50cy9Qcm92aWRlcidcblxuaW1wb3J0IHsgY3JlYXRlUmVzb2x2ZXIsIHJlbmRlckNvbmZpZyB9IGZyb20gJy4vQXBwJ1xuaW1wb3J0IHsgQ2xpZW50RmV0Y2hlciB9IGZyb20gJy4vZmV0Y2hlcidcbmltcG9ydCB7IGdlblN0b3JlIH0gZnJvbSAnLi9zdG9yZSdcblxuXG5jb25zdCBzdG9yZSA9IGdlblN0b3JlKG5ldyBCcm93c2VyUHJvdG9jb2woKSwgd2luZG93WydfX1BSRUxPQURFRF9TVEFURV9fJ10pXG5jb25zdCBtYXRjaENvbnRleHQgPSB7IHN0b3JlIH1cbmNvbnN0IENvbm5lY3RlZFJvdXRlciA9IGNyZWF0ZUNvbm5lY3RlZFJvdXRlcih7IHJlbmRlcjogcmVuZGVyQ29uZmlnIH0pXG5cblxuYXN5bmMgZnVuY3Rpb24gYnVpbGRSZWxheVN0YXRlKCk6IFByb21pc2U8U3RhdGU+IHtcblx0Y29uc3QgZmV0Y2hlciA9IG5ldyBDbGllbnRGZXRjaGVyKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JhcGhxbCcsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ19fUkVMQVlfUEFZTE9BRFNfXyddKVxuXHRjb25zdCByZXNvbHZlciA9IGNyZWF0ZVJlc29sdmVyKGZldGNoZXIpXG5cblx0Y29uc3QgaW5pdGlhbFJlbmRlckFyZ3MgPSBhd2FpdCBnZXRTdG9yZVJlbmRlckFyZ3Moe1xuXHRcdHN0b3JlLFxuXHRcdG1hdGNoQ29udGV4dCxcblx0XHRyZXNvbHZlclxuXHR9KVxuXG5cdHJldHVybiB7XG5cdFx0cmVzb2x2ZXIsXG5cdFx0aW5pdGlhbFJlbmRlckFyZ3Ncblx0fVxufVxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGluaXRpYWxTdGF0ZTogU3RhdGVcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcblx0cmVzb2x2ZXI6IGFueVxuXHRpbml0aWFsUmVuZGVyQXJnczogYW55XG59XG5cbmNsYXNzIFdyYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG5cblx0cHJpdmF0ZSByZWxheVN0YXRlUmVidWlsZENvdW50OiBudW1iZXJcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMucHJvcHMuaW5pdGlhbFN0YXRlXG5cdFx0dGhpcy5yZWxheVN0YXRlUmVidWlsZENvdW50ID0gc3RvcmUuZ2V0U3RhdGUoKS5ydG1Pd2wucmVsYXlTdGF0ZVJlYnVpbGRDb3VudFxuXHRcdHN0b3JlLnN1YnNjcmliZSh0aGlzLnJlYnVpbGRSZWxheVN0YXRlLmJpbmQodGhpcykpXG5cdH1cblxuXHRhc3luYyByZWJ1aWxkUmVsYXlTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRjb25zdCByZWJ1aWxkQ291bnQgPSBzdG9yZS5nZXRTdGF0ZSgpLnJ0bU93bC5yZWxheVN0YXRlUmVidWlsZENvdW50XG5cblx0XHRpZiAocmVidWlsZENvdW50ID09PSB0aGlzLnJlbGF5U3RhdGVSZWJ1aWxkQ291bnQpXG5cdFx0XHRyZXR1cm47XG5cblx0XHR0aGlzLnJlbGF5U3RhdGVSZWJ1aWxkQ291bnQgPSByZWJ1aWxkQ291bnRcblx0XHR0aGlzLnNldFN0YXRlKGF3YWl0IGJ1aWxkUmVsYXlTdGF0ZSgpKVxuXHR9XG5cblx0cmVuZGVyKCkgeyByZXR1cm4oXG5cdFx0PENvbm5lY3RlZFJvdXRlciBtYXRjaENvbnRleHQ9e21hdGNoQ29udGV4dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0IHJlc29sdmVyPXt0aGlzLnN0YXRlLnJlc29sdmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgaW5pdGlhbFJlbmRlckFyZ3M9e3RoaXMuc3RhdGUuaW5pdGlhbFJlbmRlckFyZ3N9IC8+XG5cdCl9XG5cbn1cblxuXG47KGFzeW5jICgpID0+IHtcblx0Y29uc3QgaW5pdGlhbFN0YXRlID0gYXdhaXQgYnVpbGRSZWxheVN0YXRlKClcblxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0XHQ8V3JhcCBpbml0aWFsU3RhdGU9e2luaXRpYWxTdGF0ZX0gLz5cblx0XHQ8L1Byb3ZpZGVyPixcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cdClcbn0pKClcbiJdfQ==