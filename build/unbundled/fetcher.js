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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFFMUIsOEVBQThFO0FBQzlFLDRFQUE0RTtBQUM1RSxnQ0FBZ0M7QUFFaEM7SUFJQyxZQUFZLEdBQVc7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQUVLLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUzs7WUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDdEMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNSLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ2xDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDMUQsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQUE7Q0FDRDtBQUVELG1CQUEyQixTQUFRLFdBQVc7SUFFN0MsWUFBWSxHQUFHO1FBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVgsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVLLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUzs7O1lBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sT0FBTyxHQUFHLE1BQU0sZUFBVyxZQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVELE1BQU07UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBQ0Q7QUFuQkQsc0NBbUJDO0FBRUQsbUJBQTJCLFNBQVEsV0FBVztJQUM3QyxZQUFZLEdBQUcsRUFBRSxRQUFRO1FBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFSyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVM7OztZQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLENBQUM7WUFFRCxNQUFNLENBQUMsZUFBVyxZQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7UUFDMUMsQ0FBQztLQUFBO0NBQ0Q7QUFkRCxzQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbi8vIFRPRE86IFVwZGF0ZSB0aGlzIHdoZW4gc29tZW9uZSByZWxlYXNlcyBhIHJlYWwsIHByb2R1Y3Rpb24tcXVhbGl0eSBzb2x1dGlvblxuLy8gZm9yIGhhbmRsaW5nIHVuaXZlcnNhbCByZW5kZXJpbmcgd2l0aCBSZWxheSBNb2Rlcm4uIEZvciBub3csIHRoaXMgaXMganVzdFxuLy8gZW5vdWdoIHRvIGdldCB0aGluZ3Mgd29ya2luZy5cblxuY2xhc3MgRmV0Y2hlckJhc2Uge1xuXHRwcml2YXRlIHVybDogc3RyaW5nXG5cdHByb3RlY3RlZCBwYXlsb2FkczogKG9iamVjdHxudWxsKVtdXG5cblx0Y29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxuXG5cdGFzeW5jIGZldGNoKG9wZXJhdGlvbiwgdmFyaWFibGVzKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogb3BlcmF0aW9uLnRleHQsIHZhcmlhYmxlcyB9KSxcblx0XHR9KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXJGZXRjaGVyIGV4dGVuZHMgRmV0Y2hlckJhc2Uge1xuXG5cdGNvbnN0cnVjdG9yKHVybCkge1xuXHRcdHN1cGVyKHVybCk7XG5cblx0XHR0aGlzLnBheWxvYWRzID0gW107XG5cdH1cblxuXHRhc3luYyBmZXRjaChvcGVyYXRpb24sIHZhcmlhYmxlcykge1xuXHRcdGNvbnN0IGkgPSB0aGlzLnBheWxvYWRzLmxlbmd0aDtcblx0XHR0aGlzLnBheWxvYWRzLnB1c2gobnVsbCk7XG5cdFx0Y29uc3QgcGF5bG9hZCA9IGF3YWl0IHN1cGVyLmZldGNoKG9wZXJhdGlvbiwgdmFyaWFibGVzKTtcblx0XHR0aGlzLnBheWxvYWRzW2ldID0gcGF5bG9hZDtcblx0XHRyZXR1cm4gcGF5bG9hZDtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXlsb2Fkcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xpZW50RmV0Y2hlciBleHRlbmRzIEZldGNoZXJCYXNlIHtcblx0Y29uc3RydWN0b3IodXJsLCBwYXlsb2Fkcykge1xuXHRcdHN1cGVyKHVybCk7XG5cblx0XHR0aGlzLnBheWxvYWRzID0gcGF5bG9hZHM7XG5cdH1cblxuXHRhc3luYyBmZXRjaChvcGVyYXRpb24sIHZhcmlhYmxlcykge1xuXHRcdGlmICh0aGlzLnBheWxvYWRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucGF5bG9hZHMuc2hpZnQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3VwZXIuZmV0Y2gob3BlcmF0aW9uLCB2YXJpYWJsZXMpO1xuXHR9XG59XG4iXX0=