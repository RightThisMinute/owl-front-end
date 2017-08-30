"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const { createFragmentContainer, graphql } = require('react-relay');
const StatsChange_1 = require("./StatsChange");
const StatsChart_1 = require("./StatsChart");
require("../../../src/components/Video/style.pcss");
class Video extends React.Component {
    render() {
        const { video, style = {} } = this.props;
        const { id, snapshots = [] } = video;
        const { title = `[${id}]`, thumbnailURL = 'https://www.fillmurray.com/1920/1080' } = video.details || {};
        return (React.createElement("article", { className: "video", id: this.props.id, style: style },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBOEI7QUFDOUIsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVuRSwrQ0FBNkQ7QUFDN0QsNkNBQTBEO0FBRTFELG9EQUFpRDtBQXFCakQsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUFxQjtJQUU5QyxNQUFNO1FBQ0wsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN0QyxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsR0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUE7UUFDbEMsTUFBTSxFQUNMLEtBQUssR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUNqQixZQUFZLEdBQUcsc0NBQXNDLEVBQ3JELEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7UUFFdkIsTUFBTSxDQUFDLENBQ04saUNBQVMsU0FBUyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUs7WUFDekQsMkJBQUcsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEVBQUU7Z0JBQ2hDLGdDQUFLLEtBQUssQ0FBTTtnQkFDaEIsNkJBQUssU0FBUyxFQUFDLFVBQVU7b0JBQ3hCLDZCQUFLLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBSTtvQkFDdEMsb0JBQUMsb0JBQVUsSUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDbEQsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUksQ0FDekQ7Z0JBQ04sb0JBQUMscUJBQVcsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLENBQ2xDLENBQ0ssQ0FDVixDQUFBO0lBQ0YsQ0FBQztDQUVEO0FBRUQsa0JBQWUsdUJBQXVCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQTs7Ozs7Ozs7Ozs7O0NBWXBELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSByZXF1aXJlKCdyZWFjdC1yZWxheScpXG5cbmltcG9ydCBTdGF0c0NoYW5nZSwgeyBTdGF0c0NoYW5nZVByb3BzIH0gZnJvbSAnLi9TdGF0c0NoYW5nZSdcbmltcG9ydCBTdGF0c0NoYXJ0LCB7IFN0YXRzQ2hhcnRQcm9wcyB9IGZyb20gJy4vU3RhdHNDaGFydCdcblxuaW1wb3J0ICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWRlby9zdHlsZS5wY3NzJ1xuXG5cbmludGVyZmFjZSBTbmFwc2hvdFByb3BzIGV4dGVuZHMgU3RhdHNDaGFydFByb3BzLCBTdGF0c0NoYW5nZVByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9Qcm9wcyBleHRlbmRzIFNuYXBzaG90UHJvcHMge1xuXHRpZDogc3RyaW5nLFxuXHRkZXRhaWxzOiB7XG5cdFx0dGl0bGU6IHN0cmluZyxcblx0XHR0aHVtYm5haWxVUkw6IHN0cmluZyxcblx0fSxcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0dmlkZW86IFZpZGVvUHJvcHNcblx0Y2hhcnRTY2FsZTogbnVtYmVyXG5cdGNoYXJ0RGF0YVBvdW50Q291bnQ6IG51bWJlclxuXHRpZDogc3RyaW5nXG5cdHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xufVxuXG5jbGFzcyBWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgdmlkZW8sIHN0eWxlPXt9IH0gPSB0aGlzLnByb3BzXG5cdFx0Y29uc3QgeyBpZCwgc25hcHNob3RzPVtdIH0gPSB2aWRlb1xuXHRcdGNvbnN0IHtcblx0XHRcdHRpdGxlID0gYFske2lkfV1gLFxuXHRcdFx0dGh1bWJuYWlsVVJMID0gJ2h0dHBzOi8vd3d3LmZpbGxtdXJyYXkuY29tLzE5MjAvMTA4MCdcblx0XHR9ID0gdmlkZW8uZGV0YWlscyB8fCB7fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cInZpZGVvXCIgaWQ9e3RoaXMucHJvcHMuaWR9IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdDxhIGhyZWY9e2BodHRwczovL3lvdXR1LmJlLyR7aWR9YH0+XG5cdFx0XHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JhcGhpY3NcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXt0aHVtYm5haWxVUkx9IGFsdD17dGl0bGV9IC8+XG5cdFx0XHRcdFx0XHQ8U3RhdHNDaGFydCBzbmFwc2hvdHM9e3NuYXBzaG90c30gc2NhbGU9e3RoaXMucHJvcHMuY2hhcnRTY2FsZX1cblx0XHRcdFx0XHRcdCAgICAgICAgICAgIGRhdGFQb2ludENvdW50PXt0aGlzLnByb3BzLmNoYXJ0RGF0YVBvdW50Q291bnR9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PFN0YXRzQ2hhbmdlIHNuYXBzaG90cz17c25hcHNob3RzfSAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2FydGljbGU+XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnRDb250YWluZXIoVmlkZW8sIGdyYXBocWxgXG5cdGZyYWdtZW50IFZpZGVvX3ZpZGVvIG9uIFZpZGVvIHtcblx0XHRpZFx0XG5cdFx0ZGV0YWlscyB7XG5cdFx0XHR0aXRsZVxuXHRcdFx0dGh1bWJuYWlsVVJMXG5cdFx0fVxuXHRcdHNuYXBzaG90czogc3RhdHNCeUFnZShzZWNvbmRzOiAkc3RhdHNBZ2UpIHtcbiAgICAgIC4uLlN0YXRzQ2hhcnRfc25hcHNob3RzXG5cdFx0XHQuLi5TdGF0c0NoYW5nZV9zbmFwc2hvdHNcblx0XHR9XG5cdH1cbmApXG4iXX0=