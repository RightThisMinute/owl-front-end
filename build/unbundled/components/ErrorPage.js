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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRXJyb3JQYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUE4QjtBQVU5QixlQUErQixTQUFRLEtBQUssQ0FBQyxTQUE4QjtJQUUxRSxNQUFNO1FBQUssTUFBTSxDQUFDLENBQ2pCLDZCQUFLLFNBQVMsRUFBQyxPQUFPO1lBQ3JCLHdDQUFjO1lBQ2QsaUNBQ0csSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUNwRCxDQUNELENBQ04sQ0FBQTtJQUFDLENBQUM7Q0FFSDtBQVhELDRCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgRXJyb3IgfSBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJ1xuXG5cbmludGVyZmFjZSBFcnJvclBhZ2VQcm9wcyB7XG5cdGVycm9yOiBFcnJvclxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFcnJvclBhZ2VQcm9wcywgYW55PiB7XG5cblx0cmVuZGVyKCkgeyByZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdDxoMj5FcnJvcjwvaDI+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7IHRoaXMucHJvcHMuZXJyb3Iuc3RhdHVzID09PSA0MDQgPyAnTm90IGZvdW5kJyA6ICdFcnJvcicgfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCkgfVxuXG59XG4iXX0=