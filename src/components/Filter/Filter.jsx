import './Filter.css'
import React, { Component } from 'react'

class Filter extends Component {
  state = {
    inputValue: '',
  }

  handleChange = (evt) => {
    const value = evt.target.value
    this.setState({ inputValue: value })
    this.props.onChange(value)
  }

  render() {
    const { inputValue } = this.state
    return (
      <div>
        <p className="text">Find contacts by name</p>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Filter
