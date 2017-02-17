import React from 'react';
import { item, author, content } from './Message.css'

const Message = (props) => (
  <li className={ item }>
    <div className={ author }>
      { props.message.author }
    </div>
    <div className={ content }>
      { props.message.content }
    </div>
  </li>
);

export default Message;
