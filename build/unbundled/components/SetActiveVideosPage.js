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
//# sourceMappingURL=SetActiveVideosPage.js.map