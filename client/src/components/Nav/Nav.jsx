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
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            {!oAuth && (
              <li className="nav-link">
                <NavLink to="/auth">Sign in</NavLink>
              </li>
            )}
            {oAuth && <li className="nav-link">Hello {oAuth.name}!</li>}
            {oAuth && (
              <li className="nav-link" onClick={() => logout()}>
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
