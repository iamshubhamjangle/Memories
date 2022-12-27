import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";

import "./styles.css";
import { setUser } from "../../features/user/userSlice";
import { signIn, signUp } from "../../api/user";
import LoadingButton from "../Utils/LoadingButton";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [formData, setFormData] = useState(initialState);

  const { isLoggedIn, loading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Auth.jsx");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) navigate("/");
  }, [isLoggedIn]);

  const handleTogglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const googleSuccess = async (res) => {
    // console.log("OAuth - res", res);
    // console.log("OAuth - res.credential", jwtDecode(res.credential));
    const { email, name, picture, sub: id } = jwtDecode(res.credential);
    const token = res.credential;
    const user = { email, name, picture, id, token };
    dispatch(setUser(user));
  };

  const googleFailure = (err) => {
    console.log("Google Login Failed: ", err);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      dispatch(signIn(formData));
    } else {
      dispatch(signUp(formData));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="Auth-container" className="d-flex align-items-center">
      <div className="container">
        <div className="card w-100 m-0 shadow">
          {/* {JSON.stringify(formData)} */}
          <div className="card-header p-3">
            {isSignIn && (
              <span className="fw-bold">Signin & Let's get this started!</span>
            )}
            {!isSignIn && (
              <span className="fw-bold">Let's get you onboard!</span>
            )}
          </div>
          <form className="card-body p-3" onSubmit={handleFormSubmit}>
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
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    aria-describedby="firstName"
                    onChange={(e) => handleChange(e)}
                    required={!isSignIn ? true : false}
                  />
                </div>
                <div className="mb-3 flex-fill">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    id="lastName"
                    aria-describedby="lastName"
                    onChange={(e) => handleChange(e)}
                    required={!isSignIn ? true : false}
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
                name="email"
                className="form-control"
                id="inputEmail1"
                aria-describedby="inputEmail1"
                onChange={(e) => handleChange(e)}
                required={true}
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
                  name="password"
                  id="password"
                  onChange={(e) => handleChange(e)}
                  required={true}
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
                    name="confirmPassword"
                    onChange={(e) => handleChange(e)}
                    required={!isSignIn ? true : false}
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
            {!loading && (
              <button type="submit" className="btn btn-primary">
                {isSignIn && <span>Sign in</span>}
                {!isSignIn && <span>Register</span>}
              </button>
            )}
            {loading && <LoadingButton minWidth="30px" />}
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
