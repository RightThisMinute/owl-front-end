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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBQzlCLHVDQUF1QztBQUl2Qyx5RUFBeUU7QUFDekUseUVBQXlFO0FBQ3pFLGdEQUFnRDtBQUNoRCxxREFBa0Q7QUFDbEQsbURBQWdEO0FBQ2hELG9EQUFpRDtBQUdqRCxVQUEwQixTQUFRLEtBQUssQ0FBQyxTQUFtQztJQUUxRSxNQUFNO1FBQUssTUFBTSxDQUFDLENBQ2pCLGlDQUFTLFNBQVMsRUFBQyxLQUFLO1lBQ3ZCO2dCQUNDO29CQUFJLG9CQUFDLElBQUksSUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQyxRQUFRLGNBQWUsQ0FBSztnQkFDN0Q7b0JBQ0M7d0JBQ0M7NEJBQUksb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsZUFBZSxFQUFDLFFBQVEsV0FFbEMsQ0FBSzt3QkFDWjs0QkFBSSxvQkFBQyxJQUFJLElBQUMsRUFBRSxFQUFDLDBCQUEwQixFQUFDLGVBQWUsRUFBQyxRQUFRLGlCQUV6RCxDQUFLLENBQ1IsQ0FDQSxDQUNFO1lBQ1QsaUNBQVMsU0FBUyxFQUFDLE1BQU0sSUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ1gsQ0FDRCxDQUNWLENBQUE7SUFBQyxDQUFDO0NBRUg7QUF2QkQsdUJBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rID0gcmVxdWlyZSgnZm91bmQvbGliL0xpbmsnKVxuXG5pbXBvcnQgUm91dGVDb21wb25lbnRQcm9wcyBmcm9tICcuLi9wcm9wcy9Sb3V0ZUNvbXBvbmVudCdcblxuLy8gUmVsYXRpdmUgdG8gW1BST0pFQ1RfUk9PVC9idWlsZC91bmJ1bmRsZWRdIHNpbmNlIHdlIGNvbXBpbGUgVHlwZVNjcmlwdFxuLy8gZGlyZWN0bHkgd2l0aCBgdHNjYCBpbnN0ZWFkIG9mIHdvcmtpbmcgdGhyb3VnaCBXZWJwYWNrLiBVbmZvcnR1bmF0ZWx5LFxuLy8gd2UgbmVlZCB0aGlzIHNldHVwIHRvIHN1cHBvcnQgcmVsYXktY29tcGlsZXIuXG5pbXBvcnQgJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21haW4vZ2VuZXJhbC5wY3NzJ1xuaW1wb3J0ICcuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYWluL2ZyYW1lLnBjc3MnXG5pbXBvcnQgJy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21haW4vaGVhZGVyLnBjc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZUNvbXBvbmVudFByb3BzLCBhbnk+IHtcblxuXHRyZW5kZXIoKSB7IHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZG9jXCI+XG5cdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHQ8aDE+PExpbmsgdG89XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+UlRNIE93bDwvTGluaz48L2gxPlxuXHRcdFx0XHQ8bmF2PlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT48TGluayB0bz1cIi9cIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cblx0XHRcdFx0XHRcdFx0SG9tZVxuXHRcdFx0XHRcdFx0PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PExpbmsgdG89XCIvdmlkZW9zL2Zvcm1zL3NldF9hY3RpdmVcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cblx0XHRcdFx0XHRcdFx0U2V0IFZpZGVvc1xuXHRcdFx0XHRcdFx0PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2VcIj5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9zZWN0aW9uPlxuXHQpIH1cblxufVxuIl19