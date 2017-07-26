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
                            React.createElement(Link, { to: "/videos/forms/set_active", activeClassName: "active" }, "Set Videos"))))),
            React.createElement("section", { className: "page" }, this.props.children)));
    }
}
exports.default = Main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBQzlCLHVDQUF1QztBQUt2QyxVQUEwQixTQUFRLEtBQUssQ0FBQyxTQUFtQztJQUUxRSxNQUFNO1FBQUssTUFBTSxDQUFDLENBQ2pCLGlDQUFTLFNBQVMsRUFBQyxLQUFLO1lBQ3ZCO2dCQUNDO29CQUFJLDJCQUFHLElBQUksRUFBQyxHQUFHLGNBQVksQ0FBSztnQkFDaEM7b0JBQ0M7d0JBQ0M7NEJBQUksb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsZUFBZSxFQUFDLFFBQVEsV0FFbEMsQ0FBSzt3QkFDWjs0QkFBSSxvQkFBQyxJQUFJLElBQUMsRUFBRSxFQUFDLDBCQUEwQixFQUFDLGVBQWUsRUFBQyxRQUFRLGlCQUV6RCxDQUFLLENBQ1IsQ0FDQSxDQUNFO1lBQ1QsaUNBQVMsU0FBUyxFQUFDLE1BQU0sSUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ1osQ0FDRCxDQUNWLENBQUE7SUFBQyxDQUFDO0NBRUg7QUF2QkQsdUJBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rID0gcmVxdWlyZSgnZm91bmQvbGliL0xpbmsnKVxuXG5pbXBvcnQgUm91dGVDb21wb25lbnRQcm9wcyBmcm9tICcuLi9wcm9wcy9Sb3V0ZUNvbXBvbmVudCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHMsIGFueT4ge1xuXG5cdHJlbmRlcigpIHsgcmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJkb2NcIj5cblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxoMT48YSBocmVmPVwiL1wiPlJUTSBPd2w8L2E+PC9oMT5cblx0XHRcdFx0PG5hdj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGk+PExpbmsgdG89XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdEhvbWVcblx0XHRcdFx0XHRcdDwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxMaW5rIHRvPVwiL3ZpZGVvcy9mb3Jtcy9zZXRfYWN0aXZlXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFNldCBWaWRlb3Ncblx0XHRcdFx0XHRcdDwvTGluaz48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvbmF2PlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlXCI+XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9zZWN0aW9uPlxuXHQpIH1cblxufVxuIl19