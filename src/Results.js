import React, { Component } from "react";
import { Card, Button } from "antd";
import Header from "./Header";
import Content from "./Content";
import styled from "react-emotion";

const FAKE_RESULT_RESPONSE = {
  response: "success",
  payload: {
    query: {
      filter: "beg"
    },
    plans: [
      {
        name: "Mark",
        description:
          "Discover who Jesus said he is and think about how characters in the Bible reacted to his message",
        id: "0000"
      },
      {
        name: "Ephesians",
        description:
          "Discover who Jesus said he is and think about how characters in the Bible reacted to his message",
        id: "0001"
      }
    ]
  }
};

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
  componentDidMount() {
    fetch("http://localhost:3000/api")
      .then(response => FAKE_RESULT_RESPONSE)
      .then(json => this.setState({ plans: json.payload.plans }));
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
