import React, { Component } from 'react';
import Linkify from 'react-linkify';


const TextMessage = ({ data }) => {
  const { text, quickReplies } = data

  let quickReplyTags = []

  if (Array.isArray(quickReplies)) {
    quickReplyTags = quickReplies.map(({title, payload}, index) => (
      <div className="sc-message--quick-reply" data-payload={payload} key={index}>{title}</div>
    ))
  }


  return <div className="sc-message--text">
    <Linkify properties={{ target: '_blank' }}>{text}</Linkify>
    { quickReplies && (
      <div className="sc-message--quick-reply-container">
        {quickReplyTags}
      </div>
      )
    }
  </div>
}

export default TextMessage
