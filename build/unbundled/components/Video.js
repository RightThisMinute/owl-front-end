"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const { createFragmentContainer, graphql } = require('react-relay');
const StatsChange_1 = require("./StatsChange");
const StatsChart_1 = require("./StatsChart");
class Video extends React.Component {
    render() {
        const { id, snapshots = [] } = this.props.video;
        const { title = '[Unknown]', thumbnailURL = 'https://www.fillmurray.com/1920/1080' } = this.props.video.details || {};
        return (React.createElement("article", { id: `video-${id}` },
            React.createElement("a", { href: `https://youtu.be/${id}` },
                React.createElement("h1", null, title),
                React.createElement("img", { src: thumbnailURL, alt: title }),
                React.createElement(StatsChart_1.default, { snapshots: snapshots }),
                React.createElement(StatsChange_1.default, { snapshots: snapshots }))));
    }
}
exports.default = createFragmentContainer(Video, graphql `
	fragment Video_video on Video {
		id	
		details {
			title
			thumbnailURL
		}
		snapshots: statsByAge(seconds: 86400) {
      ...StatsChart_snapshots
			...StatsChange_snapshots
		}
	}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFDOUIsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVuRSwrQ0FBNkQ7QUFDN0QsNkNBQTBEO0FBaUIxRCxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQXFCO0lBRTlDLE1BQU07UUFDTCxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtRQUMvQyxNQUFNLEVBQ0wsS0FBSyxHQUFHLFdBQVcsRUFDbkIsWUFBWSxHQUFHLHNDQUFzQyxFQUNyRCxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7UUFFbEMsTUFBTSxDQUFDLENBQ04saUNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFO1lBQUUsMkJBQUcsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEVBQUU7Z0JBQzVELGdDQUFLLEtBQUssQ0FBTTtnQkFDaEIsNkJBQUssR0FBRyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxHQUFJO2dCQUN0QyxvQkFBQyxvQkFBVSxJQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUk7Z0JBQ3BDLG9CQUFDLHFCQUFXLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSSxDQUNsQyxDQUFVLENBQ2QsQ0FBQTtJQUNGLENBQUM7Q0FFRDtBQUVELGtCQUFlLHVCQUF1QixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUE7Ozs7Ozs7Ozs7OztDQVlwRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgeyBjcmVhdGVGcmFnbWVudENvbnRhaW5lciwgZ3JhcGhxbCB9ID0gcmVxdWlyZSgncmVhY3QtcmVsYXknKVxuXG5pbXBvcnQgU3RhdHNDaGFuZ2UsIHsgU3RhdHNDaGFuZ2VQcm9wcyB9IGZyb20gJy4vU3RhdHNDaGFuZ2UnXG5pbXBvcnQgU3RhdHNDaGFydCwgeyBTdGF0c0NoYXJ0UHJvcHMgfSBmcm9tICcuL1N0YXRzQ2hhcnQnXG5cblxuaW50ZXJmYWNlIFNuYXBzaG90UHJvcHMgZXh0ZW5kcyBTdGF0c0NoYXJ0UHJvcHMsIFN0YXRzQ2hhbmdlUHJvcHMge31cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1Byb3BzIGV4dGVuZHMgU25hcHNob3RQcm9wcyB7XG5cdGlkOiBzdHJpbmcsXG5cdGRldGFpbHM6IHtcblx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdHRodW1ibmFpbFVSTDogc3RyaW5nLFxuXHR9LFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHR2aWRlbzogVmlkZW9Qcm9wc1xufVxuXG5jbGFzcyBWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgaWQsIHNuYXBzaG90cyA9IFtdIH0gPSB0aGlzLnByb3BzLnZpZGVvXG5cdFx0Y29uc3Qge1xuXHRcdFx0dGl0bGUgPSAnW1Vua25vd25dJyxcblx0XHRcdHRodW1ibmFpbFVSTCA9ICdodHRwczovL3d3dy5maWxsbXVycmF5LmNvbS8xOTIwLzEwODAnXG5cdFx0fSA9IHRoaXMucHJvcHMudmlkZW8uZGV0YWlscyB8fCB7fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxhcnRpY2xlIGlkPXtgdmlkZW8tJHtpZH1gfT48YSBocmVmPXtgaHR0cHM6Ly95b3V0dS5iZS8ke2lkfWB9PlxuXHRcdFx0XHQ8aDE+e3RpdGxlfTwvaDE+XG5cdFx0XHRcdDxpbWcgc3JjPXt0aHVtYm5haWxVUkx9IGFsdD17dGl0bGV9IC8+XG5cdFx0XHRcdDxTdGF0c0NoYXJ0IHNuYXBzaG90cz17c25hcHNob3RzfSAvPlxuXHRcdFx0XHQ8U3RhdHNDaGFuZ2Ugc25hcHNob3RzPXtzbmFwc2hvdHN9IC8+XG5cdFx0XHQ8L2E+PC9hcnRpY2xlPlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyKFZpZGVvLCBncmFwaHFsYFxuXHRmcmFnbWVudCBWaWRlb192aWRlbyBvbiBWaWRlbyB7XG5cdFx0aWRcdFxuXHRcdGRldGFpbHMge1xuXHRcdFx0dGl0bGVcblx0XHRcdHRodW1ibmFpbFVSTFxuXHRcdH1cblx0XHRzbmFwc2hvdHM6IHN0YXRzQnlBZ2Uoc2Vjb25kczogODY0MDApIHtcbiAgICAgIC4uLlN0YXRzQ2hhcnRfc25hcHNob3RzXG5cdFx0XHQuLi5TdGF0c0NoYW5nZV9zbmFwc2hvdHNcblx0XHR9XG5cdH1cbmApXG4iXX0=