
declare module 'found/lib/createInitialBrowserRouter'


declare module 'found/lib/createRender' {

	function createRender(options: createRender.CreateRenderOptions): any

	namespace createRender {

		interface Error {
			status: number,
			data: any,
		}

		interface StateObject {
			elements?: any[]
		}

		interface ErrorStateObject extends StateObject {
			error: Error
		}

		interface CreateRenderOptions {
			renderPending?: (state: StateObject) => void
			renderReady?: (state: StateObject) => void
			renderError?: (state: ErrorStateObject) => void
		}
	}

	export = createRender
}


declare module 'found/lib/makeRouteConfig'
declare module 'found/lib/Route'
declare module 'found/lib/server'
