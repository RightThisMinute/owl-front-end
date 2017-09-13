
import { Action } from './reducer'
import { Store } from './store'


let initialized = false
let settledTimeout: any

export function init(store: Store): void {
	if (initialized || typeof window === 'undefined')
		return;
	initialized = true

	window.addEventListener('resize',
	                        handleResize.bind(null, store))
}


function handleResize(store: Store): void {
	clearTimeout(settledTimeout)

	store.dispatch({ type: Action.ViewportResizeStarted })

	settledTimeout = setTimeout(() => {
		store.dispatch({ type: Action.ViewportResizeEnded })
	}, 350)
}
