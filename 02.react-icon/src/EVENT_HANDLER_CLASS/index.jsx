import React, { Component } from 'react'

export default class EVENT_HANDLER_CLASS extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       changedValue: '',
    }
  }

  handlerChange = (e) => {
    this.setState({
      changedValue: e.target.value
    },() =>{
      console.log(this.state.changedValue)
    })
  }
  
  render() {
    const { changedValue } = this.state
    return (
      <div>
        <input onChange={this.handlerChange}/>
        <p>{changedValue}</p>
      </div>
    )
  }
}

