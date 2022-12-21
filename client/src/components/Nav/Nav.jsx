import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import memories from "../../assets/memories.png";
import { removeUser } from "../../features/user/userSlice";
import "./styles.css";

function Nav() {
  const { oAuth } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(removeUser());
  };

  console.log(oAuth);

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Branding */}
        <a className="navbar-brand" href="#">
          <img
            src={memories}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Memories
        </a>
        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Items */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <a>My Memories</a>
            </li>
            <li className="nav-link">
              <a>About</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            {!oAuth && (
              <li className="nav-link">
                <NavLink to="/auth">Sign in</NavLink>
              </li>
            )}
            {oAuth && (
              <li className="nav-link">
                <a>Hello {oAuth.name}!</a>
              </li>
            )}
            {oAuth && (
              <li className="nav-link" onClick={() => logout()}>
                <a>Logout</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
