import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid grey;
`;

class Landing extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <p>Login will go here</p>
          <Button>Go!</Button>
        </div>
      </div>
    );
  }
}

export default Landing;
