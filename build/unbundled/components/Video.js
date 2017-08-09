"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const { createFragmentContainer, graphql } = require('react-relay');
const StatsChange_1 = require("./StatsChange");
const StatsChart_1 = require("./StatsChart");
require("../../../src/components/Video/style.pcss");
class Video extends React.Component {
    render() {
        const { id, snapshots = [] } = this.props.video;
        const { title = `[${id}]`, thumbnailURL = 'https://www.fillmurray.com/1920/1080' } = this.props.video.details || {};
        return (React.createElement("article", { className: "video", id: `video-${id}` },
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
		snapshots: statsByAge(seconds: $statsAge) {
      ...StatsChart_snapshots
			...StatsChange_snapshots
		}
	}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFDOUIsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVuRSwrQ0FBNkQ7QUFDN0QsNkNBQTBEO0FBRTFELG9EQUFpRDtBQWlCakQsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUFxQjtJQUU5QyxNQUFNO1FBQ0wsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEdBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFDN0MsTUFBTSxFQUNMLEtBQUssR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUNqQixZQUFZLEdBQUcsc0NBQXNDLEVBQ3JELEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUVsQyxNQUFNLENBQUMsQ0FDTixpQ0FBUyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUMzQywyQkFBRyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsRUFBRTtnQkFDaEMsZ0NBQUssS0FBSyxDQUFNO2dCQUNoQiw2QkFBSyxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUk7Z0JBQ3RDLG9CQUFDLG9CQUFVLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSTtnQkFDcEMsb0JBQUMscUJBQVcsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLENBQ2xDLENBQ0ssQ0FDVixDQUFBO0lBQ0YsQ0FBQztDQUVEO0FBRUQsa0JBQWUsdUJBQXVCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQTs7Ozs7Ozs7Ozs7O0NBWXBELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSByZXF1aXJlKCdyZWFjdC1yZWxheScpXG5cbmltcG9ydCBTdGF0c0NoYW5nZSwgeyBTdGF0c0NoYW5nZVByb3BzIH0gZnJvbSAnLi9TdGF0c0NoYW5nZSdcbmltcG9ydCBTdGF0c0NoYXJ0LCB7IFN0YXRzQ2hhcnRQcm9wcyB9IGZyb20gJy4vU3RhdHNDaGFydCdcblxuaW1wb3J0ICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby9zdHlsZS5wY3NzJ1xuXG5cbmludGVyZmFjZSBTbmFwc2hvdFByb3BzIGV4dGVuZHMgU3RhdHNDaGFydFByb3BzLCBTdGF0c0NoYW5nZVByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9Qcm9wcyBleHRlbmRzIFNuYXBzaG90UHJvcHMge1xuXHRpZDogc3RyaW5nLFxuXHRkZXRhaWxzOiB7XG5cdFx0dGl0bGU6IHN0cmluZyxcblx0XHR0aHVtYm5haWxVUkw6IHN0cmluZyxcblx0fSxcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0dmlkZW86IFZpZGVvUHJvcHNcbn1cblxuY2xhc3MgVmlkZW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGlkLCBzbmFwc2hvdHM9W10gfSA9IHRoaXMucHJvcHMudmlkZW9cblx0XHRjb25zdCB7XG5cdFx0XHR0aXRsZSA9IGBbJHtpZH1dYCxcblx0XHRcdHRodW1ibmFpbFVSTCA9ICdodHRwczovL3d3dy5maWxsbXVycmF5LmNvbS8xOTIwLzEwODAnXG5cdFx0fSA9IHRoaXMucHJvcHMudmlkZW8uZGV0YWlscyB8fCB7fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cInZpZGVvXCIgaWQ9e2B2aWRlby0ke2lkfWB9PlxuXHRcdFx0XHQ8YSBocmVmPXtgaHR0cHM6Ly95b3V0dS5iZS8ke2lkfWB9PlxuXHRcdFx0XHRcdDxoMT57dGl0bGV9PC9oMT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17dGh1bWJuYWlsVVJMfSBhbHQ9e3RpdGxlfSAvPlxuXHRcdFx0XHRcdDxTdGF0c0NoYXJ0IHNuYXBzaG90cz17c25hcHNob3RzfSAvPlxuXHRcdFx0XHRcdDxTdGF0c0NoYW5nZSBzbmFwc2hvdHM9e3NuYXBzaG90c30gLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9hcnRpY2xlPlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyKFZpZGVvLCBncmFwaHFsYFxuXHRmcmFnbWVudCBWaWRlb192aWRlbyBvbiBWaWRlbyB7XG5cdFx0aWRcdFxuXHRcdGRldGFpbHMge1xuXHRcdFx0dGl0bGVcblx0XHRcdHRodW1ibmFpbFVSTFxuXHRcdH1cblx0XHRzbmFwc2hvdHM6IHN0YXRzQnlBZ2Uoc2Vjb25kczogJHN0YXRzQWdlKSB7XG4gICAgICAuLi5TdGF0c0NoYXJ0X3NuYXBzaG90c1xuXHRcdFx0Li4uU3RhdHNDaGFuZ2Vfc25hcHNob3RzXG5cdFx0fVxuXHR9XG5gKVxuIl19