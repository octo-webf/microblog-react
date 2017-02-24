import React, {Component} from "react";
import Message from "../Message/Message";
import {messages, messages__ul, messages__li} from "./MessagesList.css";

const MessagesList = (props) => {
  return props.messages ?
    (
      <div className={ messages }>
        <ul className={messages__ul}>
          { props.messages.reverse()
            .map(message =>
              <li className={ messages__li }>
                <Message key={message.id} message={message}/>
              </li>) }
        </ul>
      </div>
    )
    : null
}

export default MessagesList;
