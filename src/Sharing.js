import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import api from "./api";
import BlueHeaderImage from "./img/blueBackground.jpeg";
import { Button } from "antd";
import styled from "react-emotion";
import CharlieAndLola from "./img/charlieandlola.svg";
import sharingIconsHACK from "./img/sharingIconsHACK.png";

const ImageContainer = styled(`div`)`
  padding: 2rem 6rem;
`;

class Sharing extends Component {
  state = { plan: {} };

  async componentDidMount() {
    const planId = this.props.match.params.id;
    const plan = await api.getPlan(planId);
    this.setState({ plan });
  }

  startStudy = async () => {
    const { id } = this.state.plan;
    const response = await api.startPlan(id);
    this.props.history.push(`/study/${id}/${response}`);
  };

  render() {
    const { name, length, difficulty, id } = this.state.plan;
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
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            Invite others to join this plan
          </h3>
          <div
            style={{
              background: "white",
              border: " solid rgb(104,201,222) thin",
              margin: "1rem 0",
              padding: "1rem",
              fontSize: ".8rem"
            }}
          >
            www.biblemate.co.uk/plans/
            {id}
          </div>

          <div style={{ textAlign: "center", paddingBottom: "1.5rem" }}>
            <a
              href={`whatsapp://send?text=Look at this great plan www.biblemate.co.uk/plans/{id}`}
            >
              <img src={sharingIconsHACK} alt="" style={{ width: "75%" }} />
            </a>
          </div>

          <Button
            type="primary"
            size="large"
            style={{ margin: "0.5rem auto", textAlign: "center" }}
            onClick={this.startStudy}
            block
          >
            Go to plan
          </Button>

          <ImageContainer>
            <img src={CharlieAndLola} alt="" />
          </ImageContainer>
        </Content>
      </div>
    );
  }
}

export default Sharing;
