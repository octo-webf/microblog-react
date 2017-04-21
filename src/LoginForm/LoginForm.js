import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { authenticate } from '../AuthenticationService/AuthenticationService';

import {
  loginForm,
  loginFormForm,
  loginFormControl,
  loginFormIdentify,
  loginFormUsername,
} from './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isAuthenticated: false,
    };
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      this.authenticate();
    }
  }

  onChange({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  authenticate() {
    authenticate(this.state.inputValue);
    this.setState({ isAuthenticated: true });
  }

  render() {
    return this.state.isAuthenticated ?
      (<Redirect to="/" />)
      : (
        <div className={loginForm}>
          <form className={loginFormForm}>
            <div className={loginFormControl}>
              <input
                value={this.state.inputValue}
                className={[loginFormUsername, 'login-form__username'].join(' ')}
                onChange={event => this.onChange(event)}
                onKeyPress={event => this.onEnter(event)}
                placeholder="Votre nom d'utilisateur"
              />
            </div>
            <div className={loginFormControl}>
              <button type="button" onClick={() => this.authenticate()} className={[loginFormIdentify, 'login-form__identify'].join(' ')}>
              S&apos;identifier
            </button>
            </div>
          </form>
        </div>
    );
  }
}

export default LoginForm;
