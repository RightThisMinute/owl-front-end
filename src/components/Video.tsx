
import * as React from 'react'
const { createFragmentContainer, graphql } = require('react-relay')

import StatsChart from './StatsChart'


interface VideoProps {
	video: {
		id: string,
		details: {
			title: string,
			thumbnailURL: string,
		},
		snapshots: any[]
	}
}

class Video extends React.Component<VideoProps, any> {

	render() {
		const { id, snapshots = [] } = this.props.video
		const {
			title = '[Unknown]',
			thumbnailURL = 'https://www.fillmurray.com/1920/1080'
		} = this.props.video.details || {}

		return (
			<article id={`video-${id}`}><a href={`https://youtu.be/${id}`}>
				<h1>{title}</h1>
				<img src={thumbnailURL} alt={title} />
				<StatsChart snapshots={snapshots} />
				{/*<SnapshotChange snapshots={vid.snapshots} />*/}
			</a></article>
		)
	}

}

export default createFragmentContainer(Video, graphql`
	fragment Video_video on Video {
		id	
		details {
			title
			thumbnailURL
		}
		snapshots: statsByAge(seconds: 86400) {
      ...StatsChart_snapshots
      #		...SnapshotChange_video
		}
	}
`)
