"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const { createFragmentContainer, graphql } = require('react-relay');
const SetActiveVideos_1 = require("../mutations/SetActiveVideos");
class SetActiveVideosPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: props.activeVideos.map(({ id }) => id).join("\n") + "\n"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if (target.name === 'ids')
            value = value
                .split("\n")
                .filter(url => url.trim() !== '')
                .map((url) => {
                const match = url.trim().match(/(?:[?&]v=|embed\/|youtu\.be\/)([\w\d_\-]*)/i);
                return match !== null ? match[1] : url;
            })
                .join("\n") + "\n";
        this.setState({
            [target.name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const ids = this.state.ids.trim().split("\n");
        SetActiveVideos_1.default.commit(this.props.relay.environment, ids);
    }
    render() {
        return (React.createElement("section", { className: "set-active-videos" },
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("p", null, "Put each URL on a separate line."),
                React.createElement("textarea", { name: "ids", value: this.state.ids, onChange: this.handleInputChange }),
                React.createElement("button", null, "Replace Active Videos"))));
    }
}
exports.default = createFragmentContainer(SetActiveVideosPage, graphql `
	fragment SetActiveVideosPage_activeVideos on Video @relay(plural: true) {
		id
	}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0QWN0aXZlVmlkZW9zUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NldEFjdGl2ZVZpZGVvc1BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBQzlCLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFFbkUsa0VBQWtFO0FBWWxFLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxTQUF1QjtJQUU5RCxZQUFZLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRVosSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLEdBQUcsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7U0FDN0QsQ0FBQTtRQUVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQUs7UUFDOUIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUMzQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFFdEUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7WUFDekIsS0FBSyxHQUFHLEtBQUs7aUJBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDWCxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ2hDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Z0JBQ1IsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FDN0IsNkNBQTZDLENBQzdDLENBQUE7Z0JBQ0QsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtZQUN2QyxDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUVwQixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQUs7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBRXRCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU3Qyx5QkFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCxNQUFNO1FBQ0wsTUFBTSxDQUFDLENBQ04saUNBQVMsU0FBUyxFQUFDLG1CQUFtQjtZQUNyQyw4QkFBTSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ2hDLGtFQUF1QztnQkFDdkMsa0NBQVUsSUFBSSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQ2hDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQ3hDO2dCQUNGLDREQUFzQyxDQUNoQyxDQUNFLENBQ1YsQ0FBQTtJQUNGLENBQUM7Q0FFRDtBQUdELGtCQUFnQix1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUE7Ozs7Q0FJbkUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHsgY3JlYXRlRnJhZ21lbnRDb250YWluZXIsIGdyYXBocWwgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlbGF5JylcblxuaW1wb3J0IFNldEFjdGl2ZVZpZGVvc011dGF0aW9uIGZyb20gJy4uL211dGF0aW9ucy9TZXRBY3RpdmVWaWRlb3MnXG5cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0YWN0aXZlVmlkZW9zOiB7IGlkOiBzdHJpbmcgfVtdXG5cdHJlbGF5OiB7IGVudmlyb25tZW50OiBhbnkgfVxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuXHRpZHM6IHN0cmluZ1xufVxuXG5jbGFzcyBTZXRBY3RpdmVWaWRlb3NQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aWRzOiBwcm9wcy5hY3RpdmVWaWRlb3MubWFwKCh7IGlkIH0pID0+IGlkKS5qb2luKFwiXFxuXCIpICsgXCJcXG5cIlxuXHRcdH1cblxuXHRcdHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcblx0fVxuXG5cdHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOiB2b2lkIHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcblx0XHRsZXQgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlXG5cblx0XHRpZiAodGFyZ2V0Lm5hbWUgPT09ICdpZHMnKVxuXHRcdFx0dmFsdWUgPSB2YWx1ZVxuXHRcdFx0XHQuc3BsaXQoXCJcXG5cIilcblx0XHRcdFx0LmZpbHRlcih1cmwgPT4gdXJsLnRyaW0oKSAhPT0gJycpXG5cdFx0XHRcdC5tYXAoKHVybCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG1hdGNoID0gdXJsLnRyaW0oKS5tYXRjaChcblx0XHRcdFx0XHRcdC8oPzpbPyZddj18ZW1iZWRcXC98eW91dHVcXC5iZVxcLykoW1xcd1xcZF9cXC1dKikvaVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXSA6IHVybFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuam9pbihcIlxcblwiKSArIFwiXFxuXCJcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W3RhcmdldC5uYW1lXTogdmFsdWVcblx0XHR9KVxuXHR9XG5cblx0cHJpdmF0ZSBoYW5kbGVTdWJtaXQoZXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRjb25zdCBpZHMgPSB0aGlzLnN0YXRlLmlkcy50cmltKCkuc3BsaXQoXCJcXG5cIilcblxuXHRcdFNldEFjdGl2ZVZpZGVvc011dGF0aW9uLmNvbW1pdCh0aGlzLnByb3BzLnJlbGF5LmVudmlyb25tZW50LCBpZHMpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInNldC1hY3RpdmUtdmlkZW9zXCI+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PHA+UHV0IGVhY2ggVVJMIG9uIGEgc2VwYXJhdGUgbGluZS48L3A+XG5cdFx0XHRcdFx0PHRleHRhcmVhIG5hbWU9XCJpZHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pZHN9XG5cdFx0XHRcdFx0ICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvbj5SZXBsYWNlIEFjdGl2ZSBWaWRlb3M8L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdClcblx0fVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgIGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyKFNldEFjdGl2ZVZpZGVvc1BhZ2UsIGdyYXBocWxgXG5cdGZyYWdtZW50IFNldEFjdGl2ZVZpZGVvc1BhZ2VfYWN0aXZlVmlkZW9zIG9uIFZpZGVvIEByZWxheShwbHVyYWw6IHRydWUpIHtcblx0XHRpZFxuXHR9XG5gKVxuIl19