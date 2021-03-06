"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var recompose_1 = require("recompose");
var PropTypes = require("prop-types");
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editor: null
        };
        return _this;
    }
    Container.prototype.getChildContext = function () {
        var that = this;
        return {
            getEditor: function () {
                return that.state.editor;
            },
            setEditor: function (editor) {
                that.setState({ editor: editor });
            }
        };
    };
    Container.prototype.render = function () {
        return this.props.children;
    };
    Container.childContextTypes = {
        setEditor: PropTypes.func,
        getEditor: PropTypes.func
    };
    return Container;
}(React.Component));
exports.default = recompose_1.compose(react_dnd_1.DragDropContext(react_dnd_html5_backend_1.default))(Container);
