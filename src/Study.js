import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import api from "./api";
import BlueHeaderImage from "./img/blueBackground.jpeg";
import { Button } from "antd";
import { Icon } from "antd";

class Study extends Component {
  state = {
    study: {},
    plan: {},
    showSection: 0,
  };

  async componentDidMount() {
    const studyId = this.props.match.params.id;
    const planId = this.props.match.params.planId;
    const study = await api.getCurrentStudy(studyId);
    const plan = await api.getPlan(planId);
    this.setState({ study, plan });
  }

  nextSection = () => {
    this.setState(({showSection}) => ({ showSection: showSection + 1 }));
  }

  previousSection = () => {
    this.setState(({showSection}) => ({ showSection: showSection - 1 }));
  }

  getSection = (index) => {
    const { content } = this.state.study;
    const thing = Object.values(content[index]);
    return thing;
  }

  render() {
    const { study, plan, showSection } = this.state;
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
          {study.content && this.getSection(showSection)}

          {study.content &&
            <div style={{ textAlign: 'right' }}>
              <Button
                size="large"
                style={{ margin: "0.5rem", textAlign: "center" }}
                onClick={this.previousSection}
                disabled={showSection === 0}
              >
                <Icon
                  type="arrow-left"
                />
              </Button>
              <Button
                type="primary"
                size="large"
                style={{ margin: "0.5rem", textAlign: "center" }}
                onClick={this.nextSection}
                disabled={showSection === study.content.length}
              >
                <Icon
                  type="arrow-right"
                />
              </Button>
            </div>}
        </Content>
      </div>
    );
  }
}

export default Study;
