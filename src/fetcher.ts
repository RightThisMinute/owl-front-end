import 'isomorphic-fetch';

// TODO: Update this when someone releases a real, production-quality solution
// for handling universal rendering with Relay Modern. For now, this is just
// enough to get things working.

class FetcherBase {
	private url: string
	protected payloads: (object|null)[]

	constructor(url: string) {
		this.url = url;
	}

	async fetch(operation, variables) {
		const response = await fetch(this.url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: operation.text, variables }),
		});
		return response.json();
	}
}

export class ServerFetcher extends FetcherBase {

	constructor(url) {
		super(url);

		this.payloads = [];
	}

	async fetch(operation, variables) {
		const i = this.payloads.length;
		this.payloads.push(null);
		const payload = await super.fetch(operation, variables);
		this.payloads[i] = payload;
		return payload;
	}

	toJSON() {
		return this.payloads;
	}
}

export class ClientFetcher extends FetcherBase {
	constructor(url, payloads) {
		super(url);

		this.payloads = payloads;
	}

	async fetch(operation, variables) {
		if (this.payloads.length) {
			return this.payloads.shift();
		}

		return super.fetch(operation, variables);
	}
}
