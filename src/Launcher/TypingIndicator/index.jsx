import React from 'react'

import './TypingIndicator.css'

function TypingIndicator () {
    return (
        <div className='sc-typing-indicator'>
            <div className='sc-typing-indicator--message'>
                <div className='sc-typing-indicator--dot'></div>
                <div className='sc-typing-indicator--dot'></div>
                <div className='sc-typing-indicator--dot'></div>
            </div>
        </div>
    )
}


export default TypingIndicator
