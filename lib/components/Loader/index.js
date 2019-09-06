'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Loader.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loader() {
    return _react2.default.createElement(
        'div',
        { className: 'sc-loader' },
        'Loading...'
    );
}

exports.default = Loader;
module.exports = exports['default'];