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
require("isomorphic-fetch");
// TODO: Update this when someone releases a real, production-quality solution
// for handling universal rendering with Relay Modern. For now, this is just
// enough to get things working.
class FetcherBase {
    constructor(url) {
        this.url = url;
    }
    fetch(operation, variables) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: operation.text, variables }),
            });
            return response.json();
        });
    }
}
class ServerFetcher extends FetcherBase {
    constructor(url) {
        super(url);
        this.payloads = [];
    }
    fetch(operation, variables) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const i = this.payloads.length;
            this.payloads.push(null);
            const payload = yield _super("fetch").call(this, operation, variables);
            this.payloads[i] = payload;
            return payload;
        });
    }
    toJSON() {
        return this.payloads;
    }
}
exports.ServerFetcher = ServerFetcher;
class ClientFetcher extends FetcherBase {
    constructor(url, payloads) {
        super(url);
        this.payloads = payloads;
    }
    fetch(operation, variables) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            if (this.payloads.length) {
                return this.payloads.shift();
            }
            return _super("fetch").call(this, operation, variables);
        });
    }
}
exports.ClientFetcher = ClientFetcher;
//# sourceMappingURL=fetcher.js.map