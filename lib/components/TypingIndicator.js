"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TypingIndicator() {
  return _react2.default.createElement(
    "div",
    { className: "sc-typing-indicator" },
    _react2.default.createElement(
      "div",
      { className: "sc-typing-indicator--message" },
      _react2.default.createElement("div", { className: "sc-typing-indicator--dot" }),
      _react2.default.createElement("div", { className: "sc-typing-indicator--dot" }),
      _react2.default.createElement("div", { className: "sc-typing-indicator--dot" })
    )
  );
}

exports.default = TypingIndicator;
module.exports = exports["default"];