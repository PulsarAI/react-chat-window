'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Messages = require('./Messages');

var _Messages2 = _interopRequireDefault(_Messages);

var _TypingIndicator = require('./TypingIndicator');

var _TypingIndicator2 = _interopRequireDefault(_TypingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MessageList(_ref) {
  var messages = _ref.messages,
      onCarouselClick = _ref.onCarouselClick,
      showTypingIndicator = _ref.showTypingIndicator;

  var _useState = (0, _react.useState)({}),
      element = _useState[0],
      setElement = _useState[1];

  (0, _react.useEffect)(function () {
    element.scrollTop = element.scrollHeight;
  });

  return _react2.default.createElement(
    'div',
    { className: 'sc-message-list', ref: function ref(el) {
        return setElement(el);
      } },
    messages.map(function (message, i) {
      return _react2.default.createElement(_Messages2.default, { message: message, onCarouselClick: onCarouselClick, key: i });
    }),
    showTypingIndicator && _react2.default.createElement(_TypingIndicator2.default, null)
  );
}

exports.default = MessageList;
module.exports = exports['default'];