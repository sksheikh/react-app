import React, { Component } from 'react'
import './index.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  
  render() {
    const {count} =this.state
    return (
      <div>
        <p>Count : {count}</p>
        <button onClick={this.handleIncrement} disabled={count===5}> + </button>
        <button onClick={this.handleDecrement} disabled={count===0}> - </button>
      </div>
    )
  }
}
