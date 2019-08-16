'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselItem = function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem(props) {
    _classCallCheck(this, CarouselItem);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {};
    return _this;
  }

  CarouselItem.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        title = _props.title,
        subtitle = _props.subtitle,
        url = _props.url,
        buttons = _props.buttons;


    var buttonTags = buttons.map(function (_ref, i) {
      var text = _ref.text,
          payload = _ref.payload;

      return _react2.default.createElement(
        'button',
        { className: 'sc-carousel--action', onClick: _this2.props.onCarouselClick, 'data-payload': payload, key: i },
        ' ',
        text,
        ' '
      );
    });

    return _react2.default.createElement(
      'div',
      { className: 'sc-carousel--item' },
      _react2.default.createElement('div', { className: 'sc-carousel--thumbnail', style: { backgroundImage: 'url(' + url + ')' } }),
      _react2.default.createElement(
        'div',
        { className: 'sc-carousel--info' },
        _react2.default.createElement(
          'div',
          { className: 'sc-carousel--title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'sc-carousel--subtitle' },
          '$ ',
          subtitle.toLocaleString()
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'sc-carousel--actions' },
        buttonTags
      )
    );
  };

  return CarouselItem;
}(_react.Component);

var CarouselArrow = function CarouselArrow(props) {
  if (props.direction === 'left') {
    return _react2.default.createElement(
      'div',
      { className: 'sc-carousel--arrow sc-carousel--arrow-left', onClick: props.onClick },
      _react2.default.createElement(
        'svg',
        { className: 'sc-carousel--arrow-icon', 'aria-hidden': 'true', focusable: 'false', 'data-prefix': 'far', 'data-icon': 'chevron-left', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 256 512' },
        _react2.default.createElement('path', { className: 'sc-carousel--arrow-icon-path', d: 'M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z' })
      )
    );
  }

  return _react2.default.createElement(
    'div',
    { className: 'sc-carousel--arrow sc-carousel--arrow-right', onClick: props.onClick },
    _react2.default.createElement(
      'svg',
      { className: 'sc-carousel--arrow-icon', 'aria-hidden': 'true', focusable: 'false', 'data-prefix': 'far', 'data-icon': 'chevron-right', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 256 512' },
      _react2.default.createElement('path', { className: 'sc-carousel--arrow-icon-path', d: 'M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z' })
    )
  );
};

var CarouselMessage = (_temp = _class = function (_Component2) {
  _inherits(CarouselMessage, _Component2);

  function CarouselMessage(props) {
    _classCallCheck(this, CarouselMessage);

    var _this3 = _possibleConstructorReturn(this, _Component2.call(this, props));

    _this3.state = {
      showLeftArrow: false,
      showRightArrow: true
    };

    _this3.carouselRef = _react2.default.createRef();

    _this3.scrollLeft = _this3.scrollLeft.bind(_this3);
    _this3.scrollRight = _this3.scrollRight.bind(_this3);
    _this3.handleScroll = _this3.handleScroll.bind(_this3);
    return _this3;
  }

  CarouselMessage.prototype.handleScroll = function handleScroll(event) {
    var target = event.target;


    var showLeftArrow = void 0;
    var showRightArrow = void 0;

    if (target.scrollLeft === 0) {
      showLeftArrow = false;
    } else {
      showLeftArrow = true;
    }

    if (target.scrollWidth - target.scrollLeft === target.offsetWidth) {
      showRightArrow = false;
    } else {
      showRightArrow = true;
    }

    this.setState({
      showLeftArrow: showLeftArrow,
      showRightArrow: showRightArrow
    });
  };

  CarouselMessage.prototype.scrollLeft = function scrollLeft() {
    this.carouselRef.current.scrollLeft -= 200;
  };

  CarouselMessage.prototype.scrollRight = function scrollRight() {
    this.carouselRef.current.scrollLeft += 200;
  };

  CarouselMessage.prototype.render = function render() {
    var _this4 = this;

    var _state = this.state,
        showLeftArrow = _state.showLeftArrow,
        showRightArrow = _state.showRightArrow;

    var CarouselList = this.props.data.map(function (item, i) {
      return _react2.default.createElement(CarouselItem, _extends({}, item, { onCarouselClick: _this4.props.onCarouselClick, key: i }));
    });

    return _react2.default.createElement(
      'div',
      { className: 'sc-carousel-container' },
      _react2.default.createElement(
        'div',
        { ref: this.carouselRef, className: 'sc-carousel', onScroll: this.handleScroll },
        CarouselList
      ),
      showLeftArrow && _react2.default.createElement(CarouselArrow, { direction: 'left', onClick: this.scrollLeft }),
      showRightArrow && _react2.default.createElement(CarouselArrow, { direction: 'right', onClick: this.scrollRight })
    );
  };

  return CarouselMessage;
}(_react.Component), _class.defaultProps = {
  data: []
}, _temp);
exports.default = CarouselMessage;
module.exports = exports['default'];