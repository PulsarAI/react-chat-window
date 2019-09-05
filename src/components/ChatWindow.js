import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList'
import ConversationList from './Conversation/ConversationList'
import UserInput from './UserInput'
import Header from './Header'


class ChatWindow extends Component {
    constructor(props) {
      super(props);

      this.state = {
        title: 'Your Conversations',
        activeConversation: false,
        messageList: []
      }

      this.onConversationClick = this.onConversationClick.bind(this)
      this.onBackButtonClick = this.onBackButtonClick.bind(this)
    }

    onUserInputSubmit(message) {
      this.props.onUserInputSubmit(message);
    }

    onFilesSelected(filesList) {
      this.props.onFilesSelected(filesList);
    }

    onBackButtonClick () {
      this.setState({
        title: 'Your Conversations',
        activeConversation: false,
        messageList: []
      })
    }

    onConversationClick (data) {
      const messageList = data.messageHistory

      this.setState({
        title: 'Bot',
        activeConversation: true,
        messageList
      })
    }

    render() {
      const {
        activeConversation
      } = this.state

      let messageList = this.props.messageList || this.state.messageList;
      let classList = [
        "sc-chat-window",
        (this.props.isOpen ? "opened" : "closed")
      ];
      return (
        <div className={classList.join(' ')}>
          <Header
            teamName={this.state.title}
            onClose={this.props.onClose}
            showBackButton={activeConversation}
            onBackButtonClick={this.onBackButtonClick}
          />
          {
            activeConversation ?
            (<MessageList
              messages={messageList}
              onCarouselClick={this.props.onCarouselClick}
              imageUrl={this.props.agentProfile.imageUrl}
              showTypingIndicator={this.props.showTypingIndicator}
            />)
            :
            (<ConversationList conversationList={this.props.conversationList} onConversationClick={this.onConversationClick} />)
          }
          <UserInput
            onSubmit={this.onUserInputSubmit.bind(this)}
            onFilesSelected={this.onFilesSelected.bind(this)}
          />
        </div>
      );
    }
}

ChatWindow.propTypes = {
  agentProfile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  onUserInputSubmit: PropTypes.func.isRequired,
  showTypingIndicator: PropTypes.bool
}

export default ChatWindow;
