import React, {Component} from 'react';
import InputMessage from '../InputMessage/InputMessage'
import MessageList from '../MessageList/MessageList';
import {container, messageBox} from './App.css'
import { fetchMessages } from '../ApiHelper/ApiHelper'

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
      <div className={container}>
        <div className={messageBox}>
          <InputMessage onEnter={() => this.refresh()}/>
          <MessageList messages={this.state.messages}/>
        </div>
      </div>
    )
  }
}


export default App;
