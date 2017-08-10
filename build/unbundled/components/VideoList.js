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
                score: change * Math.pow((ratio - 1), 2),
                percent: (ratio * 100) - 100,
                change,
            };
        });
        const sorted = scored.sort((vid1, vid2) => {
            const { field = SortField.TheOwl, direction = SortDirection.Descending } = this.props.sort || {};
            const [a, b] = direction === SortDirection.Descending
                ? [vid2, vid1] : [vid1, vid2];
            // Field values can be NaN. Prevents items without stats sorting weirdly.
            return (a[field] || 0) - (b[field] || 0);
        });
        const percents = scored.map(vid => vid.percent);
        let chartScale = Math.max(0, ...percents) / 100 + 1;
        if (chartScale < 2)
            chartScale = 2;
        const videos = sorted.map(vid => {
            return (React.createElement(Video_1.default, { key: vid.video.id, video: vid.video, chartScale: chartScale }));
        });
        return (React.createElement("section", { className: "video-list" }, videos));
    }
}
exports.default = createFragmentContainer(VideoList, graphql `
	fragment VideoList_activeVideos on Video @relay(plural: true) {
		id
    snapshots: statsByAge(seconds: $statsAge) {
      views
      likes
      dislikes
      favorites
      comments
    }
		...Video_video
	}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9MaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlkZW9MaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsK0JBQThCO0FBQzlCLHFDQUFvQztBQUNwQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFBO0FBRWxELG1DQUEyQztBQUUzQyx3REFBcUQ7QUFPckQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ2IsNkJBQWdCLENBQUE7SUFDaEIsc0NBQXlCLENBQUE7SUFDekIsbUNBQXNCLENBQUE7QUFDdkIsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLGFBR0o7QUFIRCxXQUFLLGFBQWE7SUFDakIsa0NBQWlCLENBQUE7SUFDakIsb0NBQW1CLENBQUE7QUFDcEIsQ0FBQyxFQUhJLGFBQWEsS0FBYixhQUFhLFFBR2pCO0FBT0QsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBcUI7SUFFbEQsTUFBTTtRQUNMLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQzdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDbEMsTUFBTSxHQUFHLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUVoQyxNQUFNLFVBQVUsR0FBRyxLQUFLLElBQUksSUFBSTtrQkFDN0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUztvQkFDM0QsS0FBSyxDQUFDLFFBQVEsQ0FBQztxQkFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztrQkFDOUMsQ0FBQyxDQUFBO1lBQ0osTUFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLElBQUk7a0JBQ3pCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDO3FCQUNqRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztrQkFDOUMsQ0FBQyxDQUFBO1lBRUosTUFBTSxNQUFNLEdBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQTtZQUNyQyxNQUFNLEtBQUssR0FBSyxRQUFRLEdBQUcsVUFBVSxDQUFBO1lBRXJDLE1BQU0sQ0FBQztnQkFDTixLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsTUFBTSxHQUFHLFNBQUEsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztnQkFDNUIsTUFBTTthQUNOLENBQUE7UUFDRixDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSTtZQUNyQyxNQUFNLEVBQUUsS0FBSyxHQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxHQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsR0FDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO1lBRXhCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLGFBQWEsQ0FBQyxVQUFVO2tCQUNsRCxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUU5Qix5RUFBeUU7WUFDekUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxRQUFRLEdBQWEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3pELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNuRCxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLFVBQVUsR0FBRyxDQUFDLENBQUE7UUFFZixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFBTSxNQUFNLENBQUMsQ0FDekMsb0JBQUMsZUFBSyxJQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxHQUFJLENBQ3RFLENBQUE7UUFBQSxDQUFDLENBQUMsQ0FBQTtRQUVILE1BQU0sQ0FBQyxDQUNOLGlDQUFTLFNBQVMsRUFBQyxZQUFZLElBQzdCLE1BQU0sQ0FDRSxDQUNWLENBQUE7SUFDRixDQUFDO0NBRUQ7QUFHRCxrQkFBZSx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFBOzs7Ozs7Ozs7Ozs7Q0FZeEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZmlyc3QgPSByZXF1aXJlKCdsb2Rhc2gvZmlyc3QnKVxuaW1wb3J0IGxhc3QgPSByZXF1aXJlKCdsb2Rhc2gvbGFzdCcpXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFJlbGF5IGZyb20gJ3JlYWN0LXJlbGF5J1xuY29uc3QgeyBjcmVhdGVGcmFnbWVudENvbnRhaW5lciwgZ3JhcGhxbCB9ID0gUmVsYXlcblxuaW1wb3J0IFZpZGVvLCB7IFZpZGVvUHJvcHMgfSBmcm9tICcuL1ZpZGVvJ1xuXG5pbXBvcnQgJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdC9zdHlsZS5wY3NzJ1xuXG5cbmludGVyZmFjZSBWaWRlb1Byb3BzMiBleHRlbmRzIFZpZGVvUHJvcHMge1xuXHRpZCxcbn1cblxuZW51bSBTb3J0RmllbGQge1xuXHRUaGVPd2wgPSAnc2NvcmUnLFxuXHRQZXJjZW50Q2hhbmdlID0gJ3BlcmNlbnQnLFxuXHRDaGFuZ2VDb3VudCA9ICdjaGFuZ2UnLFxufVxuXG5lbnVtIFNvcnREaXJlY3Rpb24ge1xuXHRBc2NlbmRpbmcgPSAnYXNjJyxcblx0RGVzY2VuZGluZyA9ICdkZXNjJyxcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0YWN0aXZlVmlkZW9zOiBWaWRlb1Byb3BzMltdXG5cdHNvcnQ/OiB7IGZpZWxkOiBTb3J0RmllbGQsIGRpcmVjdGlvbj86IFNvcnREaXJlY3Rpb24gfVxufVxuXG5jbGFzcyBWaWRlb0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBzY29yZWQgPSB0aGlzLnByb3BzLmFjdGl2ZVZpZGVvcy5tYXAodmlkID0+IHtcblx0XHRcdGNvbnN0IHN0YXJ0ID0gZmlyc3QodmlkLnNuYXBzaG90cylcblx0XHRcdGNvbnN0IGVuZCAgPSBsYXN0KHZpZC5zbmFwc2hvdHMpXG5cblx0XHRcdGNvbnN0IHN0YXJ0Q291bnQgPSBzdGFydCAhPSBudWxsXG5cdFx0XHRcdD8gW3N0YXJ0LnZpZXdzLCBzdGFydC5saWtlcywgc3RhcnQuZGlzbGlrZXMsIHN0YXJ0LmZhdm9yaXRlcyxcblx0XHRcdFx0XHRzdGFydC5jb21tZW50c11cblx0XHRcdFx0XHQubWFwKE51bWJlcikucmVkdWNlKChzdW0sIG51bSkgPT4gc3VtICsgbnVtLCAwKVxuXHRcdFx0XHQ6IDBcblx0XHRcdGNvbnN0IGVuZENvdW50ID0gZW5kICE9IG51bGxcblx0XHRcdFx0PyBbZW5kLnZpZXdzLCBlbmQubGlrZXMsIGVuZC5kaXNsaWtlcywgZW5kLmZhdm9yaXRlcywgZW5kLmNvbW1lbnRzXVxuXHRcdFx0XHRcdC5tYXAoTnVtYmVyKS5yZWR1Y2UoKHN1bSwgbnVtKSA9PiBzdW0gKyBudW0sIDApXG5cdFx0XHRcdDogMFxuXG5cdFx0XHRjb25zdCBjaGFuZ2UgID0gZW5kQ291bnQgLSBzdGFydENvdW50XG5cdFx0XHRjb25zdCByYXRpbyAgID0gZW5kQ291bnQgLyBzdGFydENvdW50XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZpZGVvOiB2aWQsXG5cdFx0XHRcdHNjb3JlOiBjaGFuZ2UgKiAocmF0aW8tMSkqKjIsXG5cdFx0XHRcdHBlcmNlbnQ6IChyYXRpbyAqIDEwMCkgLSAxMDAsXG5cdFx0XHRcdGNoYW5nZSxcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Y29uc3Qgc29ydGVkID0gc2NvcmVkLnNvcnQoKHZpZDEsIHZpZDIpID0+IHtcblx0XHRcdGNvbnN0IHsgZmllbGQ9U29ydEZpZWxkLlRoZU93bCwgZGlyZWN0aW9uPVNvcnREaXJlY3Rpb24uRGVzY2VuZGluZyB9XG5cdFx0XHRcdD0gdGhpcy5wcm9wcy5zb3J0IHx8IHt9XG5cblx0XHRcdGNvbnN0IFthLCBiXSA9IGRpcmVjdGlvbiA9PT0gU29ydERpcmVjdGlvbi5EZXNjZW5kaW5nXG5cdFx0XHRcdD8gW3ZpZDIsIHZpZDFdIDogW3ZpZDEsIHZpZDJdXG5cblx0XHRcdC8vIEZpZWxkIHZhbHVlcyBjYW4gYmUgTmFOLiBQcmV2ZW50cyBpdGVtcyB3aXRob3V0IHN0YXRzIHNvcnRpbmcgd2VpcmRseS5cblx0XHRcdHJldHVybiAoYVtmaWVsZF0gfHwgMCkgLSAoYltmaWVsZF0gfHwgMClcblx0XHR9KVxuXG5cdFx0Y29uc3QgcGVyY2VudHM6IG51bWJlcltdID0gc2NvcmVkLm1hcCh2aWQgPT4gdmlkLnBlcmNlbnQpXG5cdFx0bGV0IGNoYXJ0U2NhbGUgPSBNYXRoLm1heCgwLCAuLi5wZXJjZW50cykgLyAxMDAgKyAxXG5cdFx0aWYgKGNoYXJ0U2NhbGUgPCAyKVxuXHRcdFx0Y2hhcnRTY2FsZSA9IDJcblxuXHRcdGNvbnN0IHZpZGVvcyA9IHNvcnRlZC5tYXAodmlkID0+IHsgcmV0dXJuIChcblx0XHRcdDxWaWRlbyBrZXk9e3ZpZC52aWRlby5pZH0gdmlkZW89e3ZpZC52aWRlb30gY2hhcnRTY2FsZT17Y2hhcnRTY2FsZX0gLz5cblx0XHQpfSlcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aWRlby1saXN0XCI+XG5cdFx0XHRcdHt2aWRlb3N9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudENvbnRhaW5lcihWaWRlb0xpc3QsIGdyYXBocWxgXG5cdGZyYWdtZW50IFZpZGVvTGlzdF9hY3RpdmVWaWRlb3Mgb24gVmlkZW8gQHJlbGF5KHBsdXJhbDogdHJ1ZSkge1xuXHRcdGlkXG4gICAgc25hcHNob3RzOiBzdGF0c0J5QWdlKHNlY29uZHM6ICRzdGF0c0FnZSkge1xuICAgICAgdmlld3NcbiAgICAgIGxpa2VzXG4gICAgICBkaXNsaWtlc1xuICAgICAgZmF2b3JpdGVzXG4gICAgICBjb21tZW50c1xuICAgIH1cblx0XHQuLi5WaWRlb192aWRlb1xuXHR9XG5gKVxuIl19