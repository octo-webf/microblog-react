import React, {Component} from 'react';
import {postMessage} from '../ApiHelper/ApiHelper'
import {container, input} from './InputMessage.css'

class InputMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: ''}
  }

  onEnter({key}) {
    if (key === 'Enter') {
      postMessage({
        author: 'John Smith',
        content: this.state.inputValue
      })
        .then(() => {
          this.props.onEnter()
        })
      this.setState({inputValue: ''})
    }
  }

  onChange({target: {value}}) {
    this.setState({inputValue: value})
  }

  render() {
    return (
      <div className={ container }>
        <input
          className={ input }
          value={ this.state.inputValue }
          onChange={ (event) => this.onChange(event) }
          onKeyPress={ (event) => this.onEnter(event) }
        />
      </div>

    )
  }
}

export default InputMessage;
