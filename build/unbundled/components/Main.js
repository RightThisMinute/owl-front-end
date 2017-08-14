"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Link = require("found/lib/Link");
// Relative to [PROJECT_ROOT/build/unbundled] since we compile TypeScript
// directly with `tsc` instead of working through Webpack. Unfortunately,
// we need this setup to support relay-compiler.
require("../../../src/components/main/general.pcss");
require("../../../src/components/main/frame.pcss");
require("../../../src/components/main/header.pcss");
require("../../../src/components/main/footer.pcss");
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
            React.createElement("section", { className: "page" }, this.props.children),
            React.createElement("section", { className: "footer" },
                "Vector graphics by ",
                React.createElement("a", { href: "http://www.vecteezy.com/" }, "Vecteezy!"),
                ".")));
    }
}
exports.default = Main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBQzlCLHVDQUF1QztBQUl2Qyx5RUFBeUU7QUFDekUseUVBQXlFO0FBQ3pFLGdEQUFnRDtBQUNoRCxxREFBa0Q7QUFDbEQsbURBQWdEO0FBQ2hELG9EQUFpRDtBQUNqRCxvREFBaUQ7QUFHakQsVUFBMEIsU0FBUSxLQUFLLENBQUMsU0FBbUM7SUFFMUUsTUFBTTtRQUFLLE1BQU0sQ0FBQyxDQUNqQixpQ0FBUyxTQUFTLEVBQUMsS0FBSztZQUN2QjtnQkFDQztvQkFBSSxvQkFBQyxJQUFJLElBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxlQUFlLEVBQUMsUUFBUSxjQUFlLENBQUs7Z0JBQzdEO29CQUNDO3dCQUNDOzRCQUFJLG9CQUFDLElBQUksSUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQyxRQUFRLFdBRWxDLENBQUs7d0JBQ1o7NEJBQUksb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBQywwQkFBMEIsRUFBQyxlQUFlLEVBQUMsUUFBUSxpQkFFekQsQ0FBSyxDQUNSLENBQ0EsQ0FDRTtZQUNULGlDQUFTLFNBQVMsRUFBQyxNQUFNLElBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNYO1lBQ1YsaUNBQVMsU0FBUyxFQUFDLFFBQVE7O2dCQUNQLDJCQUFHLElBQUksRUFBQywwQkFBMEIsZ0JBQWM7b0JBQzFELENBQ0QsQ0FDVixDQUFBO0lBQUMsQ0FBQztDQUVIO0FBMUJELHVCQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayA9IHJlcXVpcmUoJ2ZvdW5kL2xpYi9MaW5rJylcblxuaW1wb3J0IFJvdXRlQ29tcG9uZW50UHJvcHMgZnJvbSAnLi4vcHJvcHMvUm91dGVDb21wb25lbnQnXG5cbi8vIFJlbGF0aXZlIHRvIFtQUk9KRUNUX1JPT1QvYnVpbGQvdW5idW5kbGVkXSBzaW5jZSB3ZSBjb21waWxlIFR5cGVTY3JpcHRcbi8vIGRpcmVjdGx5IHdpdGggYHRzY2AgaW5zdGVhZCBvZiB3b3JraW5nIHRocm91Z2ggV2VicGFjay4gVW5mb3J0dW5hdGVseSxcbi8vIHdlIG5lZWQgdGhpcyBzZXR1cCB0byBzdXBwb3J0IHJlbGF5LWNvbXBpbGVyLlxuaW1wb3J0ICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYWluL2dlbmVyYWwucGNzcydcbmltcG9ydCAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFpbi9mcmFtZS5wY3NzJ1xuaW1wb3J0ICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYWluL2hlYWRlci5wY3NzJ1xuaW1wb3J0ICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYWluL2Zvb3Rlci5wY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkgeyByZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImRvY1wiPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGgxPjxMaW5rIHRvPVwiL1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlJUTSBPd2w8L0xpbms+PC9oMT5cblx0XHRcdFx0PG5hdj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGk+PExpbmsgdG89XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdEhvbWVcblx0XHRcdFx0XHRcdDwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxMaW5rIHRvPVwiL3ZpZGVvcy9mb3Jtcy9zZXRfYWN0aXZlXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFNldCBWaWRlb3Ncblx0XHRcdFx0XHRcdDwvTGluaz48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvbmF2PlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG5cdFx0XHRcdFZlY3RvciBncmFwaGljcyBieSA8YSBocmVmPVwiaHR0cDovL3d3dy52ZWN0ZWV6eS5jb20vXCI+VmVjdGVlenkhPC9hPi5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L3NlY3Rpb24+XG5cdCkgfVxuXG59XG4iXX0=