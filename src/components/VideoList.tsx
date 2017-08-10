
import first = require('lodash/first')
import last = require('lodash/last')
import * as React from 'react'
import * as Relay from 'react-relay'
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
	sort?: { field: SortField, direction?: SortDirection }
}

class VideoList extends React.Component<Props, any> {

	render() {
		const scored = this.props.activeVideos.map(vid => {
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
			const ratio   = endCount / startCount

			return {
				video: vid,
				score: change * (ratio-1)**2,
				percent: (ratio * 100) - 100,
				change,
			}
		})

		const sorted = scored.sort((vid1, vid2) => {
			const { field=SortField.TheOwl, direction=SortDirection.Descending }
				= this.props.sort || {}

			const [a, b] = direction === SortDirection.Descending
				? [vid2, vid1] : [vid1, vid2]

			return a[field] - b[field]
		})

		const videos = sorted.map(vid => { return (
			<Video key={vid.video.id} video={vid.video} />
		)})

		return (
			<section className="video-list">
				{videos}
			</section>
		)
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
