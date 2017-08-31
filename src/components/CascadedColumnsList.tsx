
import last = require('lodash/last')
import isEqual = require('lodash/isEqual')
import * as React from 'react'
import { connect } from 'react-redux'

import { StoreState } from '../store'


interface ChildProps {
	id: string
	style: React.CSSProperties
}

type Child = React.ReactElement<ChildProps>
type OffsetList = { [key: string]: number }

interface OwnProps {
	children: Child[]
}

interface StateProps {
	viewportResizeInProgress: boolean
}

interface DispatchProps {}


type Props = OwnProps & StateProps & DispatchProps

interface State {
	offsets: OffsetList
}

interface Item {
	el: Element
	top: number
	height: number
}


class CascadedColumnsList extends React.Component<Props, State> {

	private el: HTMLElement|null
	private offsetParentTop: number
	private images: HTMLImageElement[]|undefined
	private imageLoadHandler: () => void

	constructor(props) {
		super(props)

		this.state = {
			offsets: {}
		}

		this.imageLoadHandler = this.updateOffsets.bind(this)
	}

	componentWillReceiveProps(props: Props) {
		if (props.viewportResizeInProgress) {
			this.setState({ offsets: {} })
			return;
		}

		const { children: nextChildren } = props
		const { children } = this.props

		const getID = (child: Child) => child.props.id

		const ids     = React.Children.map(children, getID)
		const nextIDs = React.Children.map(nextChildren, getID)

		if (!isEqual(ids, nextIDs))
			this.setState({ offsets: {} })
	}

	componentWillUpdate() {
		this.unsetUpdateOnImageLoadListeners()
	}

	componentDidMount() {
		if (!this.props.viewportResizeInProgress) {
			this.setUpdateOnImageLoadListeners()
			this.updateOffsets()
		}
	}

	componentDidUpdate() {
		if (!this.props.viewportResizeInProgress) {
			this.setUpdateOnImageLoadListeners()
			if (Object.keys(this.state.offsets).length === 0)
				this.updateOffsets()
		}
	}

	componentWillUnmount() {
		this.unsetUpdateOnImageLoadListeners()
	}

	render() {
		const children = React.Children.map(this.props.children,
		(child: Child) => {
			let style: React.CSSProperties = {}

			const offset: number|undefined = this.state.offsets[child.props.id]
			if (offset === undefined)
				return child

			style.transform = `translateY(${offset}px)`
			return React.cloneElement(child, { style })
		})

		return (
			<div className="items cascaded-column-list"
			     ref={ref => this.el = ref}>
				{children}
			</div>
		)
	}

	private setUpdateOnImageLoadListeners(): void {
		if (!this.el)
			return;

		this.images = []
		const images = this.el.getElementsByTagName('img')
		for (let i = 0; i < images.length; i++)
			this.images.push(images.item(i))

		this.images.forEach(img => {
			img.addEventListener('load', this.imageLoadHandler)
		})
	}

	private unsetUpdateOnImageLoadListeners(): void {
		if (this.images === undefined)
			return;

		this.images.forEach(img => {
			img.addEventListener('load', this.imageLoadHandler)
		})
	}

	private updateOffsets(): void {
		const offsets = this.computeOffsets()
		if (!isEqual(offsets, this.state.offsets))
			this.setState({ offsets })
	}

	private computeOffsets(): OffsetList {
		if (!this.el)
			return {};

		const elements = this.el.querySelectorAll(':scope > *')
		if (elements.length === 0)
			return {};

		// `this.elementToItem()` requires this to be set.
		this.offsetParentTop = elements.item(0).getBoundingClientRect().top

		const items: Item[] = []
		elements.forEach(el => {
			items.push(this.elementToItem(el as HTMLElement))
		})

		const columns = this.splitIntoColumns(items)
		if (columns.length === 1)
			return {}

		const offsets: OffsetList[] =
			columns.map(this.computeColumnOffsets.bind(this))

		return Object.assign({}, ...offsets)
	}

	elementToItem(element: HTMLElement): Item {
		const top = this.offsetParentTop + element.offsetTop
			// Get the true top position relative to the document root, unaffected by
			// any transforms.
		const styles = window.getComputedStyle(element)

		let { height } = element.getBoundingClientRect()
		height += (parseInt(styles.marginTop    || '0', 10) || 0)
		        + (parseInt(styles.marginBottom || '0', 10) || 0)

		return { el: element, top, height }
	}

	splitIntoColumns(items: Item[]): Item[][] {
		let prevCol: number

		return items.reduce((columns, item, index) => {
			let col: number|undefined

			if (columns.length === 0)
				col = 0
			else if (columns.length === index) {
				// Potentially need to add another column.
				const prevItem = last(columns[prevCol]) as Item
				if (item.top === prevItem.top)
					col = columns.length
			}

			if (col === undefined)
				col = index % columns.length

			if (!columns[col])
				columns[col] = []

			columns[col].push(item)
			prevCol = col

			return columns
		}, [] as Item[][])
	}

	computeColumnOffsets(items: Item[]): OffsetList {
		let prevOffset = 0

		return items.reduce((offsets, item, index, list) => {
			const id = item.el.getAttribute('id')
			if (id === null)
				return offsets;

			if (index === 0) {
				offsets[id] = 0
				return offsets;
			}

			const prevItem = list[index-1]
			const y = prevItem.top + prevOffset + prevItem.height
			offsets[id] = prevOffset = y - item.top

			return offsets
		}, {} as OffsetList)
	}

}


function mapStateToProps(storeState: StoreState, props: Props): StateProps {
	const { rtmOwl: { viewport: { resizeInProgress } } } = storeState

	return Object.assign({}, props, {
		viewportResizeInProgress: resizeInProgress
	})
}

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps
)(CascadedColumnsList)
