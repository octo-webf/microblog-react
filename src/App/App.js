import React, { Component } from 'react';
import InputMessage from '../InputMessage/InputMessage';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import MessageList from '../MessageList/MessagesList';
import { app, messageBox } from './App.css';
import { fetchMessages } from '../ApiHelper/ApiHelper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    return this.refresh();
  }

  refresh() {
    return fetchMessages()
      .then(messages => this.setState({ messages }));
  }

  render() {
    return (
      <div className={app}>
        <NavigationBar />
        <Login />
        <div className={messageBox}>
          <InputMessage onEnter={() => this.refresh()} />
          <MessageList messages={this.state.messages} />
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
