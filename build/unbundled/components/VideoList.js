"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Relay = require("react-relay");
const { createFragmentContainer, graphql } = Relay;
const Video_1 = require("./Video");
class VideoList extends React.Component {
    render() {
        const videos = this.props.activeVideos.map((vid) => {
            return (React.createElement(Video_1.default, { key: vid.id, video: vid }));
        });
        return (React.createElement("section", { className: "video-list" }, videos));
    }
}
exports.default = createFragmentContainer(VideoList, graphql `
	fragment VideoList_activeVideos on Video @relay(plural: true) {
		id
		...Video_video
	}
`);
//# sourceMappingURL=VideoList.js.map