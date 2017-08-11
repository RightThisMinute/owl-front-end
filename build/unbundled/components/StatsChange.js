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
        const percent = Math.round((endCount / startCount * 100) - 100) || 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNDaGFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TdGF0c0NoYW5nZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFFOUIscUVBQXFFO0FBQ3JFLHNFQUFzRTtBQUN0RSxrQkFBa0I7QUFDbEIsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUVwQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBY25FLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxTQUFnQztJQUUvRCxNQUFNO1FBQ0wsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDekMsTUFBTSxHQUFHLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdkMsTUFBTSxVQUFVLEdBQUcsS0FBSyxJQUFJLElBQUk7Y0FDN0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQztpQkFDZixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztjQUM5QyxDQUFDLENBQUE7UUFDSixNQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksSUFBSTtjQUN6QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQztpQkFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Y0FDOUMsQ0FBQyxDQUFBO1FBRUosTUFBTSxNQUFNLEdBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQTtRQUNyQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEUsTUFBTSxJQUFJLEdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoQyxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDckQsTUFBTSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFBO1FBRTVFLE1BQU0sQ0FBQyxHQUFHLFlBQVksQ0FBQTtRQUN0QixNQUFNLFNBQVMsR0FBRyxnQkFBZ0IsU0FBUyxFQUFFLENBQUE7UUFFN0MsTUFBTSxDQUFDLENBQ04sNkJBQUssU0FBUyxFQUFFLFNBQVM7WUFDeEIsOEJBQU0sU0FBUyxFQUFDLFdBQVc7Z0JBQzFCLDhCQUFNLFNBQVMsRUFBQyxPQUFPLElBQUUsQ0FBQyxDQUFDLFVBQW9CLENBQUMsQ0FBUTtnQkFDeEQsOEJBQU0sU0FBUyxFQUFDLFdBQVcsYUFBUztnQkFDcEMsOEJBQU0sU0FBUyxFQUFDLEtBQUssSUFBRSxDQUFDLENBQUMsUUFBa0IsQ0FBQyxDQUFRLENBQzlDO1lBQ1AsOEJBQU0sU0FBUyxFQUFDLE1BQU07Z0JBQ3JCLDhCQUFNLFNBQVMsRUFBQyxNQUFNLElBQUUsSUFBSSxDQUFRO2dCQUNwQyw4QkFBTSxTQUFTLEVBQUMsT0FBTyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBUTtnQkFDeEMsOEJBQU0sU0FBUyxFQUFDLFdBQVcsUUFBUztnQkFDcEMsOEJBQU0sU0FBUyxFQUFDLFNBQVM7b0JBQUMsZ0NBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFNO3dCQUFRLENBQ2pELENBQ0YsQ0FDTixDQUFBO0lBQ0YsQ0FBQztDQUNEO0FBRUQsc0JBQXNCLE1BQWM7SUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3ZCLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7U0FDOUIsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2xELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZDLENBQUM7QUFFRCxrQkFBZSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFBOzs7Ozs7OztDQVExRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBUeXBlc2NyaXB0IHdvbnQgbGV0IHVzIGp1c3QgZ3JhYiBpbmRpdmlkdWFsIGxvZGFzaCBtb2R1bGVzIHVzaW5nIGFcbi8vIG5vcm1hbCBgaW1wb3J0IGZpcnN0IGZyb20gJ2xvZGFzaC9maXJzdCdgIHN0YXRlbWVudCwgYnV0IHRoaXMgd29ya3Ncbi8vIHRvIGF2b2lkIGJsb2F0LlxuaW1wb3J0IGZpcnN0ID0gcmVxdWlyZSgnbG9kYXNoL2ZpcnN0JylcbmltcG9ydCBsYXN0ID0gcmVxdWlyZSgnbG9kYXNoL2xhc3QnKVxuXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSByZXF1aXJlKCdyZWFjdC1yZWxheScpXG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRzQ2hhbmdlUHJvcHMge1xuXHRzbmFwc2hvdHM6IHtcblx0XHR2aWV3czogc3RyaW5nLFxuXHRcdGxpa2VzOiBzdHJpbmcsXG5cdFx0ZGlzbGlrZXM6IHN0cmluZyxcblx0XHRmYXZvcml0ZXM6IHN0cmluZyxcblx0XHRjb21tZW50czogc3RyaW5nLFxuXHR9W11cbn1cblxuY2xhc3MgU3RhdHNDaGFuZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3RhdHNDaGFuZ2VQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHN0YXJ0ID0gZmlyc3QodGhpcy5wcm9wcy5zbmFwc2hvdHMpXG5cdFx0Y29uc3QgZW5kICA9IGxhc3QodGhpcy5wcm9wcy5zbmFwc2hvdHMpXG5cblx0XHRjb25zdCBzdGFydENvdW50ID0gc3RhcnQgIT0gbnVsbFxuXHRcdFx0PyBbc3RhcnQudmlld3MsIHN0YXJ0Lmxpa2VzLCBzdGFydC5kaXNsaWtlcywgc3RhcnQuZmF2b3JpdGVzLFxuXHRcdFx0XHQgc3RhcnQuY29tbWVudHNdXG5cdFx0XHRcdC5tYXAoTnVtYmVyKS5yZWR1Y2UoKHN1bSwgbnVtKSA9PiBzdW0gKyBudW0sIDApXG5cdFx0XHQ6IDBcblx0XHRjb25zdCBlbmRDb3VudCA9IGVuZCAhPSBudWxsXG5cdFx0XHQ/IFtlbmQudmlld3MsIGVuZC5saWtlcywgZW5kLmRpc2xpa2VzLCBlbmQuZmF2b3JpdGVzLCBlbmQuY29tbWVudHNdXG5cdFx0XHRcdC5tYXAoTnVtYmVyKS5yZWR1Y2UoKHN1bSwgbnVtKSA9PiBzdW0gKyBudW0sIDApXG5cdFx0XHQ6IDBcblxuXHRcdGNvbnN0IGNoYW5nZSAgPSBlbmRDb3VudCAtIHN0YXJ0Q291bnRcblx0XHRjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgoZW5kQ291bnQgLyBzdGFydENvdW50ICogMTAwKSAtIDEwMCkgfHwgMFxuXHRcdGNvbnN0IGRpZmYgICAgPSBNYXRoLmFicyhjaGFuZ2UpXG5cdFx0Y29uc3Qgc2lnbiA9IGNoYW5nZSA+IDAgPyAnKycgOiBjaGFuZ2UgPCAwID8gJy0nIDogJydcblx0XHRjb25zdCBzaWduQ2xhc3MgPSBjaGFuZ2UgPiAwID8gJ3Bvc2l0aXZlJyA6IGNoYW5nZSA8IDAgPyAnbmVnYXRpdmUnIDogJ25vbmUnXG5cblx0XHRjb25zdCBmID0gZm9ybWF0TnVtYmVyXG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gYHN0YXRzLWNoYW5nZSAke3NpZ25DbGFzc31gXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInN0YXJ0LWVuZFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInN0YXJ0XCI+e2Yoc3RhcnRDb3VudCBhcyBudW1iZXIpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj7ilro8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZW5kXCI+e2YoZW5kQ291bnQgYXMgbnVtYmVyKX08L3NwYW4+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGlmZlwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNpZ25cIj57c2lnbn08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57ZihkaWZmKX08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+Lzwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwZXJjZW50XCI+PGVtPntmKHBlcmNlbnQpfTwvZW0+JTwvc3Bhbj5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXI6IG51bWJlcik6IHN0cmluZyB7XG5cdHJldHVybiBNYXRoLnJvdW5kKG51bWJlcilcblx0XHQudG9TdHJpbmcoKS5zcGxpdCgnJykucmV2ZXJzZSgpXG5cdFx0Lm1hcCgobnVtLCBueCkgPT4gKG54KzEpICUgMyA9PT0gMCA/ICcsJytudW0gOiBudW0pXG5cdFx0LnJldmVyc2UoKS5qb2luKCcnKS5yZXBsYWNlKC9eLC8sICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudENvbnRhaW5lcihTdGF0c0NoYW5nZSwgZ3JhcGhxbGBcblx0ZnJhZ21lbnQgU3RhdHNDaGFuZ2Vfc25hcHNob3RzIG9uIFZpZGVvU3RhdHMgQHJlbGF5KHBsdXJhbDogdHJ1ZSkge1xuXHRcdHZpZXdzXG5cdFx0bGlrZXNcblx0XHRkaXNsaWtlc1xuXHRcdGZhdm9yaXRlc1xuXHRcdGNvbW1lbnRzXG5cdH1cbmApXG4iXX0=