"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const { createFragmentContainer, graphql } = require('react-relay');
const StatsChange_1 = require("../StatsChange");
const StatsChart_1 = require("../StatsChart");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFDOUIsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVuRSxnREFBOEQ7QUFDOUQsOENBQTJEO0FBaUIzRCxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQXFCO0lBRTlDLE1BQU07UUFDTCxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsR0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtRQUM3QyxNQUFNLEVBQ0wsS0FBSyxHQUFHLElBQUksRUFBRSxHQUFHLEVBQ2pCLFlBQVksR0FBRyxzQ0FBc0MsRUFDckQsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFBO1FBRWxDLE1BQU0sQ0FBQyxDQUNOLGlDQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUFFLDJCQUFHLElBQUksRUFBRSxvQkFBb0IsRUFBRSxFQUFFO2dCQUM1RCxnQ0FBSyxLQUFLLENBQU07Z0JBQ2hCLDZCQUFLLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBSTtnQkFDdEMsb0JBQUMsb0JBQVUsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJO2dCQUNwQyxvQkFBQyxxQkFBVyxJQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUksQ0FDbEMsQ0FBVSxDQUNkLENBQUE7SUFDRixDQUFDO0NBRUQ7QUFFRCxrQkFBZSx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFBOzs7Ozs7Ozs7Ozs7Q0FZcEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHsgY3JlYXRlRnJhZ21lbnRDb250YWluZXIsIGdyYXBocWwgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlbGF5JylcblxuaW1wb3J0IFN0YXRzQ2hhbmdlLCB7IFN0YXRzQ2hhbmdlUHJvcHMgfSBmcm9tICcuLi9TdGF0c0NoYW5nZSdcbmltcG9ydCBTdGF0c0NoYXJ0LCB7IFN0YXRzQ2hhcnRQcm9wcyB9IGZyb20gJy4uL1N0YXRzQ2hhcnQnXG5cblxuaW50ZXJmYWNlIFNuYXBzaG90UHJvcHMgZXh0ZW5kcyBTdGF0c0NoYXJ0UHJvcHMsIFN0YXRzQ2hhbmdlUHJvcHMge31cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1Byb3BzIGV4dGVuZHMgU25hcHNob3RQcm9wcyB7XG5cdGlkOiBzdHJpbmcsXG5cdGRldGFpbHM6IHtcblx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdHRodW1ibmFpbFVSTDogc3RyaW5nLFxuXHR9LFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHR2aWRlbzogVmlkZW9Qcm9wc1xufVxuXG5jbGFzcyBWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgaWQsIHNuYXBzaG90cz1bXSB9ID0gdGhpcy5wcm9wcy52aWRlb1xuXHRcdGNvbnN0IHtcblx0XHRcdHRpdGxlID0gYFske2lkfV1gLFxuXHRcdFx0dGh1bWJuYWlsVVJMID0gJ2h0dHBzOi8vd3d3LmZpbGxtdXJyYXkuY29tLzE5MjAvMTA4MCdcblx0XHR9ID0gdGhpcy5wcm9wcy52aWRlby5kZXRhaWxzIHx8IHt9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGFydGljbGUgaWQ9e2B2aWRlby0ke2lkfWB9PjxhIGhyZWY9e2BodHRwczovL3lvdXR1LmJlLyR7aWR9YH0+XG5cdFx0XHRcdDxoMT57dGl0bGV9PC9oMT5cblx0XHRcdFx0PGltZyBzcmM9e3RodW1ibmFpbFVSTH0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdFx0PFN0YXRzQ2hhcnQgc25hcHNob3RzPXtzbmFwc2hvdHN9IC8+XG5cdFx0XHRcdDxTdGF0c0NoYW5nZSBzbmFwc2hvdHM9e3NuYXBzaG90c30gLz5cblx0XHRcdDwvYT48L2FydGljbGU+XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnRDb250YWluZXIoVmlkZW8sIGdyYXBocWxgXG5cdGZyYWdtZW50IFZpZGVvX3ZpZGVvIG9uIFZpZGVvIHtcblx0XHRpZFx0XG5cdFx0ZGV0YWlscyB7XG5cdFx0XHR0aXRsZVxuXHRcdFx0dGh1bWJuYWlsVVJMXG5cdFx0fVxuXHRcdHNuYXBzaG90czogc3RhdHNCeUFnZShzZWNvbmRzOiA4NjQwMCkge1xuICAgICAgLi4uU3RhdHNDaGFydF9zbmFwc2hvdHNcblx0XHRcdC4uLlN0YXRzQ2hhbmdlX3NuYXBzaG90c1xuXHRcdH1cblx0fVxuYClcbiJdfQ==