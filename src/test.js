import React, { Component } from 'react'
import { render } from 'react-dom'
import Launcher from '.'
import messageHistory from './messageHistory'
import conversationHistory from './conversationHistory'

class Demo extends Component {
    constructor () {
        super()
        this.state = {
            messageList: messageHistory,
            conversationList: conversationHistory,
            newMessagesCount: 0,
            isOpen: true,
            isTyping: false,
            showLoadingIndicator: true
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                showLoadingIndicator: false
            })
        }, 500)
    }

    _onMessageWasSent (message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

    _onFilesSelected (fileList) {
        const objectURL = window.URL.createObjectURL(fileList[0])
        this.setState({
            messageList: [...this.state.messageList, {
                type: 'file',
                author: 'me',
                data: {
                    url: objectURL,
                    fileName: fileList[0].name
                }
            }]
        })
    }

    _sendMessage (text) {
        if (text.length > 0) {
            const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1
            this.setState({
                newMessagesCount,
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    }

    _startTyping () {
        this.setState({
            isTyping: true
        })
    }

    _stopTyping () {
        this.setState({
            isTyping: false
        })
    }

    _handleClick () {
        this.setState({
            isOpen: !this.state.isOpen,
            newMessagesCount: 0
        })
    }

    _onCarouselClick (event) {
    }

    render () {
        return <div>
            <Launcher
                agentProfile={{
                    teamName: 'react-chat-window',
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                onFilesSelected={this._onFilesSelected.bind(this)}
                onCarouselClick={this._onCarouselClick.bind(this)}
                messageList={this.state.messageList}
                conversationList={this.state.conversationList}
                newMessagesCount={this.state.newMessagesCount}
                handleClick={this._handleClick.bind(this)}
                isOpen={this.state.isOpen}
                showTypingIndicator={this.state.isTyping}
                showLoadingIndicator={this.state.showLoadingIndicator}
            />
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
