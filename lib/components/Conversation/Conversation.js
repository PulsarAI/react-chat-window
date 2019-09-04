'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Conversation.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Conversation(_ref) {
    var data = _ref.data;

    return _react2.default.createElement(
        'div',
        { className: 'sc-conversation' },
        _react2.default.createElement('div', { className: 'sc-conversation--avatar' }),
        _react2.default.createElement(
            'div',
            { className: 'sc-conversation--body' },
            _react2.default.createElement('div', { className: 'sc-conversation--body-name' })
        )
    );
}

exports.default = Conversation;
module.exports = exports['default'];