
import * as React from 'react'
import * as Relay from 'react-relay'
const graphql = Relay.graphql


interface VideoProps {
	video: {
		id: string,
		details: {
			title: string,
			thumbnailURL: string,
		},
		// snapshots: any[]
	}
}


class Video extends React.Component<VideoProps, any> {

	render() {
		const { id } = this.props.video
		const {
			title='[Unknown]',
			thumbnailURL='https://www.fillmurray.com/1920/1080'
		} = this.props.video.details || {}

		return (
			<article id={`video-${id}`}><a href={`https://youtu.be/${id}`}>
				<h1>{title}</h1>
				<img src={thumbnailURL} alt={title} />
				{/*<SnapshotGraph snapshots={vid.snapshots} />*/}
				{/*<SnapshotChange snapshots={vid.snapshots} />*/}
			</a></article>
		)
	}

}


export default Relay.createFragmentContainer(Video, graphql`
	fragment Video_video on Video {
		id	
		details {
			title
			thumbnailURL
		}
	}
`)
