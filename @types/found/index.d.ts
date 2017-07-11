
declare module 'found/lib/createRender' {

	interface StateObject {
		elements?: any[]
	}

	interface ErrorStateObject extends StateObject {
		error: {status: number, data: any}
	}

	interface CreateRenderOptions {
		renderPending?: (state: StateObject) => void
		renderReady?: (state: StateObject) => void
		renderError?: (state: ErrorStateObject) => void
	}

	function createRender(options: CreateRenderOptions): any

	export = createRender
}


declare module 'found/lib/makeRouteConfig'
declare module 'found/lib/Route'
declare module 'found/lib/server'
