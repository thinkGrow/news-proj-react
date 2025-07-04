import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../provider/AuthContext";

const Login = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  console.log(location);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;

        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h2 className="font-semibold text-2xl text-center">Login</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              defaultValue="123@456.com"
              requied
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              defaultValue="123456"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center">
              Don't have account?{" "}
              <Link to="/auth/register" className="text-secondary underline">
                Register
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
