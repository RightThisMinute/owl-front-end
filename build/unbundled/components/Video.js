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
                React.createElement("div", { className: "graphics" },
                    React.createElement("img", { src: thumbnailURL, alt: title }),
                    React.createElement(StatsChart_1.default, { snapshots: snapshots, scale: this.props.chartScale, dataPointCount: this.props.chartDataPountCount })),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFDOUIsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVuRSwrQ0FBNkQ7QUFDN0QsNkNBQTBEO0FBRTFELG9EQUFpRDtBQW1CakQsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUFxQjtJQUU5QyxNQUFNO1FBQ0wsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEdBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFDN0MsTUFBTSxFQUNMLEtBQUssR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUNqQixZQUFZLEdBQUcsc0NBQXNDLEVBQ3JELEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUVsQyxNQUFNLENBQUMsQ0FDTixpQ0FBUyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUMzQywyQkFBRyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsRUFBRTtnQkFDaEMsZ0NBQUssS0FBSyxDQUFNO2dCQUNoQiw2QkFBSyxTQUFTLEVBQUMsVUFBVTtvQkFDeEIsNkJBQUssR0FBRyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxHQUFJO29CQUN0QyxvQkFBQyxvQkFBVSxJQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUNsRCxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBSSxDQUN6RDtnQkFDTixvQkFBQyxxQkFBVyxJQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUksQ0FDbEMsQ0FDSyxDQUNWLENBQUE7SUFDRixDQUFDO0NBRUQ7QUFFRCxrQkFBZSx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFBOzs7Ozs7Ozs7Ozs7Q0FZcEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHsgY3JlYXRlRnJhZ21lbnRDb250YWluZXIsIGdyYXBocWwgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlbGF5JylcblxuaW1wb3J0IFN0YXRzQ2hhbmdlLCB7IFN0YXRzQ2hhbmdlUHJvcHMgfSBmcm9tICcuL1N0YXRzQ2hhbmdlJ1xuaW1wb3J0IFN0YXRzQ2hhcnQsIHsgU3RhdHNDaGFydFByb3BzIH0gZnJvbSAnLi9TdGF0c0NoYXJ0J1xuXG5pbXBvcnQgJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvL3N0eWxlLnBjc3MnXG5cblxuaW50ZXJmYWNlIFNuYXBzaG90UHJvcHMgZXh0ZW5kcyBTdGF0c0NoYXJ0UHJvcHMsIFN0YXRzQ2hhbmdlUHJvcHMge31cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1Byb3BzIGV4dGVuZHMgU25hcHNob3RQcm9wcyB7XG5cdGlkOiBzdHJpbmcsXG5cdGRldGFpbHM6IHtcblx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdHRodW1ibmFpbFVSTDogc3RyaW5nLFxuXHR9LFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHR2aWRlbzogVmlkZW9Qcm9wc1xuXHRjaGFydFNjYWxlOiBudW1iZXJcblx0Y2hhcnREYXRhUG91bnRDb3VudDogbnVtYmVyXG59XG5cbmNsYXNzIFZpZGVvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBpZCwgc25hcHNob3RzPVtdIH0gPSB0aGlzLnByb3BzLnZpZGVvXG5cdFx0Y29uc3Qge1xuXHRcdFx0dGl0bGUgPSBgWyR7aWR9XWAsXG5cdFx0XHR0aHVtYm5haWxVUkwgPSAnaHR0cHM6Ly93d3cuZmlsbG11cnJheS5jb20vMTkyMC8xMDgwJ1xuXHRcdH0gPSB0aGlzLnByb3BzLnZpZGVvLmRldGFpbHMgfHwge31cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJ2aWRlb1wiIGlkPXtgdmlkZW8tJHtpZH1gfT5cblx0XHRcdFx0PGEgaHJlZj17YGh0dHBzOi8veW91dHUuYmUvJHtpZH1gfT5cblx0XHRcdFx0XHQ8aDE+e3RpdGxlfTwvaDE+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmFwaGljc1wiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3RodW1ibmFpbFVSTH0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdFx0XHRcdDxTdGF0c0NoYXJ0IHNuYXBzaG90cz17c25hcHNob3RzfSBzY2FsZT17dGhpcy5wcm9wcy5jaGFydFNjYWxlfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgZGF0YVBvaW50Q291bnQ9e3RoaXMucHJvcHMuY2hhcnREYXRhUG91bnRDb3VudH0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8U3RhdHNDaGFuZ2Ugc25hcHNob3RzPXtzbmFwc2hvdHN9IC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvYXJ0aWNsZT5cblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudENvbnRhaW5lcihWaWRlbywgZ3JhcGhxbGBcblx0ZnJhZ21lbnQgVmlkZW9fdmlkZW8gb24gVmlkZW8ge1xuXHRcdGlkXHRcblx0XHRkZXRhaWxzIHtcblx0XHRcdHRpdGxlXG5cdFx0XHR0aHVtYm5haWxVUkxcblx0XHR9XG5cdFx0c25hcHNob3RzOiBzdGF0c0J5QWdlKHNlY29uZHM6ICRzdGF0c0FnZSkge1xuICAgICAgLi4uU3RhdHNDaGFydF9zbmFwc2hvdHNcblx0XHRcdC4uLlN0YXRzQ2hhbmdlX3NuYXBzaG90c1xuXHRcdH1cblx0fVxuYClcbiJdfQ==