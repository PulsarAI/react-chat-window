'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Conversation = require('./Conversation');

var _Conversation2 = _interopRequireDefault(_Conversation);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

require('./ConversationList.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ConversationList(_ref) {
    var showLoadingIndicator = _ref.showLoadingIndicator,
        conversationList = _ref.conversationList,
        onConversationClick = _ref.onConversationClick;

    var convos = conversationList.map(function (data, index) {
        return _react2.default.createElement(_Conversation2.default, { key: index, data: data, onConversationClick: onConversationClick });
    });
    var data = { messageHistory: [] };

    if (showLoadingIndicator) {
        return _react2.default.createElement(
            'div',
            { className: 'sc-loader-container' },
            _react2.default.createElement(_Loader2.default, null)
        );
    }

    return _react2.default.createElement(
        'div',
        { className: 'sc-conversation-list' },
        _react2.default.createElement(
            'div',
            { className: 'sc-conversation-list--all' },
            convos
        ),
        _react2.default.createElement(
            'div',
            { className: 'sc-conversation-list--new' },
            _react2.default.createElement(
                'button',
                { className: 'sc-conversation-list--new-btn', onClick: function onClick() {
                        return onConversationClick(data);
                    } },
                'New Conversation'
            )
        )
    );
}

exports.default = ConversationList;
module.exports = exports['default'];