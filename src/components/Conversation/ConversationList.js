import React from 'react'

import Conversation from './Conversation'
import Loader from '../Loader'

import './ConversationList.css'

function ConversationList ({ showLoadingIndicator, conversationList, onConversationClick }) {
    const convos = conversationList.map((data, index) => <Conversation key={index} data={data} onConversationClick={onConversationClick}/>)
    const data = { messageHistory: [] }

    if (showLoadingIndicator) {
        return (
            <div className='sc-loader-container'>
                <Loader />
            </div>
        )
    }

    return (
        <div className='sc-conversation-list'>
            <div className='sc-conversation-list--all'>
                {convos}
            </div>
            <div className='sc-conversation-list--new'>
                <button className='sc-conversation-list--new-btn' onClick={() => onConversationClick(data)}>New Conversation</button>
            </div>
        </div>
    )
}

export default ConversationList
