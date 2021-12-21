import React from "react";
import NavBar from "../components/NavBar/NavBar";

const NavbarTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default NavbarTemplate;
