'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatWindow = require('./ChatWindow');

var _ChatWindow2 = _interopRequireDefault(_ChatWindow);

var _logoNoBg = require('./../assets/logo-no-bg.svg');

var _logoNoBg2 = _interopRequireDefault(_logoNoBg);

var _notification = require('./../assets/sounds/notification.mp3');

var _notification2 = _interopRequireDefault(_notification);

var _closeIcon = require('./../assets/close-icon.png');

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Launcher = function (_Component) {
  _inherits(Launcher, _Component);

  function Launcher() {
    _classCallCheck(this, Launcher);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      launcherIcon: _logoNoBg2.default,
      showTypingIndicator: null,
      messageList: [],
      isOpen: false
    };
    return _this;
  }

  Launcher.prototype.componentDidMount = function componentDidMount() {
    if (this.state.isOpen || this.props.isOpen) {
      this.showWelcomeMessage();
    }
  };

  Launcher.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.mute) {
      return;
    }
    var nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
    var isIncoming = (nextMessage || {}).author === 'them';
    var isNew = nextProps.messageList.length > this.props.messageList.length;
    if (isIncoming && isNew) {
      this.playIncomingMessageSound();
    }
  };

  /**
   * showWelcomeMessage
   * 
   * Show welcome message if conversation is empty
   */


  Launcher.prototype.showWelcomeMessage = function showWelcomeMessage() {
    var _this2 = this;

    var welcomeMessage = {
      type: 'text',
      author: "them",
      data: {
        text: 'Hi there! Welcome to our website, how can we help?'
      }
    };

    if (this.props.messageList.length === 0 && this.state.messageList.length === 0) {
      this.setState({
        showTypingIndicator: true
      });

      setTimeout(function () {
        _this2.setState({
          messageList: [welcomeMessage],
          showTypingIndicator: null
        });
      }, 1500);
    }
  };

  Launcher.prototype.playIncomingMessageSound = function playIncomingMessageSound() {
    var audio = new Audio(_notification2.default);
    audio.play();
  };

  Launcher.prototype.handleClick = function handleClick() {
    var _this3 = this;

    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
      this.showWelcomeMessage();
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      }, function () {
        _this3.showWelcomeMessage();
      });
    }
  };

  Launcher.prototype.render = function render() {
    var isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    var classList = ['sc-launcher', isOpen ? 'opened' : ''];
    var messageList = this.props.messageList.length !== 0 ? this.props.messageList : this.state.messageList;
    var showTypingIndicator = this.state.showTypingIndicator === null ? this.props.showTypingIndicator : this.state.showTypingIndicator;

    return _react2.default.createElement(
      'div',
      { id: 'sc-launcher' },
      _react2.default.createElement(
        'div',
        { className: classList.join(' '), onClick: this.handleClick.bind(this) },
        _react2.default.createElement(MessageCount, { count: this.props.newMessagesCount, isOpen: isOpen }),
        _react2.default.createElement('img', { className: "sc-open-icon", src: _closeIcon2.default }),
        _react2.default.createElement('img', { className: "sc-closed-icon", src: _logoNoBg2.default })
      ),
      _react2.default.createElement(_ChatWindow2.default, {
        messageList: messageList,
        onUserInputSubmit: this.props.onMessageWasSent,
        onFilesSelected: this.props.onFilesSelected,
        onCarouselClick: this.props.onCarouselClick,
        agentProfile: this.props.agentProfile,
        isOpen: isOpen,
        onClose: this.handleClick.bind(this),
        showTypingIndicator: showTypingIndicator
      })
    );
  };

  return Launcher;
}(_react.Component);

var MessageCount = function MessageCount(props) {
  if (props.count === 0 || props.isOpen === true) {
    return null;
  }
  return _react2.default.createElement(
    'div',
    { className: "sc-new-messages-count" },
    props.count
  );
};

Launcher.propTypes = process.env.NODE_ENV !== "production" ? {
  onMessageWasReceived: _propTypes2.default.func,
  onMessageWasSent: _propTypes2.default.func,
  onCarouselClick: _propTypes2.default.func,
  newMessagesCount: _propTypes2.default.number,
  isOpen: _propTypes2.default.bool,
  handleClick: _propTypes2.default.func,
  messageList: _propTypes2.default.arrayOf(_propTypes2.default.object),
  mute: _propTypes2.default.bool,
  showTypingIndicator: _propTypes2.default.bool
} : {};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showTypingIndicator: false
};

exports.default = Launcher;
module.exports = exports['default'];