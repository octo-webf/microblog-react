import React, { Component } from 'react';
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
    this.state = { inputValue: '' };
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      window.localStorage.setItem('name', this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  }

  onChange({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  render() {
    return (
      <div className={loginForm}>
        <form className={loginFormForm}>
          <div className={loginFormControl}>
            <input
              value={this.state.inputValue}
              className={loginFormUsername}
              onChange={event => this.onChange(event)}
              onKeyPress={event => this.onEnter(event)}
            />
          </div>
          <div className={loginFormControl}>
            <button type="submit" className={loginFormIdentify}>
              S&apos;identifier
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
