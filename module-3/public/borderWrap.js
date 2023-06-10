"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BorderWrap = function BorderWrap(_ref) {
  var children = _ref.children;
  var borderStyle = {
    border: '3px solid silver',
    padding: 6
  };
  return /*#__PURE__*/React.createElement("div", {
    style: borderStyle
  }, children);
};
var _default = BorderWrap;
exports["default"] = _default;