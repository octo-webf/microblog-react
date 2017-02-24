import React from 'react';
import { message, message__author, message__content } from './Message.css'

const Message = (props) => (
  <div className={ message }>
    <div className={ message__author }>
      { props.message.author }
    </div>
    <div className={ message__content }>
      { props.message.content }
    </div>
  </div>
);

export default Message;
