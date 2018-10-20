import React, { Component } from "react";
import { Skeleton } from "antd";
import Header from "./Header";
import Content from "./Content";

class Study extends Component {
  render() {
    return (
      <div>
        <Header title="Study #1" backButton />
        <Content>
          <Skeleton />
          <Skeleton />
        </Content>
      </div>
    );
  }
}

export default Study;
