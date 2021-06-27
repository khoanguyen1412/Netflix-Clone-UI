import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./NavBar.scss";

function NavBar(props) {
  const [showNavbar, setShowNavbar] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.addEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav__bar ${showNavbar ? "is_shown" : ""}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          alt=""
          src="../assets/images/netflix_logo.png"
        />
        <img
          className="nav__avatar"
          alt=""
          src="../assets/images/netflix_avatar.png"
        />
      </div>
    </div>
  );
}

export default NavBar;
