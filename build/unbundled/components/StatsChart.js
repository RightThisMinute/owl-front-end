"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_chartjs_2_1 = require("react-chartjs-2");
const { createFragmentContainer, graphql } = require('react-relay');
const CHART_OPTS = {
    responsive: true,
    legend: { display: false },
    // elements: { point: { radius: 0 } },
    scales: {
        xAxes: [{
                gridLines: { display: false },
            }],
        yAxes: [{
                stacked: true,
                ticks: { display: false },
                gridLines: { display: false },
            }],
        gridLines: { display: false },
    },
};
class StatsChart extends React.Component {
    render() {
        return (React.createElement("div", { className: "chart-box" },
            React.createElement(react_chartjs_2_1.Line, { data: this.data, options: CHART_OPTS })));
    }
    get data() {
        let datasets = [
            {
                label: 'views',
                borderColor: 'rgb(214, 214, 214)',
                backgroundColor: 'rgb(214, 214, 214)',
                data: [],
            },
            {
                label: 'dislikes',
                borderColor: 'rgb(255, 126, 121)',
                backgroundColor: 'rgb(255, 126, 121)',
                data: [],
            },
            {
                label: 'likes',
                borderColor: 'rgb(212, 251, 121)',
                backgroundColor: 'rgb(212, 251, 121)',
                data: [],
            },
            {
                label: 'favorites',
                borderColor: 'rgb(215, 131, 255)',
                backgroundColor: 'rgb(215, 131, 255)',
                data: [],
            },
            {
                label: 'comments',
                borderColor: 'rgb(118, 214, 255)',
                backgroundColor: 'rgb(118, 214, 255)',
                data: [],
            },
        ];
        this.props.snapshots.forEach(snapshot => {
            datasets.forEach(({ label = '[ERROR]', data = [] }) => {
                data.push(Number(snapshot[label]));
            });
        });
        return { datasets };
    }
}
exports.default = createFragmentContainer(StatsChart, graphql `
	fragment StatsChart_snapshots on VideoStats @relay(plural: true) {
		views
		likes
		dislikes
		favorites
		comments
	}
`);
//# sourceMappingURL=StatsChart.js.map