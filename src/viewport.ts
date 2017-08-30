
import { Action } from './reducer'
import { store } from './store'


let initialized = false
let settledTimeout: any

export function init(): void {
	if (initialized || typeof window === 'undefined')
		return;
	initialized = true

	window.addEventListener('resize', handleResize)
}


function handleResize(): void {
	clearTimeout(settledTimeout)

	store.dispatch({ type: Action.ViewportResizeStarted })

	settledTimeout = setTimeout(() => {
		store.dispatch({ type: Action.ViewportResizeEnded })
	}, 350)
}
