"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const first = require("lodash/first");
const last = require("lodash/last");
const React = require("react");
const Relay = require("react-relay");
const { createFragmentContainer, graphql } = Relay;
const Video_1 = require("./Video");
var SortField;
(function (SortField) {
    SortField["TheOwl"] = "score";
    SortField["PercentChange"] = "percent";
    SortField["ChangeCount"] = "change";
})(SortField || (SortField = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["Ascending"] = "asc";
    SortDirection["Descending"] = "desc";
})(SortDirection || (SortDirection = {}));
class VideoList extends React.Component {
    render() {
        const scored = this.props.activeVideos.map(vid => {
            const start = first(vid.snapshots);
            const end = last(vid.snapshots);
            const startCount = start != null
                ? [start.views, start.likes, start.dislikes, start.favorites,
                    start.comments]
                    .map(Number).reduce((sum, num) => sum + num, 0)
                : 0;
            const endCount = end != null
                ? [end.views, end.likes, end.dislikes, end.favorites, end.comments]
                    .map(Number).reduce((sum, num) => sum + num, 0)
                : 0;
            const change = endCount - startCount;
            const ratio = endCount / startCount;
            return {
                video: vid,
                score: change * ratio,
                percent: (ratio * 100) - 100,
                change,
            };
        });
        const sorted = scored.sort((vid1, vid2) => {
            const { field = SortField.TheOwl, direction = SortDirection.Descending } = this.props.sort || {};
            const [a, b] = direction === SortDirection.Descending
                ? [vid2, vid1] : [vid1, vid2];
            return a[field] - b[field];
        });
        const videos = sorted.map(vid => {
            return (React.createElement(Video_1.default, { key: vid.video.id, video: vid.video }));
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