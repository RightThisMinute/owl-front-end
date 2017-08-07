"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const { createFragmentContainer, graphql } = require('react-relay');
const StatsChange_1 = require("../StatsChange");
const StatsChart_1 = require("../StatsChart");
require("../../../../src/components/Video/style.pcss");
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
		snapshots: statsByAge(seconds: 86400) {
      ...StatsChart_snapshots
			...StatsChange_snapshots
		}
	}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFDOUIsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVuRSxnREFBOEQ7QUFDOUQsOENBQTJEO0FBRTNELHVEQUFvRDtBQWlCcEQsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUFxQjtJQUU5QyxNQUFNO1FBQ0wsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEdBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFDN0MsTUFBTSxFQUNMLEtBQUssR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUNqQixZQUFZLEdBQUcsc0NBQXNDLEVBQ3JELEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUVsQyxNQUFNLENBQUMsQ0FDTixpQ0FBUyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUMzQywyQkFBRyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsRUFBRTtnQkFDaEMsZ0NBQUssS0FBSyxDQUFNO2dCQUNoQiw2QkFBSyxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUk7Z0JBQ3RDLG9CQUFDLG9CQUFVLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSTtnQkFDcEMsb0JBQUMscUJBQVcsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLENBQ2xDLENBQ0ssQ0FDVixDQUFBO0lBQ0YsQ0FBQztDQUVEO0FBRUQsa0JBQWUsdUJBQXVCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQTs7Ozs7Ozs7Ozs7O0NBWXBELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSByZXF1aXJlKCdyZWFjdC1yZWxheScpXG5cbmltcG9ydCBTdGF0c0NoYW5nZSwgeyBTdGF0c0NoYW5nZVByb3BzIH0gZnJvbSAnLi4vU3RhdHNDaGFuZ2UnXG5pbXBvcnQgU3RhdHNDaGFydCwgeyBTdGF0c0NoYXJ0UHJvcHMgfSBmcm9tICcuLi9TdGF0c0NoYXJ0J1xuXG5pbXBvcnQgJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvL3N0eWxlLnBjc3MnXG5cblxuaW50ZXJmYWNlIFNuYXBzaG90UHJvcHMgZXh0ZW5kcyBTdGF0c0NoYXJ0UHJvcHMsIFN0YXRzQ2hhbmdlUHJvcHMge31cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1Byb3BzIGV4dGVuZHMgU25hcHNob3RQcm9wcyB7XG5cdGlkOiBzdHJpbmcsXG5cdGRldGFpbHM6IHtcblx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdHRodW1ibmFpbFVSTDogc3RyaW5nLFxuXHR9LFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHR2aWRlbzogVmlkZW9Qcm9wc1xufVxuXG5jbGFzcyBWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgaWQsIHNuYXBzaG90cz1bXSB9ID0gdGhpcy5wcm9wcy52aWRlb1xuXHRcdGNvbnN0IHtcblx0XHRcdHRpdGxlID0gYFske2lkfV1gLFxuXHRcdFx0dGh1bWJuYWlsVVJMID0gJ2h0dHBzOi8vd3d3LmZpbGxtdXJyYXkuY29tLzE5MjAvMTA4MCdcblx0XHR9ID0gdGhpcy5wcm9wcy52aWRlby5kZXRhaWxzIHx8IHt9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPVwidmlkZW9cIiBpZD17YHZpZGVvLSR7aWR9YH0+XG5cdFx0XHRcdDxhIGhyZWY9e2BodHRwczovL3lvdXR1LmJlLyR7aWR9YH0+XG5cdFx0XHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXt0aHVtYm5haWxVUkx9IGFsdD17dGl0bGV9IC8+XG5cdFx0XHRcdFx0PFN0YXRzQ2hhcnQgc25hcHNob3RzPXtzbmFwc2hvdHN9IC8+XG5cdFx0XHRcdFx0PFN0YXRzQ2hhbmdlIHNuYXBzaG90cz17c25hcHNob3RzfSAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2FydGljbGU+XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnRDb250YWluZXIoVmlkZW8sIGdyYXBocWxgXG5cdGZyYWdtZW50IFZpZGVvX3ZpZGVvIG9uIFZpZGVvIHtcblx0XHRpZFx0XG5cdFx0ZGV0YWlscyB7XG5cdFx0XHR0aXRsZVxuXHRcdFx0dGh1bWJuYWlsVVJMXG5cdFx0fVxuXHRcdHNuYXBzaG90czogc3RhdHNCeUFnZShzZWNvbmRzOiA4NjQwMCkge1xuICAgICAgLi4uU3RhdHNDaGFydF9zbmFwc2hvdHNcblx0XHRcdC4uLlN0YXRzQ2hhbmdlX3NuYXBzaG90c1xuXHRcdH1cblx0fVxuYClcbiJdfQ==