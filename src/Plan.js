import React, { Component } from "react";
import Header from "./Header";
import { Skeleton, Button } from "antd";

class Plan extends Component {
  render() {
    return (
      <div>
        <Header title="Plan #1" backButton />
        <Skeleton />
        <Skeleton />
        <Button type="primary" style={{ margin: "0 auto", display: "flex" }}>
          Start plan
        </Button>
      </div>
    );
  }
}

export default Plan;
