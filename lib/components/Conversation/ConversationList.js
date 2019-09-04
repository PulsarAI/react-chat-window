'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ConversationList(_ref) {
    var conversationList = _ref.conversationList;

    var _useState = (0, _react.useState)(conversationList),
        conversations = _useState[0],
        setConversations = _useState[1];

    console.log('conversations', conversations);

    return _react2.default.createElement(
        'div',
        { className: 'sc-conversation-list' },
        'ConversationList'
    );
}

exports.default = ConversationList;
module.exports = exports['default'];