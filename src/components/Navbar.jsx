import React from "react";
import { Link, NavLink } from "react-router-dom";
import user from "../assets/user.png";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/3"></div>
      <div className="w-1/3 nav flex gap-5 fjustify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex w-1/3 justify-end gap-5">
        <img src={user} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10">
          Login
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
