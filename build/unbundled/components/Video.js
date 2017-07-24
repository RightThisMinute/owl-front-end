"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const { createFragmentContainer, graphql } = require('react-relay');
const StatsChange_1 = require("./StatsChange");
const StatsChart_1 = require("./StatsChart");
class Video extends React.Component {
    render() {
        const { id, snapshots = [] } = this.props.video;
        const { title = '[Unknown]', thumbnailURL = 'https://www.fillmurray.com/1920/1080' } = this.props.video.details || {};
        return (React.createElement("article", { id: `video-${id}` },
            React.createElement("a", { href: `https://youtu.be/${id}` },
                React.createElement("h1", null, title),
                React.createElement("img", { src: thumbnailURL, alt: title }),
                React.createElement(StatsChart_1.default, { snapshots: snapshots }),
                React.createElement(StatsChange_1.default, { snapshots: snapshots }))));
    }
}
exports.default = createFragmentContainer(Video, graphql `
	fragment Video_video on Video {
		id	
		details {
			title
			thumbnailURL
		}
		snapshots: statsByAge(seconds: 86400) {
      ...StatsChart_snapshots
			...StatsChange_snapshots
		}
	}
`);
//# sourceMappingURL=Video.js.map