import React, { Component } from "react";
// import { Slider, Select } from "antd";
import { Button } from "antd";
import Header from "./Header";
import styled, { css } from "react-emotion";

const Choice = styled(Button)`
  margin-bottom: 15px;
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
        <Header title="Customise your plan" backButton />
        <h3
          className={css`
            text-align: center;
          `}
        >
          I am reading with a...
        </h3>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            margin-top: 30px;
          `}
        >
          <Choice
            onClick={() =>
              this.props.history.push("/results?scenario=non-christian")
            }
          >
            Non Christian
          </Choice>
          <Choice
            onClick={() =>
              this.props.history.push("/results?scenario=new-christian")
            }
          >
            New Christian
          </Choice>
          <Choice
            onClick={() =>
              this.props.history.push("/results?scenario=experienced-christian")
            }
          >
            Experienced Christian
          </Choice>
        </div>
      </div>
    );
  }
}

export default Choices;
