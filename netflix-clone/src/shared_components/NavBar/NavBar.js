import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../app/appSlice";
import { BsFillBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

function NavBar(props) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  function logoutApp() {
    dispatch(logout(false));
  }

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
        <div className="nav__leftContents">
          <img
            className="nav__logo"
            alt=""
            src="../assets/images/netflix_logo.png"
          />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Browse
              <AiFillCaretDown className="icon-arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">TV Shows</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Movies</Dropdown.Item>
              <Dropdown.Item href="#/action-3">{`New & Popular`}</Dropdown.Item>
              <Dropdown.Item href="#/action-4">My List</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div
            onClick={() => {
              history.push("/");
            }}
            className={`nav_link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </div>
          <div
            onClick={() => {
              history.push("/tvshows");
            }}
            className={`nav_link ${
              location.pathname === "/tvshows" ? "active" : ""
            }`}
          >
            TV Shows
          </div>
          <div
            onClick={() => {
              history.push("/movies");
            }}
            className={`nav_link ${
              location.pathname === "/movies" ? "active" : ""
            }`}
          >
            Movies
          </div>
          <div
            onClick={() => {
              history.push("/newpopular");
            }}
            className={`nav_link ${
              location.pathname === "/newpopular" ? "active" : ""
            }`}
          >
            New & Popular
          </div>
          <div
            onClick={() => {
              history.push("/mylist");
            }}
            className={`nav_link ${
              location.pathname === "/mylist" ? "active" : ""
            }`}
          >
            My List
          </div>
        </div>
        <div className="nav__rightContents">
          <div className={`search-bar ${openSearch ? "show" : "hidden"}`}>
            <FaSearch className="input-icon" />
            <input
              onBlur={() => setOpenSearch(false)}
              autoFocus
              type="text"
              placeholder="Titles, people, genres"
            />
          </div>

          <FaSearch
            className={`icon-search nav__icon ${
              openSearch ? "hidden" : "show"
            }`}
            onClick={() => setOpenSearch(!openSearch)}
          />
          <BsFillBellFill className="icon-noti nav__icon" />
          <img
            className="nav__avatar"
            alt=""
            src="../assets/images/netflix_avatar.png"
            onClick={logoutApp}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
