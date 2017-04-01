import React from 'react';
import Message from '../Message/Message';
import { messages, messagesUl, messagesLi, messageEmpty } from './MessagesList.css';

const MessagesList = props => ((props.messages && props.messages.length) ?
  (
    <div className={messages}>
      <ul className={messagesUl}>
        { props.messages.reverse()
          .map(message =>
            <li key={message.id} className={messagesLi}>
              <Message message={message} />
            </li>,
          )
        }
      </ul>
    </div>
  )
  : (<div className={messageEmpty}>Aucun message n&apos;a été publié pour le moment.</div>));


MessagesList.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape()).isRequired,
};
export default MessagesList;
