import React, { useState } from 'react'

import Conversation from './Conversation'

import './ConversationList.css'

function ConversationList({ conversationList }) {
    const [conversations, setConversations] = useState(conversationList)

    const convos = conversations.map(data => <Conversation data={data} />)

    return (
        <div className='sc-conversation-list'>
            {convos}
        </div>
    )   
}

export default ConversationList
