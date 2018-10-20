import React, { Component } from "react";
import { Card, Button } from "antd";
import Header from "./Header";
import Content from "./Content";
import styled from "react-emotion";
import api from "./api";

const Plan = styled(Card)`
  border-radius: 4px;
  width: 100%;
  background-color: ${props => (props.index == 0 ? "#007A9E" : "white")};
  color: ${props => (props.index == 0 ? "white" : "rgba(0, 0, 0, 0.65)")};
  h2 {
    color: ${props => (props.index == 0 ? "white" : "rgba(0, 0, 0, 0.65)")};
  }
  margin-bottom: 1em;
`;

const PlanHeader = styled("h2")`
  font-size: 2.2em;
`;

class Results extends Component {
  state = { plans: [] };
  async componentDidMount() {
    this.setState({ plans: await api.getPlans(0) });
  }

  render() {
    return (
      <div>
        <Header title="Choose a plan" backButton />
        <Content>
          {this.state.plans.map((plan, index) => (
            <Plan index={index}>
              <PlanHeader>{plan.name}</PlanHeader>
              <p>{plan.description}</p>
              <Button
                onClick={() => this.props.history.push(`/plan/${plan.id}`)}
                ghost
                block
              >
                Select plan
              </Button>
            </Plan>
          ))}
        </Content>
      </div>
    );
  }
}

export default Results;
