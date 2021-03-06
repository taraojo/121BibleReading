import React, { Fragment } from "react";
import FeatherSvg from "./icons/FeatherSvg";
import { Icon } from "antd";
import styled from "react-emotion";

const transparentWhite = "rgba(255, 255, 255, 0.5)";

const IconSection = styled(`div`)`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1rem;

  span {
    margin-left: 0.5rem;
  }
`;

const HeaderIcons = ({ averageTime, difficulty }) => (
  <Fragment>
    <IconSection>
      <Icon type="clock-circle" />
      <span>{averageTime} mins</span>
    </IconSection>
    <IconSection>
      {[1, 2, 3].map((_, index) => (
        <Icon
          key={_}
          component={() => FeatherSvg(index ? transparentWhite : "#fff")}
        />
      ))}
      <span>Easy</span>
    </IconSection>
  </Fragment>
);

export default HeaderIcons;
