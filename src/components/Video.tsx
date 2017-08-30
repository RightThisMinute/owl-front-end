
import * as React from 'react'
const { createFragmentContainer, graphql } = require('react-relay')

import StatsChange, { StatsChangeProps } from './StatsChange'
import StatsChart, { StatsChartProps } from './StatsChart'

import '../../../src/components/Video/style.pcss'


interface SnapshotProps extends StatsChartProps, StatsChangeProps {}

export interface VideoProps extends SnapshotProps {
	id: string,
	details: {
		title: string,
		thumbnailURL: string,
	},
}

interface Props {
	video: VideoProps
	chartScale: number
	chartDataPountCount: number
	id: string
	style?: React.CSSProperties
}

class Video extends React.Component<Props, any> {

	render() {
		const { video, style={} } = this.props
		const { id, snapshots=[] } = video
		const {
			title = `[${id}]`,
			thumbnailURL = 'https://www.fillmurray.com/1920/1080'
		} = video.details || {}

		return (
			<article className="video" id={this.props.id} style={style}>
				<a href={`https://youtu.be/${id}`}>
					<h1>{title}</h1>
					<div className="graphics">
						<img src={thumbnailURL} alt={title} />
						<StatsChart snapshots={snapshots} scale={this.props.chartScale}
						            dataPointCount={this.props.chartDataPountCount} />
					</div>
					<StatsChange snapshots={snapshots} />
				</a>
			</article>
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
		snapshots: statsByAge(seconds: $statsAge) {
      ...StatsChart_snapshots
			...StatsChange_snapshots
		}
	}
`)
