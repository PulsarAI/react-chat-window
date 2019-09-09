import React, { useState, useEffect } from 'react'

import Message from './Messages'
import TypingIndicator from './TypingIndicator'

function MessageList ({ messages, onCarouselClick, showTypingIndicator }) {
    const [element, setElement] = useState({})

    useEffect(() => {
        element.scrollTop = element.scrollHeight
    })

    return (
        <div className='sc-message-list' ref={(el) => setElement(el)}>
            {messages.map((message, i) => <Message message={message} onCarouselClick={onCarouselClick} key={i} />)}
            {showTypingIndicator && <TypingIndicator />}
        </div>)
}

export default MessageList
