import React, { use } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import AuthContext from "../provider/AuthContext";
// import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    console.log("user trying to log out");
    logOut()
      .then(() => {
        alert("Logged Out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/3">{user && user.email}</div>
      <div className="w-1/3 nav flex gap-5 fjustify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex w-1/3 justify-end gap-5">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
