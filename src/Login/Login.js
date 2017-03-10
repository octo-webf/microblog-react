import React, { Component } from 'react';
import {} from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      window.localStorage.setItem('name', this.state.inputValue);
      // postName({
      //   author: 'John Smith',
      //   content: this.state.inputValue
      // })
       // .then(() => {
        //  this.props.onEnter()
        // })
      this.setState({ inputValue: '' });
    }
  }

  onChange({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={event => this.onChange(event)}
          onKeyPress={event => this.onEnter(event)}
        />
      </div>
    );
  }
}

export default Login;
