"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Link = require("found/lib/Link");
// Relative to [PROJECT_ROOT/build/unbundled] since we compile TypeScript
// directly with `tsc` instead of working through Webpack. Unfortunately,
// we need this setup to support relay-compiler.
require("../../../../src/components/main/general.pcss");
require("../../../../src/components/main/frame.pcss");
require("../../../../src/components/main/header.pcss");
class Main extends React.Component {
    render() {
        return (React.createElement("section", { className: "doc" },
            React.createElement("header", null,
                React.createElement("h1", null,
                    React.createElement(Link, { to: "/", activeClassName: "active" }, "RTM Owl")),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUE4QjtBQUM5Qix1Q0FBdUM7QUFJdkMseUVBQXlFO0FBQ3pFLHlFQUF5RTtBQUN6RSxnREFBZ0Q7QUFDaEQsd0RBQXFEO0FBQ3JELHNEQUFtRDtBQUNuRCx1REFBb0Q7QUFHcEQsVUFBMEIsU0FBUSxLQUFLLENBQUMsU0FBbUM7SUFFMUUsTUFBTTtRQUFLLE1BQU0sQ0FBQyxDQUNqQixpQ0FBUyxTQUFTLEVBQUMsS0FBSztZQUN2QjtnQkFDQztvQkFBSSxvQkFBQyxJQUFJLElBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxlQUFlLEVBQUMsUUFBUSxjQUFlLENBQUs7Z0JBQzdEO29CQUNDO3dCQUNDOzRCQUFJLG9CQUFDLElBQUksSUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQyxRQUFRLFdBRWxDLENBQUs7d0JBQ1o7NEJBQUksb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBQywwQkFBMEIsRUFBQyxlQUFlLEVBQUMsUUFBUSxpQkFFekQsQ0FBSyxDQUNSLENBQ0EsQ0FDRTtZQUNULGlDQUFTLFNBQVMsRUFBQyxNQUFNLElBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNYLENBQ0QsQ0FDVixDQUFBO0lBQUMsQ0FBQztDQUVIO0FBdkJELHVCQXVCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayA9IHJlcXVpcmUoJ2ZvdW5kL2xpYi9MaW5rJylcblxuaW1wb3J0IFJvdXRlQ29tcG9uZW50UHJvcHMgZnJvbSAnLi4vLi4vcHJvcHMvUm91dGVDb21wb25lbnQnXG5cbi8vIFJlbGF0aXZlIHRvIFtQUk9KRUNUX1JPT1QvYnVpbGQvdW5idW5kbGVkXSBzaW5jZSB3ZSBjb21waWxlIFR5cGVTY3JpcHRcbi8vIGRpcmVjdGx5IHdpdGggYHRzY2AgaW5zdGVhZCBvZiB3b3JraW5nIHRocm91Z2ggV2VicGFjay4gVW5mb3J0dW5hdGVseSxcbi8vIHdlIG5lZWQgdGhpcyBzZXR1cCB0byBzdXBwb3J0IHJlbGF5LWNvbXBpbGVyLlxuaW1wb3J0ICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYWluL2dlbmVyYWwucGNzcydcbmltcG9ydCAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFpbi9mcmFtZS5wY3NzJ1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYWluL2hlYWRlci5wY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkgeyByZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImRvY1wiPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGgxPjxMaW5rIHRvPVwiL1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlJUTSBPd2w8L0xpbms+PC9oMT5cblx0XHRcdFx0PG5hdj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGk+PExpbmsgdG89XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdEhvbWVcblx0XHRcdFx0XHRcdDwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxMaW5rIHRvPVwiL3ZpZGVvcy9mb3Jtcy9zZXRfYWN0aXZlXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFNldCBWaWRlb3Ncblx0XHRcdFx0XHRcdDwvTGluaz48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvbmF2PlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvc2VjdGlvbj5cblx0KSB9XG5cbn1cbiJdfQ==