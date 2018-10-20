import React, { Component } from "react";
import { Button, Skeleton } from "antd";

class Home extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ minHeight: "45vh" }} />
        <div>
          <Skeleton />
          <Button
            style={{}}
            size="large"
            onClick={() => {
              this.props.history.push("/choices");
            }}
            type="primary"
            block
          >
            Find me plans
          </Button>
          <Button
            style={{ marginLeft: "auto", display: "flex", marginTop: "10px" }}
          >
            Have code?
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
