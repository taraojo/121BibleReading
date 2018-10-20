import React, { Component } from "react";
// import { Slider, Select } from "antd";
import { Button } from "antd";
import Content from "./Content";
import styled, { css } from "react-emotion";
import CharlieAndLola from "./img/charlieandlola.svg";
import NavBar from "./NavBar";

const ImageContainer = styled(`div`)`
  padding: 2rem 7rem;
`;

const handleChoice = choice => {
  const choices = {
    nonChristian: "1",
    newChristian: "2",
    experiencedChristian: "3"
  };

  return choices[choice];
};

class Choices extends Component {
  render() {
    return (
      <div>
        <Content>
          <NavBar backButton />
        </Content>
        <ImageContainer>
          <img src={CharlieAndLola} alt="" />
        </ImageContainer>
        <h1 style={{ textAlign: 'center', marginBottom: '0' }}>
          <strong>Customise your plan</strong>
        </h1>
        <Content>
          <h3
            className={css`
              text-align: center;
            `}
          >
            <strong>I am reading the Bible with a</strong>
          </h3>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              margin-top: 30px;
            `}
          >
            <Button
              size="large"
              onClick={() =>
                this.props.history.push("/results?scenario=non-christian")
              }
              type="primary"
              block
            >
              Non Christian
            </Button>
            <Button
              style={{ marginTop: "20px" }}
              size="large"
              onClick={() =>
                this.props.history.push("/results?scenario=new-christian")
              }
              type="primary"
              block
            >
              New Christian
            </Button>
            <Button
              style={{ marginTop: "20px" }}
              size="large"
              onClick={() =>
                this.props.history.push("/results?scenario=experienced-christian")
              }
              type="primary"
              block
            >
              Experienced Christian
            </Button>
          </div>
        </Content>
      </div>
    );
  }
}

export default Choices;
