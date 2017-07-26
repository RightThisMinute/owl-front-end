"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// Typescript wont let use just grab individual lodash modules using a
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
                React.createElement("span", { className: "separator" }, ">"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNDaGFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TdGF0c0NoYW5nZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFFOUIsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSxrQkFBa0I7QUFDbEIsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUVwQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBY25FLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxTQUFnQztJQUUvRCxNQUFNO1FBQ0wsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDekMsTUFBTSxHQUFHLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdkMsTUFBTSxVQUFVLEdBQUcsS0FBSyxJQUFJLElBQUk7Y0FDN0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQztpQkFDZixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztjQUM5QyxDQUFDLENBQUE7UUFDSixNQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksSUFBSTtjQUN6QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQztpQkFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Y0FDOUMsQ0FBQyxDQUFBO1FBRUosTUFBTSxNQUFNLEdBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQTtRQUNyQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxNQUFNLElBQUksR0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUNyRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUE7UUFFNUUsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFBO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixTQUFTLEVBQUUsQ0FBQTtRQUU3QyxNQUFNLENBQUMsQ0FDTiw2QkFBSyxTQUFTLEVBQUUsU0FBUztZQUN4Qiw4QkFBTSxTQUFTLEVBQUMsV0FBVztnQkFDMUIsOEJBQU0sU0FBUyxFQUFDLE9BQU8sSUFBRSxDQUFDLENBQUMsVUFBb0IsQ0FBQyxDQUFRO2dCQUN4RCw4QkFBTSxTQUFTLEVBQUMsV0FBVyxRQUFZO2dCQUN2Qyw4QkFBTSxTQUFTLEVBQUMsS0FBSyxJQUFFLENBQUMsQ0FBQyxRQUFrQixDQUFDLENBQVEsQ0FDOUM7WUFDUCw4QkFBTSxTQUFTLEVBQUMsTUFBTTtnQkFDckIsOEJBQU0sU0FBUyxFQUFDLE1BQU0sSUFBRSxJQUFJLENBQVE7Z0JBQ3BDLDhCQUFNLFNBQVMsRUFBQyxPQUFPLElBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFRO2dCQUN4Qyw4QkFBTSxTQUFTLEVBQUMsV0FBVyxRQUFTO2dCQUNwQyw4QkFBTSxTQUFTLEVBQUMsU0FBUztvQkFBQyxnQ0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQU07d0JBQVEsQ0FDakQsQ0FDRixDQUNOLENBQUE7SUFDRixDQUFDO0NBQ0Q7QUFFRCxzQkFBc0IsTUFBYztJQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDdkIsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtTQUM5QixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDdkMsQ0FBQztBQUVELGtCQUFlLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUE7Ozs7Ozs7O0NBUTFELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vIFR5cGVzY3JpcHQgd29udCBsZXQgdXNlIGp1c3QgZ3JhYiBpbmRpdmlkdWFsIGxvZGFzaCBtb2R1bGVzIHVzaW5nIGFcbi8vIG5vcm1hbCBgaW1wb3J0IGZpcnN0IGZyb20gJ2xvZGFzaC9maXJzdCdgIHN0YXRlbWVudCwgYnV0IHRoaXMgd29ya3Ncbi8vIHRvIGF2b2lkIGJsb2F0LlxuaW1wb3J0IGZpcnN0ID0gcmVxdWlyZSgnbG9kYXNoL2ZpcnN0JylcbmltcG9ydCBsYXN0ID0gcmVxdWlyZSgnbG9kYXNoL2xhc3QnKVxuXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSByZXF1aXJlKCdyZWFjdC1yZWxheScpXG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRzQ2hhbmdlUHJvcHMge1xuXHRzbmFwc2hvdHM6IHtcblx0XHR2aWV3czogc3RyaW5nLFxuXHRcdGxpa2VzOiBzdHJpbmcsXG5cdFx0ZGlzbGlrZXM6IHN0cmluZyxcblx0XHRmYXZvcml0ZXM6IHN0cmluZyxcblx0XHRjb21tZW50czogc3RyaW5nLFxuXHR9W11cbn1cblxuY2xhc3MgU3RhdHNDaGFuZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3RhdHNDaGFuZ2VQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHN0YXJ0ID0gZmlyc3QodGhpcy5wcm9wcy5zbmFwc2hvdHMpXG5cdFx0Y29uc3QgZW5kICA9IGxhc3QodGhpcy5wcm9wcy5zbmFwc2hvdHMpXG5cblx0XHRjb25zdCBzdGFydENvdW50ID0gc3RhcnQgIT0gbnVsbFxuXHRcdFx0PyBbc3RhcnQudmlld3MsIHN0YXJ0Lmxpa2VzLCBzdGFydC5kaXNsaWtlcywgc3RhcnQuZmF2b3JpdGVzLFxuXHRcdFx0XHQgc3RhcnQuY29tbWVudHNdXG5cdFx0XHRcdC5tYXAoTnVtYmVyKS5yZWR1Y2UoKHN1bSwgbnVtKSA9PiBzdW0gKyBudW0sIDApXG5cdFx0XHQ6IDBcblx0XHRjb25zdCBlbmRDb3VudCA9IGVuZCAhPSBudWxsXG5cdFx0XHQ/IFtlbmQudmlld3MsIGVuZC5saWtlcywgZW5kLmRpc2xpa2VzLCBlbmQuZmF2b3JpdGVzLCBlbmQuY29tbWVudHNdXG5cdFx0XHRcdC5tYXAoTnVtYmVyKS5yZWR1Y2UoKHN1bSwgbnVtKSA9PiBzdW0gKyBudW0sIDApXG5cdFx0XHQ6IDBcblxuXHRcdGNvbnN0IGNoYW5nZSAgPSBlbmRDb3VudCAtIHN0YXJ0Q291bnRcblx0XHRjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgoZW5kQ291bnQgLyBzdGFydENvdW50ICogMTAwKSAtIDEwMClcblx0XHRjb25zdCBkaWZmICAgID0gTWF0aC5hYnMoY2hhbmdlKVxuXHRcdGNvbnN0IHNpZ24gPSBjaGFuZ2UgPiAwID8gJysnIDogY2hhbmdlIDwgMCA/ICctJyA6ICcnXG5cdFx0Y29uc3Qgc2lnbkNsYXNzID0gY2hhbmdlID4gMCA/ICdwb3NpdGl2ZScgOiBjaGFuZ2UgPCAwID8gJ25lZ2F0aXZlJyA6ICdub25lJ1xuXG5cdFx0Y29uc3QgZiA9IGZvcm1hdE51bWJlclxuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IGBzdGF0cy1jaGFuZ2UgJHtzaWduQ2xhc3N9YFxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzdGFydC1lbmRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzdGFydFwiPntmKHN0YXJ0Q291bnQgYXMgbnVtYmVyKX08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+Jmd0Ozwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJlbmRcIj57ZihlbmRDb3VudCBhcyBudW1iZXIpfTwvc3Bhbj5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkaWZmXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2lnblwiPntzaWdufTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPntmKGRpZmYpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4vPC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBlcmNlbnRcIj48ZW0+e2YocGVyY2VudCl9PC9lbT4lPC9zcGFuPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlcjogbnVtYmVyKTogc3RyaW5nIHtcblx0cmV0dXJuIE1hdGgucm91bmQobnVtYmVyKVxuXHRcdC50b1N0cmluZygpLnNwbGl0KCcnKS5yZXZlcnNlKClcblx0XHQubWFwKChudW0sIG54KSA9PiAobngrMSkgJSAzID09PSAwID8gJywnK251bSA6IG51bSlcblx0XHQucmV2ZXJzZSgpLmpvaW4oJycpLnJlcGxhY2UoL14sLywgJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyKFN0YXRzQ2hhbmdlLCBncmFwaHFsYFxuXHRmcmFnbWVudCBTdGF0c0NoYW5nZV9zbmFwc2hvdHMgb24gVmlkZW9TdGF0cyBAcmVsYXkocGx1cmFsOiB0cnVlKSB7XG5cdFx0dmlld3Ncblx0XHRsaWtlc1xuXHRcdGRpc2xpa2VzXG5cdFx0ZmF2b3JpdGVzXG5cdFx0Y29tbWVudHNcblx0fVxuYClcbiJdfQ==