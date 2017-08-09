"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const first = require("lodash/first");
const last = require("lodash/last");
const React = require("react");
const Relay = require("react-relay");
const { createFragmentContainer, graphql } = Relay;
const Video_1 = require("./Video");
require("../../../src/components/VideoList/style.pcss");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9MaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlkZW9MaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsK0JBQThCO0FBQzlCLHFDQUFvQztBQUNwQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFBO0FBRWxELG1DQUEyQztBQUUzQyx3REFBcUQ7QUFPckQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ2IsNkJBQWdCLENBQUE7SUFDaEIsc0NBQXlCLENBQUE7SUFDekIsbUNBQXNCLENBQUE7QUFDdkIsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLGFBR0o7QUFIRCxXQUFLLGFBQWE7SUFDakIsa0NBQWlCLENBQUE7SUFDakIsb0NBQW1CLENBQUE7QUFDcEIsQ0FBQyxFQUhJLGFBQWEsS0FBYixhQUFhLFFBR2pCO0FBT0QsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBcUI7SUFFbEQsTUFBTTtRQUNMLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQzdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDbEMsTUFBTSxHQUFHLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUVoQyxNQUFNLFVBQVUsR0FBRyxLQUFLLElBQUksSUFBSTtrQkFDN0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUztvQkFDM0QsS0FBSyxDQUFDLFFBQVEsQ0FBQztxQkFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztrQkFDOUMsQ0FBQyxDQUFBO1lBQ0osTUFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLElBQUk7a0JBQ3pCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDO3FCQUNqRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztrQkFDOUMsQ0FBQyxDQUFBO1lBRUosTUFBTSxNQUFNLEdBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQTtZQUNyQyxNQUFNLEtBQUssR0FBSyxRQUFRLEdBQUcsVUFBVSxDQUFBO1lBRXJDLE1BQU0sQ0FBQztnQkFDTixLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUs7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO2dCQUM1QixNQUFNO2FBQ04sQ0FBQTtRQUNGLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJO1lBQ3JDLE1BQU0sRUFBRSxLQUFLLEdBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEdBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxHQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUE7WUFFeEIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssYUFBYSxDQUFDLFVBQVU7a0JBQ2xELENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBRTlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQU0sTUFBTSxDQUFDLENBQ3pDLG9CQUFDLGVBQUssSUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUksQ0FDOUMsQ0FBQTtRQUFBLENBQUMsQ0FBQyxDQUFBO1FBRUgsTUFBTSxDQUFDLENBQ04saUNBQVMsU0FBUyxFQUFDLFlBQVksSUFDN0IsTUFBTSxDQUNFLENBQ1YsQ0FBQTtJQUNGLENBQUM7Q0FFRDtBQUdELGtCQUFlLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUE7Ozs7O0NBS3hELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGZpcnN0ID0gcmVxdWlyZSgnbG9kYXNoL2ZpcnN0JylcbmltcG9ydCBsYXN0ID0gcmVxdWlyZSgnbG9kYXNoL2xhc3QnKVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSZWxheSBmcm9tICdyZWFjdC1yZWxheSdcbmNvbnN0IHsgY3JlYXRlRnJhZ21lbnRDb250YWluZXIsIGdyYXBocWwgfSA9IFJlbGF5XG5cbmltcG9ydCBWaWRlbywgeyBWaWRlb1Byb3BzIH0gZnJvbSAnLi9WaWRlbydcblxuaW1wb3J0ICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlb0xpc3Qvc3R5bGUucGNzcydcblxuXG5pbnRlcmZhY2UgVmlkZW9Qcm9wczIgZXh0ZW5kcyBWaWRlb1Byb3BzIHtcblx0aWQsXG59XG5cbmVudW0gU29ydEZpZWxkIHtcblx0VGhlT3dsID0gJ3Njb3JlJyxcblx0UGVyY2VudENoYW5nZSA9ICdwZXJjZW50Jyxcblx0Q2hhbmdlQ291bnQgPSAnY2hhbmdlJyxcbn1cblxuZW51bSBTb3J0RGlyZWN0aW9uIHtcblx0QXNjZW5kaW5nID0gJ2FzYycsXG5cdERlc2NlbmRpbmcgPSAnZGVzYycsXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFjdGl2ZVZpZGVvczogVmlkZW9Qcm9wczJbXVxuXHRzb3J0PzogeyBmaWVsZDogU29ydEZpZWxkLCBkaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uIH1cbn1cblxuY2xhc3MgVmlkZW9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2NvcmVkID0gdGhpcy5wcm9wcy5hY3RpdmVWaWRlb3MubWFwKHZpZCA9PiB7XG5cdFx0XHRjb25zdCBzdGFydCA9IGZpcnN0KHZpZC5zbmFwc2hvdHMpXG5cdFx0XHRjb25zdCBlbmQgID0gbGFzdCh2aWQuc25hcHNob3RzKVxuXG5cdFx0XHRjb25zdCBzdGFydENvdW50ID0gc3RhcnQgIT0gbnVsbFxuXHRcdFx0XHQ/IFtzdGFydC52aWV3cywgc3RhcnQubGlrZXMsIHN0YXJ0LmRpc2xpa2VzLCBzdGFydC5mYXZvcml0ZXMsXG5cdFx0XHRcdFx0c3RhcnQuY29tbWVudHNdXG5cdFx0XHRcdFx0Lm1hcChOdW1iZXIpLnJlZHVjZSgoc3VtLCBudW0pID0+IHN1bSArIG51bSwgMClcblx0XHRcdFx0OiAwXG5cdFx0XHRjb25zdCBlbmRDb3VudCA9IGVuZCAhPSBudWxsXG5cdFx0XHRcdD8gW2VuZC52aWV3cywgZW5kLmxpa2VzLCBlbmQuZGlzbGlrZXMsIGVuZC5mYXZvcml0ZXMsIGVuZC5jb21tZW50c11cblx0XHRcdFx0XHQubWFwKE51bWJlcikucmVkdWNlKChzdW0sIG51bSkgPT4gc3VtICsgbnVtLCAwKVxuXHRcdFx0XHQ6IDBcblxuXHRcdFx0Y29uc3QgY2hhbmdlICA9IGVuZENvdW50IC0gc3RhcnRDb3VudFxuXHRcdFx0Y29uc3QgcmF0aW8gICA9IGVuZENvdW50IC8gc3RhcnRDb3VudFxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2aWRlbzogdmlkLFxuXHRcdFx0XHRzY29yZTogY2hhbmdlICogcmF0aW8sXG5cdFx0XHRcdHBlcmNlbnQ6IChyYXRpbyAqIDEwMCkgLSAxMDAsXG5cdFx0XHRcdGNoYW5nZSxcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Y29uc3Qgc29ydGVkID0gc2NvcmVkLnNvcnQoKHZpZDEsIHZpZDIpID0+IHtcblx0XHRcdGNvbnN0IHsgZmllbGQ9U29ydEZpZWxkLlRoZU93bCwgZGlyZWN0aW9uPVNvcnREaXJlY3Rpb24uRGVzY2VuZGluZyB9XG5cdFx0XHRcdD0gdGhpcy5wcm9wcy5zb3J0IHx8IHt9XG5cblx0XHRcdGNvbnN0IFthLCBiXSA9IGRpcmVjdGlvbiA9PT0gU29ydERpcmVjdGlvbi5EZXNjZW5kaW5nXG5cdFx0XHRcdD8gW3ZpZDIsIHZpZDFdIDogW3ZpZDEsIHZpZDJdXG5cblx0XHRcdHJldHVybiBhW2ZpZWxkXSAtIGJbZmllbGRdXG5cdFx0fSlcblxuXHRcdGNvbnN0IHZpZGVvcyA9IHNvcnRlZC5tYXAodmlkID0+IHsgcmV0dXJuIChcblx0XHRcdDxWaWRlbyBrZXk9e3ZpZC52aWRlby5pZH0gdmlkZW89e3ZpZC52aWRlb30gLz5cblx0XHQpfSlcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aWRlby1saXN0XCI+XG5cdFx0XHRcdHt2aWRlb3N9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudENvbnRhaW5lcihWaWRlb0xpc3QsIGdyYXBocWxgXG5cdGZyYWdtZW50IFZpZGVvTGlzdF9hY3RpdmVWaWRlb3Mgb24gVmlkZW8gQHJlbGF5KHBsdXJhbDogdHJ1ZSkge1xuXHRcdGlkXG5cdFx0Li4uVmlkZW9fdmlkZW9cblx0fVxuYClcbiJdfQ==