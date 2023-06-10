"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _employeeRow = _interopRequireDefault(require("./employeeRow"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EmployeeTable = function EmployeeTable() {
  return /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Name"), /*#__PURE__*/_react["default"].createElement("th", null, "Extension"), /*#__PURE__*/_react["default"].createElement("th", null, "Email"), /*#__PURE__*/_react["default"].createElement("th", null, "Title"), /*#__PURE__*/_react["default"].createElement("th", null, "Date Hired"), /*#__PURE__*/_react["default"].createElement("th", null, "Is Employed"))), /*#__PURE__*/_react["default"].createElement("tbody", null, employees.map(function (employee, index) {
    return /*#__PURE__*/_react["default"].createElement(_employeeRow["default"], {
      key: index,
      employee: employee
    });
  })));
};
var _default = EmployeeTable;
exports["default"] = _default;