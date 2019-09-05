'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _closeIcon = require('./../assets/close-icon.png');

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(props) {
  var imageUrl = props.imageUrl,
      teamName = props.teamName,
      showBackButton = props.showBackButton,
      onBackButtonClick = props.onBackButtonClick,
      onClose = props.onClose;


  return _react2.default.createElement(
    'div',
    { className: 'sc-header' },
    showBackButton && _react2.default.createElement(
      'button',
      { className: 'sc-header--arrow', onClick: onBackButtonClick },
      _react2.default.createElement(
        'svg',
        { 'aria-hidden': 'true', focusable: 'false', 'data-prefix': 'fas', 'data-icon': 'chevron-left', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 320 512', className: 'svg-inline--fa fa-chevron-left fa-w-10 fa-2x' },
        _react2.default.createElement('path', { fill: 'currentColor', d: 'M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z' })
      )
    ),
    imageUrl && _react2.default.createElement('img', { className: 'sc-header--img', src: imageUrl, alt: '' }),
    _react2.default.createElement(
      'div',
      { className: 'sc-header--team-name' },
      ' ',
      teamName,
      ' '
    ),
    _react2.default.createElement(
      'div',
      { className: 'sc-header--close-button', onClick: onClose },
      _react2.default.createElement('img', { src: _closeIcon2.default, alt: '' })
    )
  );
}

exports.default = Header;
module.exports = exports['default'];