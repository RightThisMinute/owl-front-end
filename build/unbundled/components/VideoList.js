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
        const videos = sorted.map(vid => {
            return (React.createElement(Video_1.default, { key: vid.video.id, video: vid.video }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9MaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlkZW9MaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsK0JBQThCO0FBQzlCLHFDQUFvQztBQUNwQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFBO0FBRWxELG1DQUEyQztBQUUzQyx3REFBcUQ7QUFPckQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ2IsNkJBQWdCLENBQUE7SUFDaEIsc0NBQXlCLENBQUE7SUFDekIsbUNBQXNCLENBQUE7QUFDdkIsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLGFBR0o7QUFIRCxXQUFLLGFBQWE7SUFDakIsa0NBQWlCLENBQUE7SUFDakIsb0NBQW1CLENBQUE7QUFDcEIsQ0FBQyxFQUhJLGFBQWEsS0FBYixhQUFhLFFBR2pCO0FBT0QsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBcUI7SUFFbEQsTUFBTTtRQUNMLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQzdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDbEMsTUFBTSxHQUFHLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUVoQyxNQUFNLFVBQVUsR0FBRyxLQUFLLElBQUksSUFBSTtrQkFDN0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUztvQkFDM0QsS0FBSyxDQUFDLFFBQVEsQ0FBQztxQkFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztrQkFDOUMsQ0FBQyxDQUFBO1lBQ0osTUFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLElBQUk7a0JBQ3pCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDO3FCQUNqRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztrQkFDOUMsQ0FBQyxDQUFBO1lBRUosTUFBTSxNQUFNLEdBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQTtZQUNyQyxNQUFNLEtBQUssR0FBSyxRQUFRLEdBQUcsVUFBVSxDQUFBO1lBRXJDLE1BQU0sQ0FBQztnQkFDTixLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsTUFBTSxHQUFHLFNBQUEsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztnQkFDNUIsTUFBTTthQUNOLENBQUE7UUFDRixDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSTtZQUNyQyxNQUFNLEVBQUUsS0FBSyxHQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxHQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsR0FDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO1lBRXhCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLGFBQWEsQ0FBQyxVQUFVO2tCQUNsRCxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUU5Qix5RUFBeUU7WUFDekUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQU0sTUFBTSxDQUFDLENBQ3pDLG9CQUFDLGVBQUssSUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUksQ0FDOUMsQ0FBQTtRQUFBLENBQUMsQ0FBQyxDQUFBO1FBRUgsTUFBTSxDQUFDLENBQ04saUNBQVMsU0FBUyxFQUFDLFlBQVksSUFDN0IsTUFBTSxDQUNFLENBQ1YsQ0FBQTtJQUNGLENBQUM7Q0FFRDtBQUdELGtCQUFlLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUE7Ozs7Ozs7Ozs7OztDQVl4RCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBmaXJzdCA9IHJlcXVpcmUoJ2xvZGFzaC9maXJzdCcpXG5pbXBvcnQgbGFzdCA9IHJlcXVpcmUoJ2xvZGFzaC9sYXN0JylcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUmVsYXkgZnJvbSAncmVhY3QtcmVsYXknXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSBSZWxheVxuXG5pbXBvcnQgVmlkZW8sIHsgVmlkZW9Qcm9wcyB9IGZyb20gJy4vVmlkZW8nXG5cbmltcG9ydCAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlkZW9MaXN0L3N0eWxlLnBjc3MnXG5cblxuaW50ZXJmYWNlIFZpZGVvUHJvcHMyIGV4dGVuZHMgVmlkZW9Qcm9wcyB7XG5cdGlkLFxufVxuXG5lbnVtIFNvcnRGaWVsZCB7XG5cdFRoZU93bCA9ICdzY29yZScsXG5cdFBlcmNlbnRDaGFuZ2UgPSAncGVyY2VudCcsXG5cdENoYW5nZUNvdW50ID0gJ2NoYW5nZScsXG59XG5cbmVudW0gU29ydERpcmVjdGlvbiB7XG5cdEFzY2VuZGluZyA9ICdhc2MnLFxuXHREZXNjZW5kaW5nID0gJ2Rlc2MnLFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRhY3RpdmVWaWRlb3M6IFZpZGVvUHJvcHMyW11cblx0c29ydD86IHsgZmllbGQ6IFNvcnRGaWVsZCwgZGlyZWN0aW9uPzogU29ydERpcmVjdGlvbiB9XG59XG5cbmNsYXNzIFZpZGVvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHNjb3JlZCA9IHRoaXMucHJvcHMuYWN0aXZlVmlkZW9zLm1hcCh2aWQgPT4ge1xuXHRcdFx0Y29uc3Qgc3RhcnQgPSBmaXJzdCh2aWQuc25hcHNob3RzKVxuXHRcdFx0Y29uc3QgZW5kICA9IGxhc3QodmlkLnNuYXBzaG90cylcblxuXHRcdFx0Y29uc3Qgc3RhcnRDb3VudCA9IHN0YXJ0ICE9IG51bGxcblx0XHRcdFx0PyBbc3RhcnQudmlld3MsIHN0YXJ0Lmxpa2VzLCBzdGFydC5kaXNsaWtlcywgc3RhcnQuZmF2b3JpdGVzLFxuXHRcdFx0XHRcdHN0YXJ0LmNvbW1lbnRzXVxuXHRcdFx0XHRcdC5tYXAoTnVtYmVyKS5yZWR1Y2UoKHN1bSwgbnVtKSA9PiBzdW0gKyBudW0sIDApXG5cdFx0XHRcdDogMFxuXHRcdFx0Y29uc3QgZW5kQ291bnQgPSBlbmQgIT0gbnVsbFxuXHRcdFx0XHQ/IFtlbmQudmlld3MsIGVuZC5saWtlcywgZW5kLmRpc2xpa2VzLCBlbmQuZmF2b3JpdGVzLCBlbmQuY29tbWVudHNdXG5cdFx0XHRcdFx0Lm1hcChOdW1iZXIpLnJlZHVjZSgoc3VtLCBudW0pID0+IHN1bSArIG51bSwgMClcblx0XHRcdFx0OiAwXG5cblx0XHRcdGNvbnN0IGNoYW5nZSAgPSBlbmRDb3VudCAtIHN0YXJ0Q291bnRcblx0XHRcdGNvbnN0IHJhdGlvICAgPSBlbmRDb3VudCAvIHN0YXJ0Q291bnRcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmlkZW86IHZpZCxcblx0XHRcdFx0c2NvcmU6IGNoYW5nZSAqIChyYXRpby0xKSoqMixcblx0XHRcdFx0cGVyY2VudDogKHJhdGlvICogMTAwKSAtIDEwMCxcblx0XHRcdFx0Y2hhbmdlLFxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRjb25zdCBzb3J0ZWQgPSBzY29yZWQuc29ydCgodmlkMSwgdmlkMikgPT4ge1xuXHRcdFx0Y29uc3QgeyBmaWVsZD1Tb3J0RmllbGQuVGhlT3dsLCBkaXJlY3Rpb249U29ydERpcmVjdGlvbi5EZXNjZW5kaW5nIH1cblx0XHRcdFx0PSB0aGlzLnByb3BzLnNvcnQgfHwge31cblxuXHRcdFx0Y29uc3QgW2EsIGJdID0gZGlyZWN0aW9uID09PSBTb3J0RGlyZWN0aW9uLkRlc2NlbmRpbmdcblx0XHRcdFx0PyBbdmlkMiwgdmlkMV0gOiBbdmlkMSwgdmlkMl1cblxuXHRcdFx0Ly8gRmllbGQgdmFsdWVzIGNhbiBiZSBOYU4uIFByZXZlbnRzIGl0ZW1zIHdpdGhvdXQgc3RhdHMgc29ydGluZyB3ZWlyZGx5LlxuXHRcdFx0cmV0dXJuIChhW2ZpZWxkXSB8fCAwKSAtIChiW2ZpZWxkXSB8fCAwKVxuXHRcdH0pXG5cblx0XHRjb25zdCB2aWRlb3MgPSBzb3J0ZWQubWFwKHZpZCA9PiB7IHJldHVybiAoXG5cdFx0XHQ8VmlkZW8ga2V5PXt2aWQudmlkZW8uaWR9IHZpZGVvPXt2aWQudmlkZW99IC8+XG5cdFx0KX0pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidmlkZW8tbGlzdFwiPlxuXHRcdFx0XHR7dmlkZW9zfVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdClcblx0fVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnRDb250YWluZXIoVmlkZW9MaXN0LCBncmFwaHFsYFxuXHRmcmFnbWVudCBWaWRlb0xpc3RfYWN0aXZlVmlkZW9zIG9uIFZpZGVvIEByZWxheShwbHVyYWw6IHRydWUpIHtcblx0XHRpZFxuICAgIHNuYXBzaG90czogc3RhdHNCeUFnZShzZWNvbmRzOiAkc3RhdHNBZ2UpIHtcbiAgICAgIHZpZXdzXG4gICAgICBsaWtlc1xuICAgICAgZGlzbGlrZXNcbiAgICAgIGZhdm9yaXRlc1xuICAgICAgY29tbWVudHNcbiAgICB9XG5cdFx0Li4uVmlkZW9fdmlkZW9cblx0fVxuYClcbiJdfQ==