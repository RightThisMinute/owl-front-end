"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const first = require("lodash/first");
const last = require("lodash/last");
const React = require("react");
const Relay = require("react-relay");
const { createFragmentContainer, graphql } = Relay;
const Video_1 = require("../Video");
require("../../../../src/components/VideoList/style.pcss");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlb0xpc3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQywrQkFBOEI7QUFDOUIscUNBQW9DO0FBQ3BDLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUE7QUFFbEQsb0NBQTRDO0FBRTVDLDJEQUF3RDtBQU94RCxJQUFLLFNBSUo7QUFKRCxXQUFLLFNBQVM7SUFDYiw2QkFBZ0IsQ0FBQTtJQUNoQixzQ0FBeUIsQ0FBQTtJQUN6QixtQ0FBc0IsQ0FBQTtBQUN2QixDQUFDLEVBSkksU0FBUyxLQUFULFNBQVMsUUFJYjtBQUVELElBQUssYUFHSjtBQUhELFdBQUssYUFBYTtJQUNqQixrQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSEksYUFBYSxLQUFiLGFBQWEsUUFHakI7QUFPRCxlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUFxQjtJQUVsRCxNQUFNO1FBQ0wsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDN0MsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNsQyxNQUFNLEdBQUcsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBRWhDLE1BQU0sVUFBVSxHQUFHLEtBQUssSUFBSSxJQUFJO2tCQUM3QixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxTQUFTO29CQUMzRCxLQUFLLENBQUMsUUFBUSxDQUFDO3FCQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2tCQUM5QyxDQUFDLENBQUE7WUFDSixNQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksSUFBSTtrQkFDekIsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUM7cUJBQ2pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2tCQUM5QyxDQUFDLENBQUE7WUFFSixNQUFNLE1BQU0sR0FBSSxRQUFRLEdBQUcsVUFBVSxDQUFBO1lBQ3JDLE1BQU0sS0FBSyxHQUFLLFFBQVEsR0FBRyxVQUFVLENBQUE7WUFFckMsTUFBTSxDQUFDO2dCQUNOLEtBQUssRUFBRSxHQUFHO2dCQUNWLEtBQUssRUFBRSxNQUFNLEdBQUcsS0FBSztnQkFDckIsT0FBTyxFQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7Z0JBQzVCLE1BQU07YUFDTixDQUFBO1FBQ0YsQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUk7WUFDckMsTUFBTSxFQUFFLEtBQUssR0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsR0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEdBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQTtZQUV4QixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxhQUFhLENBQUMsVUFBVTtrQkFDbEQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFFOUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFBTSxNQUFNLENBQUMsQ0FDekMsb0JBQUMsZUFBSyxJQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBSSxDQUM5QyxDQUFBO1FBQUEsQ0FBQyxDQUFDLENBQUE7UUFFSCxNQUFNLENBQUMsQ0FDTixpQ0FBUyxTQUFTLEVBQUMsWUFBWSxJQUM3QixNQUFNLENBQ0UsQ0FDVixDQUFBO0lBQ0YsQ0FBQztDQUVEO0FBR0Qsa0JBQWUsdUJBQXVCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQTs7Ozs7Q0FLeEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZmlyc3QgPSByZXF1aXJlKCdsb2Rhc2gvZmlyc3QnKVxuaW1wb3J0IGxhc3QgPSByZXF1aXJlKCdsb2Rhc2gvbGFzdCcpXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFJlbGF5IGZyb20gJ3JlYWN0LXJlbGF5J1xuY29uc3QgeyBjcmVhdGVGcmFnbWVudENvbnRhaW5lciwgZ3JhcGhxbCB9ID0gUmVsYXlcblxuaW1wb3J0IFZpZGVvLCB7IFZpZGVvUHJvcHMgfSBmcm9tICcuLi9WaWRlbydcblxuaW1wb3J0ICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlb0xpc3Qvc3R5bGUucGNzcydcblxuXG5pbnRlcmZhY2UgVmlkZW9Qcm9wczIgZXh0ZW5kcyBWaWRlb1Byb3BzIHtcblx0aWQsXG59XG5cbmVudW0gU29ydEZpZWxkIHtcblx0VGhlT3dsID0gJ3Njb3JlJyxcblx0UGVyY2VudENoYW5nZSA9ICdwZXJjZW50Jyxcblx0Q2hhbmdlQ291bnQgPSAnY2hhbmdlJyxcbn1cblxuZW51bSBTb3J0RGlyZWN0aW9uIHtcblx0QXNjZW5kaW5nID0gJ2FzYycsXG5cdERlc2NlbmRpbmcgPSAnZGVzYycsXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFjdGl2ZVZpZGVvczogVmlkZW9Qcm9wczJbXVxuXHRzb3J0PzogeyBmaWVsZDogU29ydEZpZWxkLCBkaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uIH1cbn1cblxuY2xhc3MgVmlkZW9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2NvcmVkID0gdGhpcy5wcm9wcy5hY3RpdmVWaWRlb3MubWFwKHZpZCA9PiB7XG5cdFx0XHRjb25zdCBzdGFydCA9IGZpcnN0KHZpZC5zbmFwc2hvdHMpXG5cdFx0XHRjb25zdCBlbmQgID0gbGFzdCh2aWQuc25hcHNob3RzKVxuXG5cdFx0XHRjb25zdCBzdGFydENvdW50ID0gc3RhcnQgIT0gbnVsbFxuXHRcdFx0XHQ/IFtzdGFydC52aWV3cywgc3RhcnQubGlrZXMsIHN0YXJ0LmRpc2xpa2VzLCBzdGFydC5mYXZvcml0ZXMsXG5cdFx0XHRcdFx0c3RhcnQuY29tbWVudHNdXG5cdFx0XHRcdFx0Lm1hcChOdW1iZXIpLnJlZHVjZSgoc3VtLCBudW0pID0+IHN1bSArIG51bSwgMClcblx0XHRcdFx0OiAwXG5cdFx0XHRjb25zdCBlbmRDb3VudCA9IGVuZCAhPSBudWxsXG5cdFx0XHRcdD8gW2VuZC52aWV3cywgZW5kLmxpa2VzLCBlbmQuZGlzbGlrZXMsIGVuZC5mYXZvcml0ZXMsIGVuZC5jb21tZW50c11cblx0XHRcdFx0XHQubWFwKE51bWJlcikucmVkdWNlKChzdW0sIG51bSkgPT4gc3VtICsgbnVtLCAwKVxuXHRcdFx0XHQ6IDBcblxuXHRcdFx0Y29uc3QgY2hhbmdlICA9IGVuZENvdW50IC0gc3RhcnRDb3VudFxuXHRcdFx0Y29uc3QgcmF0aW8gICA9IGVuZENvdW50IC8gc3RhcnRDb3VudFxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2aWRlbzogdmlkLFxuXHRcdFx0XHRzY29yZTogY2hhbmdlICogcmF0aW8sXG5cdFx0XHRcdHBlcmNlbnQ6IChyYXRpbyAqIDEwMCkgLSAxMDAsXG5cdFx0XHRcdGNoYW5nZSxcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Y29uc3Qgc29ydGVkID0gc2NvcmVkLnNvcnQoKHZpZDEsIHZpZDIpID0+IHtcblx0XHRcdGNvbnN0IHsgZmllbGQ9U29ydEZpZWxkLlRoZU93bCwgZGlyZWN0aW9uPVNvcnREaXJlY3Rpb24uRGVzY2VuZGluZyB9XG5cdFx0XHRcdD0gdGhpcy5wcm9wcy5zb3J0IHx8IHt9XG5cblx0XHRcdGNvbnN0IFthLCBiXSA9IGRpcmVjdGlvbiA9PT0gU29ydERpcmVjdGlvbi5EZXNjZW5kaW5nXG5cdFx0XHRcdD8gW3ZpZDIsIHZpZDFdIDogW3ZpZDEsIHZpZDJdXG5cblx0XHRcdHJldHVybiBhW2ZpZWxkXSAtIGJbZmllbGRdXG5cdFx0fSlcblxuXHRcdGNvbnN0IHZpZGVvcyA9IHNvcnRlZC5tYXAodmlkID0+IHsgcmV0dXJuIChcblx0XHRcdDxWaWRlbyBrZXk9e3ZpZC52aWRlby5pZH0gdmlkZW89e3ZpZC52aWRlb30gLz5cblx0XHQpfSlcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aWRlby1saXN0XCI+XG5cdFx0XHRcdHt2aWRlb3N9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudENvbnRhaW5lcihWaWRlb0xpc3QsIGdyYXBocWxgXG5cdGZyYWdtZW50IFZpZGVvTGlzdF9hY3RpdmVWaWRlb3Mgb24gVmlkZW8gQHJlbGF5KHBsdXJhbDogdHJ1ZSkge1xuXHRcdGlkXG5cdFx0Li4uVmlkZW9fdmlkZW9cblx0fVxuYClcbiJdfQ==