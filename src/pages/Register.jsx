import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <h2 className="font-semibold text-2xl text-center">Register</h2>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
              />
              {/* photo */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                placeholder="Photo URL"
                name="photo"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />

              <button className="btn btn-neutral mt-4">Login</button>
              <p className="font-semibold text-center">
                Already have an account{" "}
                <Link to="/auth/login" className="text-secondary underline">
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
