'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Conversation = require('./Conversation');

var _Conversation2 = _interopRequireDefault(_Conversation);

require('./ConversationList.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ConversationList(_ref) {
    var conversationList = _ref.conversationList;

    var _useState = (0, _react.useState)(conversationList),
        conversations = _useState[0],
        setConversations = _useState[1];

    var convos = conversations.map(function (data) {
        return _react2.default.createElement(_Conversation2.default, { data: data });
    });

    return _react2.default.createElement(
        'div',
        { className: 'sc-conversation-list' },
        convos
    );
}

exports.default = ConversationList;
module.exports = exports['default'];