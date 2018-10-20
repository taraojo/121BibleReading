import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Skeleton, Icon } from "antd";
import Header from "./Header";
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
        <Header title="Choose a plan..." backButton />
        {this.state.plans.map(plan => (
          <Plan>
            <h2>{plan.name}</h2>
            <p>{plan.description}</p>
          </Plan>
        ))}
      </div>
    );
  }
}

export default Results;
