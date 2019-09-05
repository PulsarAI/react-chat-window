import React, { useState } from 'react'

import './Conversation.css'

function Conversation ({ data, onConversationClick }) {
    const lastMessage = [...data.messageHistory].pop()

    return (
        <div className='sc-conversation' onClick={() => onConversationClick(data) }>
            <div className='sc-conversation--avatar'></div>
            <div className='sc-conversation--body'>
                <div className='sc-conversation--body-meta'>
                    <div className='sc-conversation--body-meta-name'>{data.initiator}</div>
                    <div className='sc-conversation--body-meta-timestamp'>
                        {new Date(data.timestamp).toLocaleDateString()}
                    </div>
                </div>

                <div className='sc-conversation--body-content'>
                    <div className='sc-conversation--body-content-text'>
                        {lastMessage.data.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation
