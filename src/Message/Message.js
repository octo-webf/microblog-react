import React from 'react';
import { message, messageAuthor, messageContent } from './Message.css';

const Message = props => (
  <div className={message}>
    <div className={messageAuthor}>
      { props.message.author }
    </div>
    <div className={messageContent}>
      { props.message.content }
    </div>
  </div>
);

Message.propTypes = {
  message: React.PropTypes.shape({
    author: React.PropTypes.string,
    content: React.PropTypes.string,
  }).isRequired,
};

export default Message;
