'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Conversation.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Conversation(_ref) {
    var data = _ref.data,
        onConversationClick = _ref.onConversationClick;

    var lastMessage = [].concat(data.messageHistory).pop();

    return _react2.default.createElement(
        'div',
        { className: 'sc-conversation', onClick: function onClick() {
                return onConversationClick(data);
            } },
        _react2.default.createElement('div', { className: 'sc-conversation--avatar' }),
        _react2.default.createElement(
            'div',
            { className: 'sc-conversation--body' },
            _react2.default.createElement(
                'div',
                { className: 'sc-conversation--body-meta' },
                _react2.default.createElement(
                    'div',
                    { className: 'sc-conversation--body-meta-name' },
                    data.initiator
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sc-conversation--body-meta-timestamp' },
                    new Date(data.timestamp).toLocaleDateString()
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'sc-conversation--body-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'sc-conversation--body-content-text' },
                    lastMessage.data.text
                )
            )
        )
    );
}

exports.default = Conversation;
module.exports = exports['default'];