"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Relay = require("react-relay");
const graphql = Relay.graphql;
class Video extends React.Component {
    render() {
        const { id } = this.props.video;
        const { title = '[Unknown]', thumbnailURL = 'https://www.fillmurray.com/1920/1080' } = this.props.video.details || {};
        return (React.createElement("article", { id: `video-${id}` },
            React.createElement("a", { href: `https://youtu.be/${id}` },
                React.createElement("h1", null, title),
                React.createElement("img", { src: thumbnailURL, alt: title }))));
    }
}
exports.default = Relay.createFragmentContainer(Video, graphql `
	fragment Video_video on Video {
		id	
		details {
			title
			thumbnailURL
		}
	}
`);
//# sourceMappingURL=Video.js.map