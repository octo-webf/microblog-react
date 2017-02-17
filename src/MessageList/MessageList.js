import React, {Component} from 'react';
import {fetchMessages} from '../ApiHelper/ApiHelper'
import Message from '../Message/Message'
import {container} from './MessageList.css'

const MessageList = (props) => {
  return props.messages ?
    (
      <ul className={ container }>
        { props.messages.reverse().map(message => <Message key={message.id} message={message}/>) }
      </ul>
    )
    : null
}

export default MessageList;
