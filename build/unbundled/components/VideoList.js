"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Link = require('found/lib/Link');
const first = require("lodash/first");
const last = require("lodash/last");
const React = require("react");
const Relay = require('react-relay');
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
        const { sorted } = this;
        const percents = sorted.map(vid => vid.percent);
        let chartScale = Math.max(0, ...percents) / 100 + 1;
        if (chartScale < 2)
            chartScale = 2;
        const snapshotCounts = sorted.map(vid => {
            return vid.video.snapshots.length;
        });
        const maxSnapshotCount = Math.max(0, ...snapshotCounts);
        const videos = sorted.map(vid => {
            return (React.createElement(Video_1.default, { key: vid.video.id, video: vid.video, chartScale: chartScale, chartDataPountCount: maxSnapshotCount }));
        });
        return (React.createElement("section", { className: "video-list" },
            React.createElement("nav", null,
                React.createElement("ul", null, this.sortLinks)),
            React.createElement("div", { className: "items" }, videos)));
    }
    get getParams() {
        const { search } = this.props.location;
        if (!search || search.length === 1)
            return {};
        return search
            .slice(1)
            .split('&')
            .reduce((accl, pair) => {
            const [key, value] = pair.split('=').map(decodeURIComponent);
            accl[key] = value;
            return accl;
        }, {});
    }
    get sort() {
        let { sortField: field, sortDirection: direction } = this.getParams;
        const fields = Object.keys(SortField).map(key => {
            return SortField[key];
        });
        const directions = Object.keys(SortDirection).map(key => {
            return SortDirection[key];
        });
        if (!field || fields.indexOf(field) === -1)
            field = SortField.TheOwl;
        if (!direction || directions.indexOf(direction) === -1)
            direction = SortDirection.Descending;
        return { field: field, direction: direction };
    }
    get sortLinks() {
        const sorts = {
            [SortField.TheOwl]: 'As the Owl Flies',
            [SortField.ChangeCount]: 'Count',
            [SortField.PercentChange]: 'Percent',
        };
        return Object.keys(sorts).map(field => {
            const isActive = field === this.sort.field;
            const classes = [];
            if (isActive)
                classes.push('active');
            const sortDirection = isActive && this.sort.direction === SortDirection.Descending
                ? SortDirection.Ascending : SortDirection.Descending;
            classes.push(sortDirection);
            const params = { sortField: field, sortDirection };
            const search = Object.keys(params).map(key => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            });
            return (React.createElement("li", { key: field, className: classes.join(' ') },
                React.createElement(Link, { to: {
                        pathname: this.props.location.pathname,
                        search: '?' + search.join('&')
                    } }, sorts[field])));
        });
    }
    get scored() {
        return this.props.activeVideos.map(vid => {
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
            const ratio = (endCount / startCount) || 0;
            return {
                video: vid,
                score: change * Math.pow((ratio - 1), 2),
                percent: (ratio * 100) - 100,
                change,
            };
        });
    }
    get sorted() {
        return this.scored.sort((vid1, vid2) => {
            const { field, direction } = this.sort;
            const [a, b] = direction === SortDirection.Descending
                ? [vid2, vid1] : [vid1, vid2];
            // Field values can be NaN. Prevents items without stats sorting weirdly.
            return (a[field] || 0) - (b[field] || 0);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9MaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlkZW9MaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3RDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsK0JBQThCO0FBQzlCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNwQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFBO0FBRWxELG1DQUEyQztBQUUzQyx3REFBcUQ7QUFPckQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ2IsNkJBQWdCLENBQUE7SUFDaEIsc0NBQXlCLENBQUE7SUFDekIsbUNBQXNCLENBQUE7QUFDdkIsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLGFBR0o7QUFIRCxXQUFLLGFBQWE7SUFDakIsa0NBQWlCLENBQUE7SUFDakIsb0NBQW1CLENBQUE7QUFDcEIsQ0FBQyxFQUhJLGFBQWEsS0FBYixhQUFhLFFBR2pCO0FBZ0JELGVBQWdCLFNBQVEsS0FBSyxDQUFDLFNBQXFCO0lBRWxELE1BQU07UUFDTCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFBO1FBRXZCLE1BQU0sUUFBUSxHQUFhLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDbkQsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNsQixVQUFVLEdBQUcsQ0FBQyxDQUFBO1FBRWYsTUFBTSxjQUFjLEdBQUcs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TUFBTSxLQUFLLEdBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRTVDLE1BQU0sQ0FBQztnQkFDTixLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsTUFBTSxHQUFHLFNBQUEsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztnQkFDNUIsTUFBTTthQUNOLENBQUE7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxJQUFZLE1BQU07UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUk7WUFDbEMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBRXRDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxLQUFLLGFBQWEsQ0FBQyxVQUFVO2tCQUNsRCxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUU5Qix5RUFBeUU7WUFDekUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUVEO0FBR0Qsa0JBQWUsdUJBQXVCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQTs7Ozs7Ozs7Ozs7O0NBWXhELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgTGluayA9IHJlcXVpcmUoJ2ZvdW5kL2xpYi9MaW5rJylcbmltcG9ydCBmaXJzdCA9IHJlcXVpcmUoJ2xvZGFzaC9maXJzdCcpXG5pbXBvcnQgbGFzdCA9IHJlcXVpcmUoJ2xvZGFzaC9sYXN0JylcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgUmVsYXkgPSByZXF1aXJlKCdyZWFjdC1yZWxheScpXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSBSZWxheVxuXG5pbXBvcnQgVmlkZW8sIHsgVmlkZW9Qcm9wcyB9IGZyb20gJy4vVmlkZW8nXG5cbmltcG9ydCAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlkZW9MaXN0L3N0eWxlLnBjc3MnXG5cblxuaW50ZXJmYWNlIFZpZGVvUHJvcHMyIGV4dGVuZHMgVmlkZW9Qcm9wcyB7XG5cdGlkLFxufVxuXG5lbnVtIFNvcnRGaWVsZCB7XG5cdFRoZU93bCA9ICdzY29yZScsXG5cdFBlcmNlbnRDaGFuZ2UgPSAncGVyY2VudCcsXG5cdENoYW5nZUNvdW50ID0gJ2NoYW5nZScsXG59XG5cbmVudW0gU29ydERpcmVjdGlvbiB7XG5cdEFzY2VuZGluZyA9ICdhc2MnLFxuXHREZXNjZW5kaW5nID0gJ2Rlc2MnLFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRhY3RpdmVWaWRlb3M6IFZpZGVvUHJvcHMyW11cblx0c29ydD86IHsgZmllbGQ6IFNvcnRGaWVsZCwgZGlyZWN0aW9uPzogU29ydERpcmVjdGlvbiB9XG5cdGxvY2F0aW9uOiB7XG5cdFx0YWN0aW9uOiBzdHJpbmcsXG5cdFx0ZGVsdGE/OiBudW1iZXIsXG5cdFx0aGFzaDogc3RyaW5nLFxuXHRcdGluZGV4PzogbnVtYmVyLFxuXHRcdGtleT86IHN0cmluZyxcblx0XHRwYXRobmFtZTogc3RyaW5nLFxuXHRcdHNlYXJjaDogc3RyaW5nLFxuXHR9XG59XG5cbmNsYXNzIFZpZGVvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc29ydGVkIH0gPSB0aGlzXG5cblx0XHRjb25zdCBwZXJjZW50czogbnVtYmVyW10gPSBzb3J0ZWQubWFwKHZpZCA9PiB2aWQucGVyY2VudClcblx0XHRsZXQgY2hhcnRTY2FsZSA9IE1hdGgubWF4KDAsIC4uLnBlcmNlbnRzKSAvIDEwMCArIDFcblx0XHRpZiAoY2hhcnRTY2FsZSA8IDIpXG5cdFx0XHRjaGFydFNjYWxlID0gMlxuXG5cdFx0Y29uc3Qgc25hcHNob3RDb3VudHMgPSBzb3J0ZWQubWFwKHZpZCA9PiB7XG5cdFx0XHRyZXR1cm4gdmlkLnZpZGVvLnNuYXBzaG90cy5sZW5ndGhcblx0XHR9KVxuXHRcdGNvbnN0IG1heFNuYXBzaG90Q291bnQgPSBNYXRoLm1heCgwLCAuLi5zbmFwc2hvdENvdW50cylcblxuXHRcdGNvbnN0IHZpZGVvcyA9IHNvcnRlZC5tYXAodmlkID0+IHsgcmV0dXJuIChcblx0XHRcdDxWaWRlbyBrZXk9e3ZpZC52aWRlby5pZH0gdmlkZW89e3ZpZC52aWRlb31cblx0XHRcdCAgICAgICBjaGFydFNjYWxlPXtjaGFydFNjYWxlfSBjaGFydERhdGFQb3VudENvdW50PXttYXhTbmFwc2hvdENvdW50fSAvPlxuXHRcdCl9KVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvLWxpc3RcIj5cblx0XHRcdFx0PG5hdj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7dGhpcy5zb3J0TGlua3N9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cblx0XHRcdFx0XHR7dmlkZW9zfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdH1cblxuXHRwcml2YXRlIGdldCBnZXRQYXJhbXMoKToge1trZXk6IHN0cmluZ106IHN0cmluZ30ge1xuXHRcdGNvbnN0IHsgc2VhcmNoIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG5cblx0XHRpZiAoIXNlYXJjaCB8fCBzZWFyY2gubGVuZ3RoID09PSAxKVxuXHRcdFx0cmV0dXJuIHt9XG5cblx0XHRyZXR1cm4gc2VhcmNoXG5cdFx0XHQuc2xpY2UoMSlcblx0XHRcdC5zcGxpdCgnJicpXG5cdFx0XHQucmVkdWNlKChhY2NsLCBwYWlyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IFtrZXksIHZhbHVlXSA9IHBhaXIuc3BsaXQoJz0nKS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KVxuXHRcdFx0XHRhY2NsW2tleV0gPSB2YWx1ZVxuXHRcdFx0XHRyZXR1cm4gYWNjbFxuXHRcdFx0fSwge30pXG5cdH1cblxuXHRwcml2YXRlIGdldCBzb3J0KCk6IHsgZmllbGQ6IFNvcnRGaWVsZCwgZGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uIH0ge1xuXHRcdGxldCB7IHNvcnRGaWVsZDogZmllbGQsIHNvcnREaXJlY3Rpb246IGRpcmVjdGlvbiB9ID0gdGhpcy5nZXRQYXJhbXNcblxuXHRcdGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKFNvcnRGaWVsZCkubWFwKGtleSA9PiB7XG5cdFx0XHRyZXR1cm4gU29ydEZpZWxkW2tleV1cblx0XHR9KVxuXHRcdGNvbnN0IGRpcmVjdGlvbnMgPSBPYmplY3Qua2V5cyhTb3J0RGlyZWN0aW9uKS5tYXAoa2V5ID0+IHtcblx0XHRcdHJldHVybiBTb3J0RGlyZWN0aW9uW2tleV1cblx0XHR9KVxuXG5cdFx0aWYgKCFmaWVsZCB8fCBmaWVsZHMuaW5kZXhPZihmaWVsZCkgPT09IC0xKVxuXHRcdFx0ZmllbGQgPSBTb3J0RmllbGQuVGhlT3dsXG5cdFx0aWYgKCFkaXJlY3Rpb24gfHwgZGlyZWN0aW9ucy5pbmRleE9mKGRpcmVjdGlvbikgPT09IC0xKVxuXHRcdFx0ZGlyZWN0aW9uID0gU29ydERpcmVjdGlvbi5EZXNjZW5kaW5nXG5cblx0XHRyZXR1cm4geyBmaWVsZDogZmllbGQgYXMgU29ydEZpZWxkLCBkaXJlY3Rpb246IGRpcmVjdGlvbiBhcyBTb3J0RGlyZWN0aW9uIH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0IHNvcnRMaW5rcygpIHtcblx0XHRjb25zdCBzb3J0cyA9IHtcblx0XHRcdFtTb3J0RmllbGQuVGhlT3dsXTogJ0FzIHRoZSBPd2wgRmxpZXMnLFxuXHRcdFx0W1NvcnRGaWVsZC5DaGFuZ2VDb3VudF06ICdDb3VudCcsXG5cdFx0XHRbU29ydEZpZWxkLlBlcmNlbnRDaGFuZ2VdOiAnUGVyY2VudCcsXG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHNvcnRzKS5tYXAoZmllbGQgPT4ge1xuXHRcdFx0Y29uc3QgaXNBY3RpdmUgPSBmaWVsZCA9PT0gdGhpcy5zb3J0LmZpZWxkXG5cdFx0XHRjb25zdCBjbGFzc2VzOiBzdHJpbmdbXSA9IFtdXG5cblx0XHRcdGlmIChpc0FjdGl2ZSlcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCdhY3RpdmUnKVxuXG5cdFx0XHRjb25zdCBzb3J0RGlyZWN0aW9uID1cblx0XHRcdFx0aXNBY3RpdmUgJiYgdGhpcy5zb3J0LmRpcmVjdGlvbiA9PT0gU29ydERpcmVjdGlvbi5EZXNjZW5kaW5nXG5cdFx0XHRcdD8gU29ydERpcmVjdGlvbi5Bc2NlbmRpbmcgOiBTb3J0RGlyZWN0aW9uLkRlc2NlbmRpbmdcblx0XHRcdGNsYXNzZXMucHVzaChzb3J0RGlyZWN0aW9uKVxuXG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7IHNvcnRGaWVsZDogZmllbGQsIHNvcnREaXJlY3Rpb24gfVxuXHRcdFx0Y29uc3Qgc2VhcmNoID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoa2V5ID0+IHtcblx0XHRcdFx0cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKVxuXHRcdFx0fSlcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGxpIGtleT17ZmllbGR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9PlxuXHRcdFx0XHRcdDxMaW5rIHRvPXt7XG5cdFx0XHRcdFx0XHRwYXRobmFtZTogdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSxcblx0XHRcdFx0XHRcdHNlYXJjaDogJz8nICsgc2VhcmNoLmpvaW4oJyYnKVxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0e3NvcnRzW2ZpZWxkXX1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdHByaXZhdGUgZ2V0IHNjb3JlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5hY3RpdmVWaWRlb3MubWFwKHZpZCA9PiB7XG5cdFx0XHRjb25zdCBzdGFydCA9IGZpcnN0KHZpZC5zbmFwc2hvdHMpXG5cdFx0XHRjb25zdCBlbmQgID0gbGFzdCh2aWQuc25hcHNob3RzKVxuXG5cdFx0XHRjb25zdCBzdGFydENvdW50ID0gc3RhcnQgIT0gbnVsbFxuXHRcdFx0XHQ/IFtzdGFydC52aWV3cywgc3RhcnQubGlrZXMsIHN0YXJ0LmRpc2xpa2VzLCBzdGFydC5mYXZvcml0ZXMsXG5cdFx0XHRcdFx0c3RhcnQuY29tbWVudHNdXG5cdFx0XHRcdFx0Lm1hcChOdW1iZXIpLnJlZHVjZSgoc3VtLCBudW0pID0+IHN1bSArIG51bSwgMClcblx0XHRcdFx0OiAwXG5cdFx0XHRjb25zdCBlbmRDb3VudCA9IGVuZCAhPSBudWxsXG5cdFx0XHRcdD8gW2VuZC52aWV3cywgZW5kLmxpa2VzLCBlbmQuZGlzbGlrZXMsIGVuZC5mYXZvcml0ZXMsIGVuZC5jb21tZW50c11cblx0XHRcdFx0XHQubWFwKE51bWJlcikucmVkdWNlKChzdW0sIG51bSkgPT4gc3VtICsgbnVtLCAwKVxuXHRcdFx0XHQ6IDBcblxuXHRcdFx0Y29uc3QgY2hhbmdlICA9IGVuZENvdW50IC0gc3RhcnRDb3VudFxuXHRcdFx0Y29uc3QgcmF0aW8gICA9IChlbmRDb3VudCAvIHN0YXJ0Q291bnQpIHx8IDBcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmlkZW86IHZpZCxcblx0XHRcdFx0c2NvcmU6IGNoYW5nZSAqIChyYXRpby0xKSoqMixcblx0XHRcdFx0cGVyY2VudDogKHJhdGlvICogMTAwKSAtIDEwMCxcblx0XHRcdFx0Y2hhbmdlLFxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIGdldCBzb3J0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2NvcmVkLnNvcnQoKHZpZDEsIHZpZDIpID0+IHtcblx0XHRcdGNvbnN0IHsgZmllbGQsIGRpcmVjdGlvbiB9ID0gdGhpcy5zb3J0XG5cblx0XHRcdGNvbnN0IFthLCBiXSA9IGRpcmVjdGlvbiA9PT0gU29ydERpcmVjdGlvbi5EZXNjZW5kaW5nXG5cdFx0XHRcdD8gW3ZpZDIsIHZpZDFdIDogW3ZpZDEsIHZpZDJdXG5cblx0XHRcdC8vIEZpZWxkIHZhbHVlcyBjYW4gYmUgTmFOLiBQcmV2ZW50cyBpdGVtcyB3aXRob3V0IHN0YXRzIHNvcnRpbmcgd2VpcmRseS5cblx0XHRcdHJldHVybiAoYVtmaWVsZF0gfHwgMCkgLSAoYltmaWVsZF0gfHwgMClcblx0XHR9KVxuXHR9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudENvbnRhaW5lcihWaWRlb0xpc3QsIGdyYXBocWxgXG5cdGZyYWdtZW50IFZpZGVvTGlzdF9hY3RpdmVWaWRlb3Mgb24gVmlkZW8gQHJlbGF5KHBsdXJhbDogdHJ1ZSkge1xuXHRcdGlkXG4gICAgc25hcHNob3RzOiBzdGF0c0J5QWdlKHNlY29uZHM6ICRzdGF0c0FnZSkge1xuICAgICAgdmlld3NcbiAgICAgIGxpa2VzXG4gICAgICBkaXNsaWtlc1xuICAgICAgZmF2b3JpdGVzXG4gICAgICBjb21tZW50c1xuICAgIH1cblx0XHQuLi5WaWRlb192aWRlb1xuXHR9XG5gKVxuIl19