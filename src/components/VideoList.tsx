
const Link = require('found/lib/Link')
import first = require('lodash/first')
import last = require('lodash/last')
import * as React from 'react'
const Relay = require('react-relay')
const { createFragmentContainer, graphql } = Relay

import Video, { VideoProps } from './Video'

import '../../../src/components/VideoList/style.pcss'


interface VideoProps2 extends VideoProps {
	id,
}

enum SortField {
	TheOwl = 'score',
	PercentChange = 'percent',
	ChangeCount = 'change',
}

enum SortDirection {
	Ascending = 'asc',
	Descending = 'desc',
}

interface Props {
	activeVideos: VideoProps2[]
	location: {
		action: string,
		delta?: number,
		hash: string,
		index?: number,
		key?: string,
		pathname: string,
		search: string,
	}
}

interface State {
	videoOffsets: { [key: string]: number }
}

class VideoList extends React.Component<Props, State> {

	private el: HTMLElement|null

	constructor(props) {
		super(props)
		this.state = {
			videoOffsets: {}
		}
	}

	componentWillReceiveProps(nextProps: Props) {
		const { search: nextSearch } = nextProps.location
		const { search } = this.props.location

		if (search !== nextSearch)
			this.setState({
				videoOffsets: {}
			})
	}

	componentDidMount() {
		console.debug('did mount')
		this.scoochItems()
	}

	componentDidUpdate() {
		console.debug('did update')
		if (Object.keys(this.state.videoOffsets).length === 0)
			this.scoochItems()
	}

	render() {
		const { sorted } = this

		const percents: number[] = sorted.map(vid => vid.percent)
		let chartScale = Math.max(0, ...percents) / 100 + 1
		if (chartScale < 2)
			chartScale = 2

		const snapshotCounts = sorted.map(vid => {
			return vid.video.snapshots.length
		})
		const maxSnapshotCount = Math.max(0, ...snapshotCounts)

		const videos = sorted.map(vid => {
			let style: React.CSSProperties = {}

			const offset = this.state.videoOffsets[vid.video.id]
			if (offset)
				style.transform = `translateY(${offset}px)`

			const id = `video-${vid.video.id}`

			return (
				<Video key={vid.video.id} id={id} video={vid.video} style={style}
				       chartScale={chartScale}
				       chartDataPountCount={maxSnapshotCount} />
			)
		})

		return (
			<section className="video-list" ref={ref => this.el = ref}>
				<nav>
					<h1>Order:</h1>
					<ul>
						{this.sortLinks}
					</ul>
				</nav>
				<div className="items">
					{videos}
				</div>
			</section>
		)
	}

	private get getParams(): {[key: string]: string} {
		const { search } = this.props.location

		if (!search || search.length === 1)
			return {}

		return search
			.slice(1)
			.split('&')
			.reduce((accl, pair) => {
				const [key, value] = pair.split('=').map(decodeURIComponent)
				accl[key] = value
				return accl
			}, {})
	}

	private get sort(): { field: SortField, direction: SortDirection } {
		let { sortField: field, sortDirection: direction } = this.getParams

		const fields = Object.keys(SortField).map(key => {
			return SortField[key]
		})
		const directions = Object.keys(SortDirection).map(key => {
			return SortDirection[key]
		})

		if (!field || fields.indexOf(field) === -1)
			field = SortField.TheOwl
		if (!direction || directions.indexOf(direction) === -1)
			direction = SortDirection.Descending

		return { field: field as SortField, direction: direction as SortDirection }
	}

	private get sortLinks() {
		const sorts = {
			[SortField.TheOwl]: 'As the Owl Flies',
			[SortField.ChangeCount]: 'Count',
			[SortField.PercentChange]: 'Percent',
		}

		return Object.keys(sorts).map(field => {
			const isActive = field === this.sort.field
			const classes: string[] = []

			if (isActive)
				classes.push('active')

			const sortDirection =
				isActive && this.sort.direction === SortDirection.Descending
				? SortDirection.Ascending : SortDirection.Descending
			classes.push(sortDirection)

			const params = { sortField: field, sortDirection }
			const search = Object.keys(params).map(key => {
				return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
			})

			return (
				<li key={field} className={classes.join(' ')}>
					<Link to={{
						pathname: this.props.location.pathname,
						search: '?' + search.join('&')
					}}>
						{sorts[field]}
					</Link>
				</li>
			)
		})
	}

	private get scored() {
		return this.props.activeVideos.map(vid => {
			const start = first(vid.snapshots)
			const end  = last(vid.snapshots)

			const startCount = start != null
				? [start.views, start.likes, start.dislikes, start.favorites,
					start.comments]
					.map(Number).reduce((sum, num) => sum + num, 0)
				: 0
			const endCount = end != null
				? [end.views, end.likes, end.dislikes, end.favorites, end.comments]
					.map(Number).reduce((sum, num) => sum + num, 0)
				: 0

			const change  = endCount - startCount
			const ratio   = (endCount / startCount) || 0

			return {
				video: vid,
				score: change * (ratio-1)**2,
				percent: (ratio * 100) - 100,
				change,
			}
		})
	}

	private get sorted() {
		return this.scored.sort((vid1, vid2) => {
			const { field, direction } = this.sort

			const [a, b] = direction === SortDirection.Descending
				? [vid2, vid1] : [vid1, vid2]

			// Field values can be NaN. Prevents items without stats sorting weirdly.
			return (a[field] || 0) - (b[field] || 0)
		})
	}


	private scoochItems(): void {
		console.debug('scooching')
		if (!this.el)
			return;

		interface Item { el: Element, top: number, height: number }

		const itemElements = this.el.querySelectorAll(
			':scope > .items > *'
		)

		const items: Item[] = []
		itemElements.forEach(el => {
			let { top, height } = el.getBoundingClientRect()
			const styles = window.getComputedStyle(el)

			height += (parseInt(styles.marginTop    || '0', 10) || 0)
			        + (parseInt(styles.marginBottom || '0', 10) || 0)

			items.push({ el, top, height })
		})

		let prevCol: number
		const columns = items.reduce((columns, item, index) => {
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

		const videoOffsets: { [key: string]: number } = {}
		columns.forEach((items) => {
			let prevOffset = 0
			items.forEach((item, index, list) => {
				const id = item.el.getAttribute('id')
				if (id === null)
					return;
				const key = id.replace(/^video-/, '')

				if (index === 0) {
					videoOffsets[key] = 0
					return;
				}

				const prevItem = list[index-1]
				const y = prevItem.top + prevOffset + prevItem.height
				videoOffsets[key] = prevOffset = y - item.top
			})
		})

		this.setState({ videoOffsets })
	}

}


export default createFragmentContainer(VideoList, graphql`
	fragment VideoList_activeVideos on Video @relay(plural: true) {
		id
    snapshots: statsByAge(seconds: $statsAge) {
      views
      likes
      dislikes
      favorites
      comments
    }
		...Video_video
	}
`)
