import React, { Component } from "react";
import { Button } from "antd";
import Content from "./Content";
import styled, { css } from "react-emotion";
import CharlieAndLola from "./img/charlieandlola.svg";
import NavBar from "./NavBar";

const ImageContainer = styled(`div`)`
  padding: 2rem 7rem;
`;

class Complete extends Component {
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
          <strong>Congratulations on</strong>
        </h1>
        <Content>
          <h3
            className={css`
              text-align: center;
            `}
          >
            <strong>completing your plan</strong>
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
                this.props.history.push("/choices")
              }
              type="primary"
              block
            >
              Start a new plan
            </Button>
          </div>
        </Content>
      </div>
    );
  }
}

export default Complete;
