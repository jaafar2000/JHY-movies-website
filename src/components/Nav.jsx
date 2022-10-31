import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function check() {
      if (window.scrollY > 10) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <div className="navLogo">
        <p className="logo">
          JHY
          <PlayCircleIcon sx={{ fontSize: 40, color: "red" }} />
        </p>
      </div>
      <div className={`navbar__links white  `}>
        <NavLink className="link" to="/home">
          HOME
        </NavLink>
        <NavLink className="link" to="/movie">
          MOVIE
        </NavLink>
        <NavLink className="link" to="/tv">
          TV
        </NavLink>
        <NavLink className="link search" to="/search">
          {" "}
          <span>SEARCH </span> | <SearchIcon sx={{ fontSize: 25 }} />
        </NavLink>
      </div>
        <div className="Login__register">
          <p>Login | Register</p>
        </div>
    </nav>
  );
};

export default Nav;
