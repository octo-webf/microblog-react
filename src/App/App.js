import React, {Component} from 'react';
import InputMessage from '../InputMessage/InputMessage'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import NavigationBar from '../NavigationBar/NavigationBar'
import MessageList from '../MessageList/MessagesList';
import {app, messageBox} from './App.css'
import { fetchMessages } from '../ApiHelper/ApiHelper'
import { Router, Route, Link } from 'react-router'

const navigationLink1 = { id: 'abcd', url: '/#', icon: 'homeIcon',  label: 'Accueil' }
const navigationLink2 = { id: 'abcd2', url: '/#about', icon: 'icon',  label: 'A propos' }

const navigationLinks = [
  navigationLink1,
  navigationLink2
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      navigationLinks: navigationLinks
    }
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
        <NavigationBar navigationLinks={this.state.navigationLinks}/>
        <div className={messageBox}>
          <InputMessage onEnter={() => this.refresh()}/>
          <MessageList messages={this.state.messages}/>
          <Footer/>
        </div>
        <Login/>
      </div>
    )
  }
}


export default App;
