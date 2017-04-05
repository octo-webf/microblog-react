import React, { Component } from 'react';
import { postMessage } from '../ApiHelper/ApiHelper';
import { input, inputMessage, inputMessageContent } from './InputMessage.css';

class InputMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      postMessage({
        author: window.localStorage.getItem('name'),
        content: this.state.inputValue,
      })
        .then(() => {
          this.props.onEnter();
        });
      this.setState({ inputValue: '' });
    }
  }

  onChange({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  render() {
    return (
      <div className={inputMessage}>
        <input
          className={[inputMessageContent, 'message-input__content'].join(' ')}
          placeholder="Quoi de neuf ?"
          value={this.state.inputValue}
          onChange={event => this.onChange(event)}
          onKeyPress={event => this.onEnter(event)}
        />
      </div>
    );
  }
}

InputMessage.propTypes = {
  onEnter: React.PropTypes.func.isRequired,
};

export default InputMessage;
