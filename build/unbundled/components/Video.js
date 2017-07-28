"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const { createFragmentContainer, graphql } = require('react-relay');
const StatsChange_1 = require("./StatsChange");
const StatsChart_1 = require("./StatsChart");
class Video extends React.Component {
    render() {
        const { id, snapshots = [] } = this.props.video;
        const { title = `[${id}]`, thumbnailURL = 'https://www.fillmurray.com/1920/1080' } = this.props.video.details || {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFDOUIsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVuRSwrQ0FBNkQ7QUFDN0QsNkNBQTBEO0FBaUIxRCxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQXFCO0lBRTlDLE1BQU07UUFDTCxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsR0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtRQUM3QyxNQUFNLEVBQ0wsS0FBSyxHQUFHLElBQUksRUFBRSxHQUFHLEVBQ2pCLFlBQVksR0FBRyxzQ0FBc0MsRUFDckQsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFBO1FBRWxDLE1BQU0sQ0FBQyxDQUNOLGlDQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUFFLDJCQUFHLElBQUksRUFBRSxvQkFBb0IsRUFBRSxFQUFFO2dCQUM1RCxnQ0FBSyxLQUFLLENBQU07Z0JBQ2hCLDZCQUFLLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBSTtnQkFDdEMsb0JBQUMsb0JBQVUsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJO2dCQUNwQyxvQkFBQyxxQkFBVyxJQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUksQ0FDbEMsQ0FBVSxDQUNkLENBQUE7SUFDRixDQUFDO0NBRUQ7QUFFRCxrQkFBZSx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFBOzs7Ozs7Ozs7Ozs7Q0FZcEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHsgY3JlYXRlRnJhZ21lbnRDb250YWluZXIsIGdyYXBocWwgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlbGF5JylcblxuaW1wb3J0IFN0YXRzQ2hhbmdlLCB7IFN0YXRzQ2hhbmdlUHJvcHMgfSBmcm9tICcuL1N0YXRzQ2hhbmdlJ1xuaW1wb3J0IFN0YXRzQ2hhcnQsIHsgU3RhdHNDaGFydFByb3BzIH0gZnJvbSAnLi9TdGF0c0NoYXJ0J1xuXG5cbmludGVyZmFjZSBTbmFwc2hvdFByb3BzIGV4dGVuZHMgU3RhdHNDaGFydFByb3BzLCBTdGF0c0NoYW5nZVByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9Qcm9wcyBleHRlbmRzIFNuYXBzaG90UHJvcHMge1xuXHRpZDogc3RyaW5nLFxuXHRkZXRhaWxzOiB7XG5cdFx0dGl0bGU6IHN0cmluZyxcblx0XHR0aHVtYm5haWxVUkw6IHN0cmluZyxcblx0fSxcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0dmlkZW86IFZpZGVvUHJvcHNcbn1cblxuY2xhc3MgVmlkZW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGlkLCBzbmFwc2hvdHM9W10gfSA9IHRoaXMucHJvcHMudmlkZW9cblx0XHRjb25zdCB7XG5cdFx0XHR0aXRsZSA9IGBbJHtpZH1dYCxcblx0XHRcdHRodW1ibmFpbFVSTCA9ICdodHRwczovL3d3dy5maWxsbXVycmF5LmNvbS8xOTIwLzEwODAnXG5cdFx0fSA9IHRoaXMucHJvcHMudmlkZW8uZGV0YWlscyB8fCB7fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxhcnRpY2xlIGlkPXtgdmlkZW8tJHtpZH1gfT48YSBocmVmPXtgaHR0cHM6Ly95b3V0dS5iZS8ke2lkfWB9PlxuXHRcdFx0XHQ8aDE+e3RpdGxlfTwvaDE+XG5cdFx0XHRcdDxpbWcgc3JjPXt0aHVtYm5haWxVUkx9IGFsdD17dGl0bGV9IC8+XG5cdFx0XHRcdDxTdGF0c0NoYXJ0IHNuYXBzaG90cz17c25hcHNob3RzfSAvPlxuXHRcdFx0XHQ8U3RhdHNDaGFuZ2Ugc25hcHNob3RzPXtzbmFwc2hvdHN9IC8+XG5cdFx0XHQ8L2E+PC9hcnRpY2xlPlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyKFZpZGVvLCBncmFwaHFsYFxuXHRmcmFnbWVudCBWaWRlb192aWRlbyBvbiBWaWRlbyB7XG5cdFx0aWRcdFxuXHRcdGRldGFpbHMge1xuXHRcdFx0dGl0bGVcblx0XHRcdHRodW1ibmFpbFVSTFxuXHRcdH1cblx0XHRzbmFwc2hvdHM6IHN0YXRzQnlBZ2Uoc2Vjb25kczogODY0MDApIHtcbiAgICAgIC4uLlN0YXRzQ2hhcnRfc25hcHNob3RzXG5cdFx0XHQuLi5TdGF0c0NoYW5nZV9zbmFwc2hvdHNcblx0XHR9XG5cdH1cbmApXG4iXX0=