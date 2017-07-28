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
                React.createElement("textarea", { name: "ids", value: this.state.ids, rows: 32, cols: 75, onChange: this.handleInputChange }),
                React.createElement("button", null, "Replace Active Videos"))));
    }
}
exports.default = createFragmentContainer(SetActiveVideosPage, graphql `
	fragment SetActiveVideosPage_activeVideos on Video @relay(plural: true) {
		id
	}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0QWN0aXZlVmlkZW9zUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NldEFjdGl2ZVZpZGVvc1BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBQzlCLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFFbkUsa0VBQWtFO0FBWWxFLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxTQUF1QjtJQUU5RCxZQUFZLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRVosSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLEdBQUcsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7U0FDN0QsQ0FBQTtRQUVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQUs7UUFDOUIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUMzQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFFdEUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7WUFDekIsS0FBSyxHQUFHLEtBQUs7aUJBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDWCxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ2hDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Z0JBQ1IsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FDN0IsNkNBQTZDLENBQzdDLENBQUE7Z0JBQ0QsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtZQUN2QyxDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUVwQixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQUs7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBRXRCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU3Qyx5QkFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCxNQUFNO1FBQ0wsTUFBTSxDQUFDLENBQ04saUNBQVMsU0FBUyxFQUFDLG1CQUFtQjtZQUNyQyw4QkFBTSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ2hDLGtFQUF1QztnQkFDdkMsa0NBQVUsSUFBSSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUNwRCxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUN4QztnQkFDRiw0REFBc0MsQ0FDaEMsQ0FDRSxDQUNWLENBQUE7SUFDRixDQUFDO0NBRUQ7QUFHRCxrQkFBZ0IsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFBOzs7O0NBSW5FLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSByZXF1aXJlKCdyZWFjdC1yZWxheScpXG5cbmltcG9ydCBTZXRBY3RpdmVWaWRlb3NNdXRhdGlvbiBmcm9tICcuLi9tdXRhdGlvbnMvU2V0QWN0aXZlVmlkZW9zJ1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFjdGl2ZVZpZGVvczogeyBpZDogc3RyaW5nIH1bXVxuXHRyZWxheTogeyBlbnZpcm9ubWVudDogYW55IH1cbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcblx0aWRzOiBzdHJpbmdcbn1cblxuY2xhc3MgU2V0QWN0aXZlVmlkZW9zUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlkczogcHJvcHMuYWN0aXZlVmlkZW9zLm1hcCgoeyBpZCB9KSA9PiBpZCkuam9pbihcIlxcblwiKSArIFwiXFxuXCJcblx0XHR9XG5cblx0XHR0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG5cdH1cblxuXHRwcml2YXRlIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KTogdm9pZCB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG5cdFx0bGV0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZVxuXG5cdFx0aWYgKHRhcmdldC5uYW1lID09PSAnaWRzJylcblx0XHRcdHZhbHVlID0gdmFsdWVcblx0XHRcdFx0LnNwbGl0KFwiXFxuXCIpXG5cdFx0XHRcdC5maWx0ZXIodXJsID0+IHVybC50cmltKCkgIT09ICcnKVxuXHRcdFx0XHQubWFwKCh1cmwpID0+IHtcblx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IHVybC50cmltKCkubWF0Y2goXG5cdFx0XHRcdFx0XHQvKD86Wz8mXXY9fGVtYmVkXFwvfHlvdXR1XFwuYmVcXC8pKFtcXHdcXGRfXFwtXSopL2lcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0gOiB1cmxcblx0XHRcdFx0fSlcblx0XHRcdFx0LmpvaW4oXCJcXG5cIikgKyBcIlxcblwiXG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFt0YXJnZXQubmFtZV06IHZhbHVlXG5cdFx0fSlcblx0fVxuXG5cdHByaXZhdGUgaGFuZGxlU3VibWl0KGV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG5cdFx0Y29uc3QgaWRzID0gdGhpcy5zdGF0ZS5pZHMudHJpbSgpLnNwbGl0KFwiXFxuXCIpXG5cblx0XHRTZXRBY3RpdmVWaWRlb3NNdXRhdGlvbi5jb21taXQodGhpcy5wcm9wcy5yZWxheS5lbnZpcm9ubWVudCwgaWRzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJzZXQtYWN0aXZlLXZpZGVvc1wiPlxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdDxwPlB1dCBlYWNoIFVSTCBvbiBhIHNlcGFyYXRlIGxpbmUuPC9wPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPVwiaWRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuaWRzfSByb3dzPXszMn0gY29scz17NzV9XG5cdFx0XHRcdFx0ICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvbj5SZXBsYWNlIEFjdGl2ZSBWaWRlb3M8L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdClcblx0fVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgIGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyKFNldEFjdGl2ZVZpZGVvc1BhZ2UsIGdyYXBocWxgXG5cdGZyYWdtZW50IFNldEFjdGl2ZVZpZGVvc1BhZ2VfYWN0aXZlVmlkZW9zIG9uIFZpZGVvIEByZWxheShwbHVyYWw6IHRydWUpIHtcblx0XHRpZFxuXHR9XG5gKVxuIl19