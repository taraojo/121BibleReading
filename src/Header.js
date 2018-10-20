import React from "react";
import NavBar from "./NavBar";

const Header = props => {
  const { title } = props;
  return (
    <div>
      <NavBar {...props} />
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>{title}</h1>
    </div>
  );
};

export default Header;
