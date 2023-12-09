import { Component } from "react";

class Card extends Component {

  render(){
    return(
      <>
      <h1>{this.props.title}</h1>
      <p>{this.props.description}</p>
      </>
    ) 
    
  }
}

export default Card;
