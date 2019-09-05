import React, { useState } from 'react'

import Conversation from './Conversation'

import './ConversationList.css'

function ConversationList({ conversationList, onConversationClick }) {
    const [conversations, setConversations] = useState(conversationList)

    const convos = conversations.map((data, index) => <Conversation key={index} data={data} onConversationClick={onConversationClick}/>)
    const data = {messageHistory: []}

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
