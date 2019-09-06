import PropTypes from 'prop-types';
import React, {
  Component
} from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import incomingMessageSound from './../assets/sounds/notification.mp3';
import launcherIconActive from './../assets/close-icon.png';

class Launcher extends Component {

  constructor() {
    super();
    this.state = {
      launcherIcon,
      showTypingIndicator: null,
      conversationList: [],
      isOpen: false
    };
  }

  componentDidMount() {
    if (this.state.isOpen || this.props.isOpen) {
      this.showWelcomeMessage()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen !== prevProps.isOpen) {
      const eventName = this.props.isOpen ? 'OPEN_WEBCHAT' : 'CLOSE_WEBCHAT'

      window.parent.postMessage(eventName, '*');
    } else if (this.state.isOpen !== prevState.isOpen) {
      const eventName = this.state.isOpen ? 'OPEN_WEBCHAT' : 'CLOSE_WEBCHAT'

      window.parent.postMessage(eventName, '*');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mute) {
      return;
    }
    const nextMessage = nextProps.conversationList[nextProps.conversationList.length - 1];
    const isIncoming = (nextMessage || {}).author === 'them';
    const isNew = nextProps.conversationList.length > this.props.conversationList.length;
    if (isIncoming && isNew) {
      this.playIncomingMessageSound()
    }
  }

  /**
   * showWelcomeMessage
   * 
   * Show welcome message if conversation is empty
   */
  showWelcomeMessage() {
    const welcomeMessage = {
      type: 'text',
      author: "them",
      data: {
        text: 'Hi there! Welcome to our website, how can we help?'
      }
    }

    // if (this.props.conversationList.length === 0 && this.state.conversationList.length === 0) {
    //   this.setState({
    //     showTypingIndicator: true
    //   })

    //   setTimeout(() => {
    //     this.setState({
    //       conversationList: [welcomeMessage],
    //       showTypingIndicator: null
    //     })
    //   }, 1500)
    // }
  }

  playIncomingMessageSound() {
    var audio = new Audio(incomingMessageSound);
    audio.play();
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
      this.showWelcomeMessage();
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      }, () => {
        this.showWelcomeMessage();
      });
    }
  }
  render() {
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? 'opened' : ''),
    ];
    const conversationList = this.props.conversationList && this.props.conversationList.length !== 0 ? this.props.conversationList : this.state.conversationList
    const showTypingIndicator = this.state.showTypingIndicator === null ? this.props.showTypingIndicator : this.state.showTypingIndicator

    return (
      <div id = "sc-launcher">
        <div className = { classList.join(' ') } onClick = { this.handleClick.bind(this) }>
          <MessageCount count = { this.props.newMessagesCount } isOpen = { isOpen } />
          <img className = { "sc-open-icon" } src = { launcherIconActive } />
          <img className = { "sc-closed-icon" } src = { launcherIcon } />
        </div>
        <ChatWindow 
          conversationList = { conversationList }
          onUserInputSubmit = { this.props.onMessageWasSent }
          onFilesSelected = { this.props.onFilesSelected }
          onCarouselClick = { this.props.onCarouselClick }
          agentProfile = { this.props.agentProfile }
          isOpen = { isOpen }
          onClose = { this.handleClick.bind(this) }
          showLoadingIndicator = { this.props.showLoadingIndicator }
          showTypingIndicator = { showTypingIndicator }
        />
      </div>
    );
  }
}

const MessageCount = (props) => {
  if (props.count === 0 || props.isOpen === true) {
    return null
  }
  return ( <div className = { "sc-new-messages-count" }>
    { props.count }
    </div>
  )
}

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  onCarouselClick: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  conversationList: PropTypes.arrayOf(PropTypes.object),
  mute: PropTypes.bool,
  showLoadingIndicator: PropTypes.bool,
  showTypingIndicator: PropTypes.bool
};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showLoadingIndicator: true,
  showTypingIndicator: false
};

export default Launcher;
