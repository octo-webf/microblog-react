import React, {Component} from 'react';
import InputMessage from '../InputMessage/InputMessage'
import MessageList from '../MessageList/MessagesList';
import {app, messageBox} from './App.css'
import { fetchMessages } from '../ApiHelper/ApiHelper'
import { Router, Route, Link } from 'react-router'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {messages: []}
  }

  componentWillMount() {
    return this.refresh()
  }

  refresh() {
    return fetchMessages()
      .then(messages => this.setState({messages}))
  }

  render() {
    return (
      <div className={app}>
        <div className={messageBox}>
          {/*{this.children}*/}
          <InputMessage onEnter={() => this.refresh()}/>
          <MessageList messages={this.state.messages}/>
          <Link to="/about">about</Link>
        </div>
      </div>
    )
  }
}


export default App;
