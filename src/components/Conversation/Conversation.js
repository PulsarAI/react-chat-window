import React, { useState } from 'react'

import './Conversation.css'

function Conversation ({ data }) {
    return (
        <div className='sc-conversation'>
            <div className='sc-conversation--avatar'></div>
            <div className='sc-conversation--body'>
                <div className='sc-conversation--body-name'></div>
                
            </div>
        </div>
    )
}

export default Conversation
