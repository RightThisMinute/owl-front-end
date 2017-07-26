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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNDaGFydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YXRzQ2hhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBRTlCLHFEQUFzQztBQUV0QyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBYW5FLE1BQU0sVUFBVSxHQUFpQjtJQUNoQyxVQUFVLEVBQUUsSUFBSTtJQUNoQixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0lBQzFCLHNDQUFzQztJQUN0QyxNQUFNLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQztnQkFDUCxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2FBQzdCLENBQUM7UUFDRixLQUFLLEVBQUUsQ0FBQztnQkFDUCxPQUFPLEVBQUUsSUFBSTtnQkFDYixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUN6QixTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2FBQzdCLENBQUM7UUFDRixTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0tBQzdCO0NBQ0QsQ0FBQTtBQUVELGdCQUFpQixTQUFRLEtBQUssQ0FBQyxTQUErQjtJQUU3RCxNQUFNO1FBQUssTUFBTSxDQUFDLENBQ2pCLDZCQUFLLFNBQVMsRUFBQyxXQUFXO1lBQ3pCLG9CQUFDLHNCQUFJLElBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsR0FBSSxDQUN6QyxDQUNOLENBQUE7SUFBQSxDQUFDO0lBRUYsSUFBWSxJQUFJO1FBQ2YsSUFBSSxRQUFRLEdBQW9CO1lBQy9CO2dCQUNDLEtBQUssRUFBRSxPQUFPO2dCQUNkLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2hDLGVBQWUsRUFBRSxvQkFBb0I7Z0JBQ3RDLElBQUksRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDQyxLQUFLLEVBQUUsVUFBVTtnQkFDakIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsZUFBZSxFQUFFLG9CQUFvQjtnQkFDckMsSUFBSSxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNDLEtBQUssRUFBRSxPQUFPO2dCQUNkLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLGVBQWUsRUFBRSxvQkFBb0I7Z0JBQ3JDLElBQUksRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDQyxLQUFLLEVBQUUsV0FBVztnQkFDbEIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsZUFBZSxFQUFFLG9CQUFvQjtnQkFDckMsSUFBSSxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNDLEtBQUssRUFBRSxVQUFVO2dCQUNqQixXQUFXLEVBQUUsb0JBQW9CO2dCQUNqQyxlQUFlLEVBQUUsb0JBQW9CO2dCQUNyQyxJQUFJLEVBQUUsRUFBRTthQUNSO1NBQ0QsQ0FBQTtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBQyxTQUFTLEVBQUUsSUFBSSxHQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDakQsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFBO0lBQ3BCLENBQUM7Q0FDRDtBQUdELGtCQUFlLHVCQUF1QixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUE7Ozs7Ozs7O0NBUXpELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDaGFydERhdGEsIENoYXJ0RGF0YVNldHMsIENoYXJ0T3B0aW9ucyB9IGZyb20gJ2NoYXJ0LmpzJ1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcblxuY29uc3QgeyBjcmVhdGVGcmFnbWVudENvbnRhaW5lciwgZ3JhcGhxbCB9ID0gcmVxdWlyZSgncmVhY3QtcmVsYXknKVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHNDaGFydFByb3BzIHtcblx0c25hcHNob3RzOiB7XG5cdFx0dmlld3M6IHN0cmluZyxcblx0XHRsaWtlczogc3RyaW5nLFxuXHRcdGRpc2xpa2VzOiBzdHJpbmcsXG5cdFx0ZmF2b3JpdGVzOiBzdHJpbmcsXG5cdFx0Y29tbWVudHM6IHN0cmluZyxcblx0fVtdXG59XG5cbmNvbnN0IENIQVJUX09QVFM6IENoYXJ0T3B0aW9ucyA9IHtcblx0cmVzcG9uc2l2ZTogdHJ1ZSxcblx0bGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG5cdC8vIGVsZW1lbnRzOiB7IHBvaW50OiB7IHJhZGl1czogMCB9IH0sXG5cdHNjYWxlczoge1xuXHRcdHhBeGVzOiBbe1xuXHRcdFx0Z3JpZExpbmVzOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG5cdFx0fV0sXG5cdFx0eUF4ZXM6IFt7XG5cdFx0XHRzdGFja2VkOiB0cnVlLFxuXHRcdFx0dGlja3M6IHsgZGlzcGxheTogZmFsc2UgfSxcblx0XHRcdGdyaWRMaW5lczogeyBkaXNwbGF5OiBmYWxzZSB9LFxuXHRcdH1dLFxuXHRcdGdyaWRMaW5lczogeyBkaXNwbGF5OiBmYWxzZSB9LFxuXHR9LFxufVxuXG5jbGFzcyBTdGF0c0NoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN0YXRzQ2hhcnRQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkgeyByZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtYm94XCI+XG5cdFx0XHQ8TGluZSBkYXRhPXt0aGlzLmRhdGF9IG9wdGlvbnM9e0NIQVJUX09QVFN9IC8+XG5cdFx0PC9kaXY+XG5cdCl9XG5cblx0cHJpdmF0ZSBnZXQgZGF0YSgpOiBDaGFydERhdGEge1xuXHRcdGxldCBkYXRhc2V0czogQ2hhcnREYXRhU2V0c1tdID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ3ZpZXdzJyxcblx0XHRcdFx0Ym9yZGVyQ29sb3I6ICdyZ2IoMjE0LCAyMTQsIDIxNCknLFxuXHRcdFx0ICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjE0LCAyMTQsIDIxNCknLFxuXHRcdFx0XHRkYXRhOiBbXSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiAnZGlzbGlrZXMnLFxuXHRcdFx0XHRib3JkZXJDb2xvcjogJ3JnYigyNTUsIDEyNiwgMTIxKScsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDEyNiwgMTIxKScsXG5cdFx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bGFiZWw6ICdsaWtlcycsXG5cdFx0XHRcdGJvcmRlckNvbG9yOiAncmdiKDIxMiwgMjUxLCAxMjEpJyxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiKDIxMiwgMjUxLCAxMjEpJyxcblx0XHRcdFx0ZGF0YTogW10sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ2Zhdm9yaXRlcycsXG5cdFx0XHRcdGJvcmRlckNvbG9yOiAncmdiKDIxNSwgMTMxLCAyNTUpJyxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiKDIxNSwgMTMxLCAyNTUpJyxcblx0XHRcdFx0ZGF0YTogW10sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ2NvbW1lbnRzJyxcblx0XHRcdFx0Ym9yZGVyQ29sb3I6ICdyZ2IoMTE4LCAyMTQsIDI1NSknLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTE4LCAyMTQsIDI1NSknLFxuXHRcdFx0XHRkYXRhOiBbXSxcblx0XHRcdH0sXG5cdFx0XVxuXG5cdFx0dGhpcy5wcm9wcy5zbmFwc2hvdHMuZm9yRWFjaChzbmFwc2hvdCA9PiB7XG5cdFx0XHRkYXRhc2V0cy5mb3JFYWNoKCh7IGxhYmVsPSdbRVJST1JdJywgZGF0YT1bXSB9KSA9PiB7XG5cdFx0XHRcdChkYXRhIGFzIG51bWJlcltdKS5wdXNoKE51bWJlcihzbmFwc2hvdFtsYWJlbF0pKVxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHsgZGF0YXNldHMgfVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnRDb250YWluZXIoU3RhdHNDaGFydCwgZ3JhcGhxbGBcblx0ZnJhZ21lbnQgU3RhdHNDaGFydF9zbmFwc2hvdHMgb24gVmlkZW9TdGF0cyBAcmVsYXkocGx1cmFsOiB0cnVlKSB7XG5cdFx0dmlld3Ncblx0XHRsaWtlc1xuXHRcdGRpc2xpa2VzXG5cdFx0ZmF2b3JpdGVzXG5cdFx0Y29tbWVudHNcblx0fVxuYClcbiJdfQ==