import React, { Component } from "react";
import Header from "./Header";
import { Skeleton, Button } from "antd";
import api from "./api";

class Plan extends Component {
  state = { plan: {} };
  async componentDidMount() {
    const planId = this.props.match.params.id;
    const plan = await api.getPlan(planId);
    this.setState({ plan });
  }
  render() {
    return (
      <div>
        <Header title="Plan #1" backButton />
        <Skeleton />
        <Skeleton />
        <Button
          type="primary"
          size="large"
          style={{ margin: "0 auto", display: "flex" }}
          onClick={() => {
            this.props.history.push("/study/1");
          }}
        >
          Start plan
        </Button>
      </div>
    );
  }
}

export default Plan;
