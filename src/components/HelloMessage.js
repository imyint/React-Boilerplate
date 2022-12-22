import React from "react";
import "./HelloMessage.css";

class HelloMessage extends React.Component {
  render() {
    return <div className="message">Hello {this.props.name}</div>;
  }
}

export default HelloMessage;
