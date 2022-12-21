import React, { useState } from "react";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="container">
      <div className="card w-100 shadow">
        <div className="card-header p-3">
          {isSignIn && (
            <span className="fw-bold">Signin & Let's get this started!</span>
          )}
          {!isSignIn && <span className="fw-bold">Let's get you onboard!</span>}
        </div>
        <form className="card-body p-3">
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
            <input type="password" className="form-control" id="password" />
          </div>
          {!isSignIn && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
              />
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
  );
}

export default Auth;
