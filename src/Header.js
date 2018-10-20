import React from "react";
import NavBar from "./NavBar";

const Header = props => {
  const { title, description, imageSrc } = props;
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
      <p>{description}</p>
    </div>
  );
};

export default Header;
