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
                    React.createElement(StatsChart_1.default, { snapshots: snapshots, scale: this.props.chartScale })),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFDOUIsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVuRSwrQ0FBNkQ7QUFDN0QsNkNBQTBEO0FBRTFELG9EQUFpRDtBQWtCakQsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUFxQjtJQUU5QyxNQUFNO1FBQ0wsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEdBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFDN0MsTUFBTSxFQUNMLEtBQUssR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUNqQixZQUFZLEdBQUcsc0NBQXNDLEVBQ3JELEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUVsQyxNQUFNLENBQUMsQ0FDTixpQ0FBUyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUMzQywyQkFBRyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsRUFBRTtnQkFDaEMsZ0NBQUssS0FBSyxDQUFNO2dCQUNoQiw2QkFBSyxTQUFTLEVBQUMsVUFBVTtvQkFDeEIsNkJBQUssR0FBRyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxHQUFJO29CQUN0QyxvQkFBQyxvQkFBVSxJQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFJLENBQzdEO2dCQUNOLG9CQUFDLHFCQUFXLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSSxDQUNsQyxDQUNLLENBQ1YsQ0FBQTtJQUNGLENBQUM7Q0FFRDtBQUVELGtCQUFlLHVCQUF1QixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUE7Ozs7Ozs7Ozs7OztDQVlwRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgeyBjcmVhdGVGcmFnbWVudENvbnRhaW5lciwgZ3JhcGhxbCB9ID0gcmVxdWlyZSgncmVhY3QtcmVsYXknKVxuXG5pbXBvcnQgU3RhdHNDaGFuZ2UsIHsgU3RhdHNDaGFuZ2VQcm9wcyB9IGZyb20gJy4vU3RhdHNDaGFuZ2UnXG5pbXBvcnQgU3RhdHNDaGFydCwgeyBTdGF0c0NoYXJ0UHJvcHMgfSBmcm9tICcuL1N0YXRzQ2hhcnQnXG5cbmltcG9ydCAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlkZW8vc3R5bGUucGNzcydcblxuXG5pbnRlcmZhY2UgU25hcHNob3RQcm9wcyBleHRlbmRzIFN0YXRzQ2hhcnRQcm9wcywgU3RhdHNDaGFuZ2VQcm9wcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvUHJvcHMgZXh0ZW5kcyBTbmFwc2hvdFByb3BzIHtcblx0aWQ6IHN0cmluZyxcblx0ZGV0YWlsczoge1xuXHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0dGh1bWJuYWlsVVJMOiBzdHJpbmcsXG5cdH0sXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdHZpZGVvOiBWaWRlb1Byb3BzXG5cdGNoYXJ0U2NhbGU6IG51bWJlclxufVxuXG5jbGFzcyBWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgaWQsIHNuYXBzaG90cz1bXSB9ID0gdGhpcy5wcm9wcy52aWRlb1xuXHRcdGNvbnN0IHtcblx0XHRcdHRpdGxlID0gYFske2lkfV1gLFxuXHRcdFx0dGh1bWJuYWlsVVJMID0gJ2h0dHBzOi8vd3d3LmZpbGxtdXJyYXkuY29tLzE5MjAvMTA4MCdcblx0XHR9ID0gdGhpcy5wcm9wcy52aWRlby5kZXRhaWxzIHx8IHt9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPVwidmlkZW9cIiBpZD17YHZpZGVvLSR7aWR9YH0+XG5cdFx0XHRcdDxhIGhyZWY9e2BodHRwczovL3lvdXR1LmJlLyR7aWR9YH0+XG5cdFx0XHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JhcGhpY3NcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXt0aHVtYm5haWxVUkx9IGFsdD17dGl0bGV9IC8+XG5cdFx0XHRcdFx0XHQ8U3RhdHNDaGFydCBzbmFwc2hvdHM9e3NuYXBzaG90c30gc2NhbGU9e3RoaXMucHJvcHMuY2hhcnRTY2FsZX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8U3RhdHNDaGFuZ2Ugc25hcHNob3RzPXtzbmFwc2hvdHN9IC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvYXJ0aWNsZT5cblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudENvbnRhaW5lcihWaWRlbywgZ3JhcGhxbGBcblx0ZnJhZ21lbnQgVmlkZW9fdmlkZW8gb24gVmlkZW8ge1xuXHRcdGlkXHRcblx0XHRkZXRhaWxzIHtcblx0XHRcdHRpdGxlXG5cdFx0XHR0aHVtYm5haWxVUkxcblx0XHR9XG5cdFx0c25hcHNob3RzOiBzdGF0c0J5QWdlKHNlY29uZHM6ICRzdGF0c0FnZSkge1xuICAgICAgLi4uU3RhdHNDaGFydF9zbmFwc2hvdHNcblx0XHRcdC4uLlN0YXRzQ2hhbmdlX3NuYXBzaG90c1xuXHRcdH1cblx0fVxuYClcbiJdfQ==