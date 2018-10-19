import React, { Component } from "react";

class Choices extends Component {
  render() {
    return (
      <div>
        <h1>I am / I want to read with</h1>
        <select>
          <option>a new christian</option>
          <option>an older christian</option>
          <option>a non christian</option>
        </select>
      </div>
    );
  }
}

export default Choices;
