import React, { Component } from "react";
import { Button } from "antd";
import Content from "./Content";
import Logo from "./img/biblemate_logo.svg";

class Home extends Component {
  render() {
    return (
      <Content>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "18px" }}
        >
          <div style={{ padding: "38px 38px 0 38px" }}>
            <img src={Logo} />
          </div>
          <p style={{ textAlign: "center", fontSize: "16px" }}>
            An easy, accessible way to read the bible with other people.
            <br /> No experience needed.
          </p>
          <Button
            style={{ marginTop: "48px" }}
            size="large"
            onClick={() => {
              this.props.history.push("/choices");
            }}
            type="primary"
            block
          >
            Find a plan
          </Button>
        </div>
      </Content>
    );
  }
}

export default Home;
