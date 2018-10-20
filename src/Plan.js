import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import { Skeleton, Button } from "antd";
import api from "./api";
import PlaceholderHeader from "./img/placeholder_header.gif";

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
        <Header
          title="Plan #1"
          description="This is an amazing plan"
          imageSrc={PlaceholderHeader}
          backButton
        />
        <Content>
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
        </Content>
      </div>
    );
  }
}

export default Plan;
