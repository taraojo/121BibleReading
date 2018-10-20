import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Skeleton } from "antd";
import Header from "./Header";

const FAKE_RESULT_RESPONSE = {
  response: "success",
  payload: {
    query: {
      filter: "beg"
    },
    plans: [
      {
        name: "plan",
        title: "Plan #1",
        description: "description",
        id: "0000"
      },
      {
        name: "plan2",
        title: "Plan #2",
        description: "description2",
        id: "0001"
      }
    ]
  }
};

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
          <Card
            title={plan.title}
            extra={<Link to={`/plan/${plan.id}`}>Select</Link>}
            style={{ width: "100%" }}
          >
            <Skeleton />
          </Card>
        ))}
      </div>
    );
  }
}

export default Results;
