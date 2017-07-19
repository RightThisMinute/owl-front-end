"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Link = require("found/lib/Link");
class Main extends React.Component {
    render() {
        return (React.createElement("section", { className: "doc" },
            React.createElement("header", null,
                React.createElement("h1", null,
                    React.createElement("a", { href: "/" }, "RTM Owl")),
                React.createElement("nav", null,
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement(Link, { to: "/", activeClassName: "active" }, "Home")),
                        React.createElement("li", null,
                            React.createElement(Link, { to: "/videos/forms/replace", activeClassName: "active" }, "Set Videos"))))),
            React.createElement("section", { className: "page" }, this.props.children)));
    }
}
exports.default = Main;
//# sourceMappingURL=Main.js.map