import React, { Component } from "react";
// import { Slider, Select } from "antd";
import { Skeleton, Button } from "antd";
import Header from "./Header";

class Choices extends Component {
  render() {
    return (
      <div>
        <Header title="Gather context" />
        <Skeleton />
        <Skeleton />
        <Button
          onClick={() => {
            this.props.history.push("/results");
          }}
          type="primary"
          style={{ margin: "0 auto", display: "flex" }}
        >
          Find me plans
        </Button>
      </div>
    );
  }
}

export default Choices;
