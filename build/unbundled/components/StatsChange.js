"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// Typescript wont let us just grab individual lodash modules using a
// normal `import first from 'lodash/first'` statement, but this works
// to avoid bloat.
const first = require("lodash/first");
const last = require("lodash/last");
const { createFragmentContainer, graphql } = require('react-relay');
class StatsChange extends React.Component {
    render() {
        const start = first(this.props.snapshots);
        const end = last(this.props.snapshots);
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
        const percent = Math.round((endCount / startCount * 100) - 100);
        const diff = Math.abs(change);
        const sign = change > 0 ? '+' : change < 0 ? '-' : '';
        const signClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'none';
        const f = formatNumber;
        const className = `stats-change ${signClass}`;
        return (React.createElement("div", { className: className },
            React.createElement("span", { className: "start-end" },
                React.createElement("span", { className: "start" }, f(startCount)),
                React.createElement("span", { className: "separator" }, "\u25BA"),
                React.createElement("span", { className: "end" }, f(endCount))),
            React.createElement("span", { className: "diff" },
                React.createElement("span", { className: "sign" }, sign),
                React.createElement("span", { className: "count" }, f(diff)),
                React.createElement("span", { className: "separator" }, "/"),
                React.createElement("span", { className: "percent" },
                    React.createElement("em", null, f(percent)),
                    "%"))));
    }
}
function formatNumber(number) {
    return Math.round(number)
        .toString().split('').reverse()
        .map((num, nx) => (nx + 1) % 3 === 0 ? ',' + num : num)
        .reverse().join('').replace(/^,/, '');
}
exports.default = createFragmentContainer(StatsChange, graphql `
	fragment StatsChange_snapshots on VideoStats @relay(plural: true) {
		views
		likes
		dislikes
		favorites
		comments
	}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNDaGFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TdGF0c0NoYW5nZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFFOUIscUVBQXFFO0FBQ3JFLHNFQUFzRTtBQUN0RSxrQkFBa0I7QUFDbEIsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUVwQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBY25FLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxTQUFnQztJQUUvRCxNQUFNO1FBQ0wsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDekMsTUFBTSxHQUFHLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdkMsTUFBTSxVQUFVLEdBQUcsS0FBSyxJQUFJLElBQUk7Y0FDN0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQztpQkFDZixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztjQUM5QyxDQUFDLENBQUE7UUFDSixNQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksSUFBSTtjQUN6QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQztpQkFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Y0FDOUMsQ0FBQyxDQUFBO1FBRUosTUFBTSxNQUFNLEdBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQTtRQUNyQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxNQUFNLElBQUksR0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUNyRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUE7UUFFNUUsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFBO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixTQUFTLEVBQUUsQ0FBQTtRQUU3QyxNQUFNLENBQUMsQ0FDTiw2QkFBSyxTQUFTLEVBQUUsU0FBUztZQUN4Qiw4QkFBTSxTQUFTLEVBQUMsV0FBVztnQkFDMUIsOEJBQU0sU0FBUyxFQUFDLE9BQU8sSUFBRSxDQUFDLENBQUMsVUFBb0IsQ0FBQyxDQUFRO2dCQUN4RCw4QkFBTSxTQUFTLEVBQUMsV0FBVyxhQUFTO2dCQUNwQyw4QkFBTSxTQUFTLEVBQUMsS0FBSyxJQUFFLENBQUMsQ0FBQyxRQUFrQixDQUFDLENBQVEsQ0FDOUM7WUFDUCw4QkFBTSxTQUFTLEVBQUMsTUFBTTtnQkFDckIsOEJBQU0sU0FBUyxFQUFDLE1BQU0sSUFBRSxJQUFJLENBQVE7Z0JBQ3BDLDhCQUFNLFNBQVMsRUFBQyxPQUFPLElBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFRO2dCQUN4Qyw4QkFBTSxTQUFTLEVBQUMsV0FBVyxRQUFTO2dCQUNwQyw4QkFBTSxTQUFTLEVBQUMsU0FBUztvQkFBQyxnQ0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQU07d0JBQVEsQ0FDakQsQ0FDRixDQUNOLENBQUE7SUFDRixDQUFDO0NBQ0Q7QUFFRCxzQkFBc0IsTUFBYztJQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDdkIsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtTQUM5QixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDdkMsQ0FBQztBQUVELGtCQUFlLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUE7Ozs7Ozs7O0NBUTFELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vIFR5cGVzY3JpcHQgd29udCBsZXQgdXMganVzdCBncmFiIGluZGl2aWR1YWwgbG9kYXNoIG1vZHVsZXMgdXNpbmcgYVxuLy8gbm9ybWFsIGBpbXBvcnQgZmlyc3QgZnJvbSAnbG9kYXNoL2ZpcnN0J2Agc3RhdGVtZW50LCBidXQgdGhpcyB3b3Jrc1xuLy8gdG8gYXZvaWQgYmxvYXQuXG5pbXBvcnQgZmlyc3QgPSByZXF1aXJlKCdsb2Rhc2gvZmlyc3QnKVxuaW1wb3J0IGxhc3QgPSByZXF1aXJlKCdsb2Rhc2gvbGFzdCcpXG5cbmNvbnN0IHsgY3JlYXRlRnJhZ21lbnRDb250YWluZXIsIGdyYXBocWwgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlbGF5JylcblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHNDaGFuZ2VQcm9wcyB7XG5cdHNuYXBzaG90czoge1xuXHRcdHZpZXdzOiBzdHJpbmcsXG5cdFx0bGlrZXM6IHN0cmluZyxcblx0XHRkaXNsaWtlczogc3RyaW5nLFxuXHRcdGZhdm9yaXRlczogc3RyaW5nLFxuXHRcdGNvbW1lbnRzOiBzdHJpbmcsXG5cdH1bXVxufVxuXG5jbGFzcyBTdGF0c0NoYW5nZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTdGF0c0NoYW5nZVByb3BzLCBhbnk+IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc3RhcnQgPSBmaXJzdCh0aGlzLnByb3BzLnNuYXBzaG90cylcblx0XHRjb25zdCBlbmQgID0gbGFzdCh0aGlzLnByb3BzLnNuYXBzaG90cylcblxuXHRcdGNvbnN0IHN0YXJ0Q291bnQgPSBzdGFydCAhPSBudWxsXG5cdFx0XHQ/IFtzdGFydC52aWV3cywgc3RhcnQubGlrZXMsIHN0YXJ0LmRpc2xpa2VzLCBzdGFydC5mYXZvcml0ZXMsXG5cdFx0XHRcdCBzdGFydC5jb21tZW50c11cblx0XHRcdFx0Lm1hcChOdW1iZXIpLnJlZHVjZSgoc3VtLCBudW0pID0+IHN1bSArIG51bSwgMClcblx0XHRcdDogMFxuXHRcdGNvbnN0IGVuZENvdW50ID0gZW5kICE9IG51bGxcblx0XHRcdD8gW2VuZC52aWV3cywgZW5kLmxpa2VzLCBlbmQuZGlzbGlrZXMsIGVuZC5mYXZvcml0ZXMsIGVuZC5jb21tZW50c11cblx0XHRcdFx0Lm1hcChOdW1iZXIpLnJlZHVjZSgoc3VtLCBudW0pID0+IHN1bSArIG51bSwgMClcblx0XHRcdDogMFxuXG5cdFx0Y29uc3QgY2hhbmdlICA9IGVuZENvdW50IC0gc3RhcnRDb3VudFxuXHRcdGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKChlbmRDb3VudCAvIHN0YXJ0Q291bnQgKiAxMDApIC0gMTAwKVxuXHRcdGNvbnN0IGRpZmYgICAgPSBNYXRoLmFicyhjaGFuZ2UpXG5cdFx0Y29uc3Qgc2lnbiA9IGNoYW5nZSA+IDAgPyAnKycgOiBjaGFuZ2UgPCAwID8gJy0nIDogJydcblx0XHRjb25zdCBzaWduQ2xhc3MgPSBjaGFuZ2UgPiAwID8gJ3Bvc2l0aXZlJyA6IGNoYW5nZSA8IDAgPyAnbmVnYXRpdmUnIDogJ25vbmUnXG5cblx0XHRjb25zdCBmID0gZm9ybWF0TnVtYmVyXG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gYHN0YXRzLWNoYW5nZSAke3NpZ25DbGFzc31gXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInN0YXJ0LWVuZFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInN0YXJ0XCI+e2Yoc3RhcnRDb3VudCBhcyBudW1iZXIpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj7ilro8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZW5kXCI+e2YoZW5kQ291bnQgYXMgbnVtYmVyKX08L3NwYW4+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGlmZlwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNpZ25cIj57c2lnbn08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57ZihkaWZmKX08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+Lzwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwZXJjZW50XCI+PGVtPntmKHBlcmNlbnQpfTwvZW0+JTwvc3Bhbj5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXI6IG51bWJlcik6IHN0cmluZyB7XG5cdHJldHVybiBNYXRoLnJvdW5kKG51bWJlcilcblx0XHQudG9TdHJpbmcoKS5zcGxpdCgnJykucmV2ZXJzZSgpXG5cdFx0Lm1hcCgobnVtLCBueCkgPT4gKG54KzEpICUgMyA9PT0gMCA/ICcsJytudW0gOiBudW0pXG5cdFx0LnJldmVyc2UoKS5qb2luKCcnKS5yZXBsYWNlKC9eLC8sICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudENvbnRhaW5lcihTdGF0c0NoYW5nZSwgZ3JhcGhxbGBcblx0ZnJhZ21lbnQgU3RhdHNDaGFuZ2Vfc25hcHNob3RzIG9uIFZpZGVvU3RhdHMgQHJlbGF5KHBsdXJhbDogdHJ1ZSkge1xuXHRcdHZpZXdzXG5cdFx0bGlrZXNcblx0XHRkaXNsaWtlc1xuXHRcdGZhdm9yaXRlc1xuXHRcdGNvbW1lbnRzXG5cdH1cbmApXG4iXX0=