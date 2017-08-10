"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const { createFragmentContainer, graphql } = require('react-relay');
const store_1 = require("../store");
const reducer_1 = require("../reducer");
const SetActiveVideos_mutation_1 = require("./SetActiveVideosPage/SetActiveVideos.mutation");
require("../../../src/components/SetActiveVideosPage/style.pcss");
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
        SetActiveVideos_mutation_1.default.commit(this.props.relay.environment, ids);
    }
    componentWillUnmount() {
        store_1.store.dispatch({ type: reducer_1.Action.ResetSetActiveVideosFlags });
    }
    render() {
        let message = null;
        let messageClass = '';
        let buttonText = null;
        let disabled = false;
        if (this.props.saved) {
            messageClass = 'success';
            message = 'Set active videos successfully.';
        }
        else if (this.props.saving) {
            disabled = true;
            buttonText = 'Saving...';
        }
        else if (this.props.error) {
            messageClass = 'error';
            message = `Failed setting active videos (${this.props.error.message}).`;
        }
        if (message)
            message = (React.createElement("p", { className: `status ${messageClass}` }, message));
        return (React.createElement("section", { className: "set-active-videos" },
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("p", null, "Put each URL on a separate line."),
                React.createElement("p", { className: "note" }, "Video IDs will be automatically extracted from pasted URLs and replace the URL. If a pasted URL isn't replaced, that likely means it wasn't copied correctly. Only YouTube video URLs are accepted."),
                React.createElement("textarea", { name: "ids", value: this.state.ids, rows: 32, cols: 75, onChange: this.handleInputChange, disabled: disabled }),
                message,
                React.createElement("button", { disabled: disabled }, buttonText || 'Set Active Videos'))));
    }
}
function mapStateToProps(storeState, props) {
    const { rtmOwl: { setActiveVideos: state } } = storeState;
    return Object.assign({}, props, {
        saved: state.setSuccessfully,
        saving: state.currentlyBeingSet,
        error: state.error,
    });
}
const ReduxSetActiveVideosPage = react_redux_1.connect(mapStateToProps)(SetActiveVideosPage);
exports.default = createFragmentContainer(ReduxSetActiveVideosPage, graphql `
	fragment SetActiveVideosPage_activeVideos on Video @relay(plural: true) {
		id
	}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0QWN0aXZlVmlkZW9zUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NldEFjdGl2ZVZpZGVvc1BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBQzlCLDZDQUFxQztBQUNyQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBRW5FLG9DQUE0QztBQUM1Qyx3Q0FBbUM7QUFDbkMsNkZBQ3NEO0FBRXRELGtFQUErRDtBQXNCL0QseUJBQTBCLFNBQVEsS0FBSyxDQUFDLFNBQXVCO0lBRTlELFlBQVksS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1osR0FBRyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSTtTQUM3RCxDQUFBO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBSztRQUM5QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQzNCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUV0RSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUN6QixLQUFLLEdB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Q1YsQ0FBQTtJQUNGLENBQUM7Q0FFRDtBQUdELHlCQUF5QixVQUFzQixFQUFFLEtBQVk7SUFDNUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQTtJQUV6RCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFDO1FBQzlCLEtBQUssRUFBRSxLQUFLLENBQUMsZUFBZTtRQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtRQUMvQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7S0FDbEIsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUdELE1BQU0sd0JBQXdCLEdBQUcscUJBQU8sQ0FDdkMsZUFBZSxDQUNmLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtBQUd0QixrQkFBZ0IsdUJBQXVCLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFBOzs7O0NBSXhFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5jb25zdCB7IGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyLCBncmFwaHFsIH0gPSByZXF1aXJlKCdyZWFjdC1yZWxheScpXG5cbmltcG9ydCB7IHN0b3JlLCBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2VyJ1xuaW1wb3J0IFNldEFjdGl2ZVZpZGVvc011dGF0aW9uXG5cdGZyb20gJy4vU2V0QWN0aXZlVmlkZW9zUGFnZS9TZXRBY3RpdmVWaWRlb3MubXV0YXRpb24nXG5cbmltcG9ydCAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU2V0QWN0aXZlVmlkZW9zUGFnZS9zdHlsZS5wY3NzJ1xuXG5cbmludGVyZmFjZSBPd25Qcm9wcyB7XG5cdGFjdGl2ZVZpZGVvczogeyBpZDogc3RyaW5nIH1bXVxuXHRyZWxheTogeyBlbnZpcm9ubWVudDogYW55IH1cbn1cblxuaW50ZXJmYWNlIFN0YXRlUHJvcHMge1xuXHRzYXZlZDogYm9vbGVhbixcblx0c2F2aW5nOiBib29sZWFuLFxuXHRlcnJvcjogRXJyb3J8bnVsbFxufVxuXG5pbnRlcmZhY2UgRGlzcGF0Y2hQcm9wcyB7fVxuXG50eXBlIFByb3BzID0gT3duUHJvcHMgJiBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wc1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuXHRpZHM6IHN0cmluZ1xufVxuXG5jbGFzcyBTZXRBY3RpdmVWaWRlb3NQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aWRzOiBwcm9wcy5hY3RpdmVWaWRlb3MubWFwKCh7IGlkIH0pID0+IGlkKS5qb2luKFwiXFxuXCIpICsgXCJcXG5cIlxuXHRcdH1cblxuXHRcdHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcblx0fVxuXG5cdHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOiB2b2lkIHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcblx0XHRsZXQgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlXG5cblx0XHRpZiAodGFyZ2V0Lm5hbWUgPT09ICdpZHMnKVxuXHRcdFx0dmFsdWUgPSB2YWx1ZVxuXHRcdFx0XHQuc3BsaXQoXCJcXG5cIilcblx0XHRcdFx0LmZpbHRlcih1cmwgPT4gdXJsLnRyaW0oKSAhPT0gJycpXG5cdFx0XHRcdC5tYXAoKHVybCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG1hdGNoID0gdXJsLnRyaW0oKS5tYXRjaChcblx0XHRcdFx0XHRcdC8oPzpbPyZddj18ZW1iZWRcXC98eW91dHVcXC5iZVxcLykoW1xcd1xcZF9cXC1dKikvaVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXSA6IHVybFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuam9pbihcIlxcblwiKSArIFwiXFxuXCJcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W3RhcmdldC5uYW1lXTogdmFsdWVcblx0XHR9KVxuXHR9XG5cblx0cHJpdmF0ZSBoYW5kbGVTdWJtaXQoZXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRjb25zdCBpZHMgPSB0aGlzLnN0YXRlLmlkcy50cmltKCkuc3BsaXQoXCJcXG5cIilcblxuXHRcdFNldEFjdGl2ZVZpZGVvc011dGF0aW9uLmNvbW1pdCh0aGlzLnByb3BzLnJlbGF5LmVudmlyb25tZW50LCBpZHMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcblx0XHRzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IEFjdGlvbi5SZXNldFNldEFjdGl2ZVZpZGVvc0ZsYWdzIH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IG1lc3NhZ2U6IHN0cmluZ3xSZWFjdC5SZWFjdE5vZGV8bnVsbCA9IG51bGxcblx0XHRsZXQgbWVzc2FnZUNsYXNzOiBzdHJpbmcgPSAnJ1xuXHRcdGxldCBidXR0b25UZXh0OiBzdHJpbmd8bnVsbCA9IG51bGxcblx0XHRsZXQgZGlzYWJsZWQgPSBmYWxzZVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuc2F2ZWQpIHtcblx0XHRcdG1lc3NhZ2VDbGFzcyA9ICdzdWNjZXNzJ1xuXHRcdFx0bWVzc2FnZSA9ICdTZXQgYWN0aXZlIHZpZGVvcyBzdWNjZXNzZnVsbHkuJ1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLnByb3BzLnNhdmluZykge1xuXHRcdFx0ZGlzYWJsZWQgPSB0cnVlXG5cdFx0XHRidXR0b25UZXh0ID0gJ1NhdmluZy4uLidcblx0XHR9XG5cdFx0ZWxzZSBpZiAodGhpcy5wcm9wcy5lcnJvcikge1xuXHRcdFx0bWVzc2FnZUNsYXNzID0gJ2Vycm9yJ1xuXHRcdFx0bWVzc2FnZSA9IGBGYWlsZWQgc2V0dGluZyBhY3RpdmUgdmlkZW9zICgke3RoaXMucHJvcHMuZXJyb3IubWVzc2FnZX0pLmBcblx0XHR9XG5cblx0XHRpZiAobWVzc2FnZSlcblx0XHRcdG1lc3NhZ2UgPSAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17YHN0YXR1cyAke21lc3NhZ2VDbGFzc31gfT57bWVzc2FnZX08L3A+XG5cdFx0XHQpXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwic2V0LWFjdGl2ZS12aWRlb3NcIj5cblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHQ8cD5QdXQgZWFjaCBVUkwgb24gYSBzZXBhcmF0ZSBsaW5lLjwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJub3RlXCI+VmlkZW8gSURzIHdpbGwgYmUgYXV0b21hdGljYWxseSBleHRyYWN0ZWQgZnJvbSBwYXN0ZWQgVVJMcyBhbmQgcmVwbGFjZSB0aGUgVVJMLiBJZiBhIHBhc3RlZCBVUkwgaXNuJ3QgcmVwbGFjZWQsIHRoYXQgbGlrZWx5IG1lYW5zIGl0IHdhc24ndCBjb3BpZWQgY29ycmVjdGx5LiBPbmx5IFlvdVR1YmUgdmlkZW8gVVJMcyBhcmUgYWNjZXB0ZWQuPC9wPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPVwiaWRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuaWRzfSByb3dzPXszMn0gY29scz17NzV9XG5cdFx0XHRcdFx0ICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBkaXNhYmxlZD17ZGlzYWJsZWR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7bWVzc2FnZX1cblx0XHRcdFx0XHQ8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0+XG5cdFx0XHRcdFx0XHR7YnV0dG9uVGV4dCB8fCAnU2V0IEFjdGl2ZSBWaWRlb3MnfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cbn1cblxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RvcmVTdGF0ZTogU3RvcmVTdGF0ZSwgcHJvcHM6IFByb3BzKTogU3RhdGVQcm9wcyB7XG5cdGNvbnN0IHsgcnRtT3dsOiB7IHNldEFjdGl2ZVZpZGVvczogc3RhdGUgfSB9ID0gc3RvcmVTdGF0ZVxuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyx7XG5cdFx0c2F2ZWQ6IHN0YXRlLnNldFN1Y2Nlc3NmdWxseSxcblx0XHRzYXZpbmc6IHN0YXRlLmN1cnJlbnRseUJlaW5nU2V0LFxuXHRcdGVycm9yOiBzdGF0ZS5lcnJvcixcblx0fSlcbn1cblxuXG5jb25zdCBSZWR1eFNldEFjdGl2ZVZpZGVvc1BhZ2UgPSBjb25uZWN0PFN0YXRlUHJvcHMsIERpc3BhdGNoUHJvcHMsIE93blByb3BzPihcblx0bWFwU3RhdGVUb1Byb3BzXG4pKFNldEFjdGl2ZVZpZGVvc1BhZ2UpXG5cblxuZXhwb3J0IGRlZmF1bHQgIGNyZWF0ZUZyYWdtZW50Q29udGFpbmVyKFJlZHV4U2V0QWN0aXZlVmlkZW9zUGFnZSwgZ3JhcGhxbGBcblx0ZnJhZ21lbnQgU2V0QWN0aXZlVmlkZW9zUGFnZV9hY3RpdmVWaWRlb3Mgb24gVmlkZW8gQHJlbGF5KHBsdXJhbDogdHJ1ZSkge1xuXHRcdGlkXG5cdH1cbmApXG4iXX0=