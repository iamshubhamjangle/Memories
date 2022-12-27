import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import memories from "../../assets/memories.png";
import { removeUser, setIsLoggedIn } from "../../features/user/userSlice";
import "./styles.css";

function Nav() {
  const { isLoggedIn } = useSelector((store) => store.user);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const logout = () => {
    console.log("dispatch removeUser()");
    dispatch(removeUser());
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("storedUser ", storedUser);
    if (storedUser) {
      setUser(storedUser);
      dispatch(setIsLoggedIn(true));
    } else {
      setUser(null);
      dispatch(setIsLoggedIn(false));
    }
  }, [isLoggedIn]);

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Branding */}
        <div className="navbar-brand" href="#">
          <img
            src={memories}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          <NavLink to="/">Memories</NavLink>
        </div>
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
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            {!user && (
              <li className="nav-link">
                <NavLink to="/auth">Sign in</NavLink>
              </li>
            )}
            {user && (
              <li className="nav-link">
                <a>Hello {user?.name}!</a>
              </li>
            )}
            {user && (
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
