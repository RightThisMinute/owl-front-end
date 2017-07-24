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
//# sourceMappingURL=StatsChange.js.map