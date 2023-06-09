"use strict";

var sally = 'Sally Smith';
var mark = 'Mark Martin';
var holly = 'Holly Unlikely';
var amol = 'Amol Shookup';
var stu = 'Stu Dent';
var element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, stu), /*#__PURE__*/React.createElement("li", null, amol.toUpperCase()));
ReactDOM.render(element, document.getElementById('content'));