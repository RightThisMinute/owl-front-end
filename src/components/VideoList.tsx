
import * as React from 'react'
import * as Relay from 'react-relay'
const graphql = Relay.graphql

import Video from './Video'


interface VideoListProps {
	activeVideos: any[]
}


class VideoList extends React.Component<VideoListProps, any> {

	render() {
		const videos = this.props.activeVideos.map((vid) => { return (
			<Video key={vid.id} video={vid} />
		)})

		return (
			<section className="video-list">
				{ videos }
			</section>
		)
	}

}


export default Relay.createFragmentContainer(VideoList, graphql`
	fragment VideoList_activeVideos on Video @relay(plural: true) {
		id
		...Video_video
	}
`)
