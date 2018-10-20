import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import api from "./api";
import BlueHeaderImage from "./img/blueBackground.jpeg";

class Study extends Component {
  state = {
    study: {},
    plan: {}
  };

  async componentDidMount() {
    const studyId = this.props.match.params.id;
    const planId = this.props.match.params.planId;
    const study = await api.getCurrentStudy(studyId);
    const plan = await api.getPlan(planId);
    this.setState({ study, plan });
  }

  render() {
    const { study, plan } = this.state;
    const { name, length, difficulty } = plan;

    return (
      <div>
        <Header
          title={name}
          imageSrc={BlueHeaderImage}
          averageTime={length}
          difficulty={difficulty}
          backButton
          withIcons
        />
        <Content>
          {study.content &&
            (study.content.map((obj) => {
              const thing = Object.values(obj);
              return (<p>{thing}</p>);
            }))}
        </Content>
      </div>
    );
  }
}

export default Study;
