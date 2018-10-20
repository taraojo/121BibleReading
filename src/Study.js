import React, { Component } from "react";
import { Skeleton } from "antd";
import Header from "./Header";

class Study extends Component {
  render() {
    return (
      <div>
        <Header title="Study #1" backButton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
}

export default Study;
