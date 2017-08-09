"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const first = require("lodash/first");
const last = require("lodash/last");
const react_chartjs_2_1 = require("react-chartjs-2");
const { createFragmentContainer, graphql } = require('react-relay');
const CHART_OPTS = {
    responsive: true,
    legend: { display: false },
    scales: {
        xAxes: [{
                display: false,
                gridLines: { display: false },
            }],
        yAxes: [{
                display: false,
                stacked: true,
                ticks: { display: false },
                gridLines: { display: false },
            }],
        gridLines: { display: false },
    },
};
class StatsChart extends React.Component {
    render() {
        const { data } = this;
        const { min, max } = data.datasets.reduce((accl, { data }) => {
            accl.min += first(data) || 0;
            accl.max += last(data) || 0;
            return accl;
        }, { min: 0, max: 0 });
        const yAxes = CHART_OPTS.scales.yAxes.map(axis => {
            return Object.assign({}, axis, {
                ticks: {
                    min, max,
                    beginAtZero: false,
                },
            });
        });
        const scales = Object.assign({}, CHART_OPTS.scales, {
            yAxes,
        });
        const opts = Object.assign({}, CHART_OPTS, { scales });
        return (React.createElement("div", { className: "chart-box" },
            React.createElement(react_chartjs_2_1.Line, { data: data, options: opts })));
    }
    get data() {
        const labels = [];
        let datasets = [
            {
                label: 'views',
                borderColor: 'rgb(214, 214, 214)',
            },
            {
                label: 'dislikes',
                borderColor: 'rgb(255, 126, 121)',
            },
            {
                label: 'likes',
                borderColor: 'rgb(212, 251, 121)',
            },
            {
                label: 'favorites',
                borderColor: 'rgb(215, 131, 255)',
            },
            {
                label: 'comments',
                borderColor: 'rgb(118, 214, 255)',
            },
        ];
        datasets = datasets.map(dataset => {
            dataset.backgroundColor = dataset.borderColor;
            dataset.data = [];
            dataset.pointRadius = 0;
            // dataset.fill = false
            return dataset;
        });
        let count = 0;
        this.props.snapshots.forEach(snapshot => {
            labels.push(`${count++}`);
            datasets.forEach(({ label = '[ERROR]', data = [] }) => {
                data.push(Number(snapshot[label]));
            });
        });
        const maxCount = 1;
        return { labels, datasets };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNDaGFydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YXRzQ2hhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBRTlCLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMscURBQXNDO0FBRXRDLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFhbkUsTUFBTSxVQUFVLEdBQWlCO0lBQ2hDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7SUFDMUIsTUFBTSxFQUFFO1FBQ1AsS0FBSyxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTthQUM3QixDQUFDO1FBQ0YsS0FBSyxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDekIsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTthQUM3QixDQUFDO1FBQ0YsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtLQUM3QjtDQUNELENBQUE7QUFFRCxnQkFBaUIsU0FBUSxLQUFLLENBQUMsU0FBK0I7SUFFN0QsTUFBTTtRQUNMLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFFckIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBSSxJQUFJLENBQUMsUUFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRTtZQUMxRCxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFnQixDQUFDLElBQUksQ0FBQyxDQUFB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Y3QnXG5pbXBvcnQgeyBDaGFydERhdGEsIENoYXJ0RGF0YVNldHMsIENoYXJ0T3B0aW9ucyB9IGZyb20gJ2NoYXJ0LmpzJ1xuaW1wb3J0IGZpcnN0ID0gcmVxdWlyZSgnbG9kYXNoL2ZpcnN0JylcbmltcG9ydCBsYXN0ID0gcmVxdWlyZSgnbG9kYXNoL2xhc3QnKVxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcblxuY29uc3QgeyBjcmVhdGVGcmFnbWVudENvbnRhaW5lciwgZ3JhcGhxbCB9ID0gcmVxdWlyZSgncmVhY3QtcmVsYXknKVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHNDaGFydFByb3BzIHtcblx0c25hcHNob3RzOiB7XG5cdFx0dmlld3M6IHN0cmluZyxcblx0XHRsaWtlczogc3RyaW5nLFxuXHRcdGRpc2xpa2VzOiBzdHJpbmcsXG5cdFx0ZmF2b3JpdGVzOiBzdHJpbmcsXG5cdFx0Y29tbWVudHM6IHN0cmluZyxcblx0fVtdXG59XG5cbmNvbnN0IENIQVJUX09QVFM6IENoYXJ0T3B0aW9ucyA9IHtcblx0cmVzcG9uc2l2ZTogdHJ1ZSxcblx0bGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG5cdHNjYWxlczoge1xuXHRcdHhBeGVzOiBbe1xuXHRcdFx0ZGlzcGxheTogZmFsc2UsXG5cdFx0XHRncmlkTGluZXM6IHsgZGlzcGxheTogZmFsc2UgfSxcblx0XHR9XSxcblx0XHR5QXhlczogW3tcblx0XHRcdGRpc3BsYXk6IGZhbHNlLFxuXHRcdFx0c3RhY2tlZDogdHJ1ZSxcblx0XHRcdHRpY2tzOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG5cdFx0XHRncmlkTGluZXM6IHsgZGlzcGxheTogZmFsc2UgfSxcblx0XHR9XSxcblx0XHRncmlkTGluZXM6IHsgZGlzcGxheTogZmFsc2UgfSxcblx0fSxcbn1cblxuY2xhc3MgU3RhdHNDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTdGF0c0NoYXJ0UHJvcHMsIGFueT4ge1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGRhdGEgfSA9IHRoaXNcblxuXHRcdGNvbnN0IHsgbWluLCBtYXggfSAgPSBkYXRhLmRhdGFzZXRzIS5yZWR1Y2UoKGFjY2wsIHsgZGF0YSB9KSA9PiB7XG5cdFx0XHRhY2NsLm1pbiArPSBmaXJzdChkYXRhIGFzIG51bWJlcltdKSB8fCAwXG5cdFx0XHRhY2NsLm1heCArPSBsYXN0KGRhdGEgYXMgbnVtYmVyW10pIHx8IDBcblx0XHRcdHJldHVybiBhY2NsXG5cdFx0fSwgeyBtaW46IDAsIG1heDogMCB9KVxuXG5cdFx0Y29uc3QgeUF4ZXMgPSBDSEFSVF9PUFRTLnNjYWxlcyEueUF4ZXMhLm1hcChheGlzID0+IHtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBheGlzLCB7XG5cdFx0XHRcdHRpY2tzOiB7XG5cdFx0XHRcdFx0bWluLCBtYXgsXG5cdFx0XHRcdFx0YmVnaW5BdFplcm86IGZhbHNlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0Y29uc3Qgc2NhbGVzID0gT2JqZWN0LmFzc2lnbih7fSwgQ0hBUlRfT1BUUy5zY2FsZXMsIHtcblx0XHRcdHlBeGVzLFxuXHRcdH0pXG5cblx0XHRjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgQ0hBUlRfT1BUUywgeyBzY2FsZXMgfSlcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWJveFwiPlxuXHRcdFx0XHQ8TGluZSBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0cHJpdmF0ZSBnZXQgZGF0YSgpOiBDaGFydERhdGEge1xuXHRcdGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBbXVxuXG5cdFx0bGV0IGRhdGFzZXRzOiBDaGFydERhdGFTZXRzW10gPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiAndmlld3MnLFxuXHRcdFx0XHRib3JkZXJDb2xvcjogJ3JnYigyMTQsIDIxNCwgMjE0KScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ2Rpc2xpa2VzJyxcblx0XHRcdFx0Ym9yZGVyQ29sb3I6ICdyZ2IoMjU1LCAxMjYsIDEyMSknLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bGFiZWw6ICdsaWtlcycsXG5cdFx0XHRcdGJvcmRlckNvbG9yOiAncmdiKDIxMiwgMjUxLCAxMjEpJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiAnZmF2b3JpdGVzJyxcblx0XHRcdFx0Ym9yZGVyQ29sb3I6ICdyZ2IoMjE1LCAxMzEsIDI1NSknLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bGFiZWw6ICdjb21tZW50cycsXG5cdFx0XHRcdGJvcmRlckNvbG9yOiAncmdiKDExOCwgMjE0LCAyNTUpJyxcblx0XHRcdH0sXG5cdFx0XVxuXG5cdFx0ZGF0YXNldHMgPSBkYXRhc2V0cy5tYXAoZGF0YXNldCA9PiB7XG5cdFx0XHRkYXRhc2V0LmJhY2tncm91bmRDb2xvciA9IGRhdGFzZXQuYm9yZGVyQ29sb3Jcblx0XHRcdGRhdGFzZXQuZGF0YSA9IFtdXG5cdFx0XHRkYXRhc2V0LnBvaW50UmFkaXVzID0gMFxuXHRcdFx0Ly8gZGF0YXNldC5maWxsID0gZmFsc2VcblxuXHRcdFx0cmV0dXJuIGRhdGFzZXRcblx0XHR9KVxuXG5cdFx0bGV0IGNvdW50ID0gMFxuXG5cdFx0dGhpcy5wcm9wcy5zbmFwc2hvdHMuZm9yRWFjaChzbmFwc2hvdCA9PiB7XG5cdFx0XHRsYWJlbHMucHVzaChgJHtjb3VudCsrfWApXG5cdFx0XHRcblx0XHRcdGRhdGFzZXRzLmZvckVhY2goKHsgbGFiZWw9J1tFUlJPUl0nLCBkYXRhPVtdIH0pID0+IHtcblx0XHRcdFx0KGRhdGEgYXMgbnVtYmVyW10pLnB1c2goTnVtYmVyKHNuYXBzaG90W2xhYmVsXSkpXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHRjb25zdCBtYXhDb3VudCA9IDFcblxuXHRcdHJldHVybiB7IGxhYmVscywgZGF0YXNldHMgfVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnRDb250YWluZXIoU3RhdHNDaGFydCwgZ3JhcGhxbGBcblx0ZnJhZ21lbnQgU3RhdHNDaGFydF9zbmFwc2hvdHMgb24gVmlkZW9TdGF0cyBAcmVsYXkocGx1cmFsOiB0cnVlKSB7XG5cdFx0dmlld3Ncblx0XHRsaWtlc1xuXHRcdGRpc2xpa2VzXG5cdFx0ZmF2b3JpdGVzXG5cdFx0Y29tbWVudHNcblx0fVxuYClcbiJdfQ==