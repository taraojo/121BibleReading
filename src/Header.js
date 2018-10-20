import React from "react";
import NavBar from "./NavBar";
import HeaderIcons from "./HeaderIcons";

const Header = props => {
  const { title, imageSrc, withIcons } = props;
  const textColour = imageSrc ? 'white' : 'inherit';

  return (
    <div style={{
      backgroundImage: `url(${imageSrc}`,
      padding: '1rem',
      color: textColour,
    }}>
      <NavBar {...props} />
      <h1 style={{
        marginBottom: '0', paddingTop: '1rem', color: textColour
      }}>
        <strong>{title}</strong>
      </h1>
      {withIcons &&
        <HeaderIcons
          averageTime="30 mins"
          difficulty="Easy"
        />}
    </div>
  );
};

export default Header;
