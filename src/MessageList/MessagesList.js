import React from 'react';
import Message from '../Message/Message';
import { messages, messagesUl, messagesLi } from './MessagesList.css';

const MessagesList = props => ((props.messages) ?
    (
      <div className={messages}>
        <ul className={messagesUl}>
          { props.messages.reverse()
            .map(message =>
              <li className={messagesLi}>
                <Message key={message.id} message={message} />
              </li>,
            )
          }
        </ul>
      </div>
    )
    : null);


MessagesList.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape()).isRequired,
};
export default MessagesList;
