'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLinkify = require('react-linkify');

var _reactLinkify2 = _interopRequireDefault(_reactLinkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextMessage = function TextMessage(_ref) {
  var data = _ref.data;
  var text = data.text,
      quickReplies = data.quickReplies;


  var quickReplyTags = [];

  if (Array.isArray(quickReplies)) {
    quickReplyTags = quickReplies.map(function (_ref2, index) {
      var title = _ref2.title,
          payload = _ref2.payload;
      return _react2.default.createElement(
        'div',
        { className: 'sc-message--quick-reply', 'data-payload': payload, key: index },
        title
      );
    });
  }

  return _react2.default.createElement(
    'div',
    { className: 'sc-message--text' },
    _react2.default.createElement(
      _reactLinkify2.default,
      { properties: { target: '_blank' } },
      text
    ),
    quickReplies && _react2.default.createElement(
      'div',
      { className: 'sc-message--quick-reply-container' },
      quickReplyTags
    )
  );
};

exports.default = TextMessage;
module.exports = exports['default'];