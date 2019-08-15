'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLinkify = require('react-linkify');

var _reactLinkify2 = _interopRequireDefault(_reactLinkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetMessage = function (_Component) {
    _inherits(WidgetMessage, _Component);

    function WidgetMessage(props) {
        _classCallCheck(this, WidgetMessage);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            email: ''
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    WidgetMessage.prototype.handleChange = function handleChange(event) {
        this.setState({
            email: event.target.value
        });
    };

    WidgetMessage.prototype.handleSubmit = function handleSubmit(event) {
        event.preventDefault();

        console.log('email', this.state.email);

        this.setState({
            email: ''
        });
    };

    WidgetMessage.prototype.render = function render() {
        var text = this.props.data.text;


        return _react2.default.createElement(
            'div',
            { className: 'sc-message--text sc-message--widget' },
            _react2.default.createElement(
                'div',
                { className: 'sc-message--widget-title' },
                text
            ),
            _react2.default.createElement(
                'div',
                { className: 'sc-message--widget-email' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                        'div',
                        { className: 'sc-message--widget-input-container' },
                        _react2.default.createElement('input', { value: this.state.email, onChange: this.handleChange, name: 'email', type: 'email', placeholder: 'name@example.com', rows: '1', className: 'sc-message--widget-input' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sc-message--widget-button-container' },
                        _react2.default.createElement(
                            'button',
                            { className: 'sc-message--widget-button', type: 'submit' },
                            'Save'
                        )
                    )
                )
            )
        );
    };

    return WidgetMessage;
}(_react.Component);

exports.default = WidgetMessage;
module.exports = exports['default'];