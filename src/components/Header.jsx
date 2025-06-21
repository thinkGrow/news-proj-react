import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img src={logo} alt="" />
      <p>Journalism without fear or flavor</p>
    </div>
  );
};

export default Header;
