"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ErrorPage extends React.Component {
    render() {
        return (React.createElement("div", { className: "error" },
            React.createElement("h2", null, "Error"),
            React.createElement("div", null, this.props.error.status === 404 ? 'Not found' : 'Error')));
    }
}
exports.default = ErrorPage;
//# sourceMappingURL=ErrorPage.js.map