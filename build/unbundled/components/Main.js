"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Link = require("found/lib/Link");
require("../../../src/components/style.css");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBQzlCLHVDQUF1QztBQUl2Qyw2Q0FBMEM7QUFHMUMsVUFBMEIsU0FBUSxLQUFLLENBQUMsU0FBbUM7SUFFMUUsTUFBTTtRQUFLLE1BQU0sQ0FBQyxDQUNqQixpQ0FBUyxTQUFTLEVBQUMsS0FBSztZQUN2QjtnQkFDQztvQkFBSSwyQkFBRyxJQUFJLEVBQUMsR0FBRyxjQUFZLENBQUs7Z0JBQ2hDO29CQUNDO3dCQUNDOzRCQUFJLG9CQUFDLElBQUksSUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQyxRQUFRLFdBRWxDLENBQUs7d0JBQ1o7NEJBQUksb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBQywwQkFBMEIsRUFBQyxlQUFlLEVBQUMsUUFBUSxpQkFFekQsQ0FBSyxDQUNSLENBQ0EsQ0FDRTtZQUNULGlDQUFTLFNBQVMsRUFBQyxNQUFNLElBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNaLENBQ0QsQ0FDVixDQUFBO0lBQUMsQ0FBQztDQUVIO0FBdkJELHVCQXVCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayA9IHJlcXVpcmUoJ2ZvdW5kL2xpYi9MaW5rJylcblxuaW1wb3J0IFJvdXRlQ29tcG9uZW50UHJvcHMgZnJvbSAnLi4vcHJvcHMvUm91dGVDb21wb25lbnQnXG5cbmltcG9ydCAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc3R5bGUuY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVDb21wb25lbnRQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkgeyByZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImRvY1wiPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGgxPjxhIGhyZWY9XCIvXCI+UlRNIE93bDwvYT48L2gxPlxuXHRcdFx0XHQ8bmF2PlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT48TGluayB0bz1cIi9cIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cblx0XHRcdFx0XHRcdFx0SG9tZVxuXHRcdFx0XHRcdFx0PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PExpbmsgdG89XCIvdmlkZW9zL2Zvcm1zL3NldF9hY3RpdmVcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cblx0XHRcdFx0XHRcdFx0U2V0IFZpZGVvc1xuXHRcdFx0XHRcdFx0PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2VcIj5cblx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L3NlY3Rpb24+XG5cdCkgfVxuXG59XG4iXX0=