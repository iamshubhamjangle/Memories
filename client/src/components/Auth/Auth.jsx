import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";

import "./styles.css";
import { setUser } from "../../features/user/userSlice";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
      navigate("/");
    }
  }, []);

  const handleTogglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const googleSuccess = async (res) => {
    const { email, name, picture, sub: id } = jwtDecode(res.credential);
    const user = { email, name, picture, id };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser(user));
    navigate("/");
  };

  const googleFailure = (err) => {
    console.log("Google Login Failed: ", err);
  };

  return (
    <div id="Auth-container" className="d-flex align-items-center">
      <div className="container">
        <div className="card w-100 m-0 shadow">
          <div className="card-header p-3">
            {isSignIn && (
              <span className="fw-bold">Signin & Let's get this started!</span>
            )}
            {!isSignIn && (
              <span className="fw-bold">Let's get you onboard!</span>
            )}
          </div>
          <form className="card-body p-3">
            <div className="mb-3">
              <GoogleLogin
                theme="filled_blue"
                width="200px"
                onSuccess={googleSuccess}
                onError={googleFailure}
              />
            </div>
            {!isSignIn && (
              <div className="d-flex gap-3">
                <div className="mb-3 flex-fill">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="firstName"
                    aria-describedby="firstName"
                  />
                </div>
                <div className="mb-3 flex-fill">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="lastName"
                    aria-describedby="lastName"
                  />
                </div>
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="inputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail1"
                aria-describedby="inputEmail1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className=" input-group">
                <input
                  type={hidePassword && "password"}
                  className="form-control"
                  id="password"
                />
                <button
                  className="btn"
                  type="button"
                  id="hide-password"
                  onClick={() => handleTogglePasswordVisibility()}
                >
                  {hidePassword && <i className="fa-regular fa-eye"></i>}
                  {!hidePassword && <i className="fa-regular fa-eye-slash"></i>}
                </button>
              </div>
            </div>
            {!isSignIn && (
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <div className="input-group">
                  <input
                    type={hidePassword && "password"}
                    className="form-control"
                    id="confirm-password"
                  />
                  <button
                    className="btn"
                    type="button"
                    id="hide-confirm-password"
                    onClick={() => handleTogglePasswordVisibility()}
                  >
                    {hidePassword && <i className="fa-regular fa-eye"></i>}
                    {!hidePassword && (
                      <i className="fa-regular fa-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
            )}
            {!isSignIn && (
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label form-text"
                  htmlFor="exampleCheck1"
                >
                  I Agree all the Terms and Conditions
                </label>
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              {isSignIn && <span>Sign in</span>}
              {!isSignIn && <span>Register</span>}
            </button>
            <span
              className="ms-3 fst-italic text-decoration-underline"
              style={{ cursor: "pointer" }}
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {!isSignIn ? "or else Login instead!" : "or else SignUp instead!"}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
