import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { useDispatch } from "react-redux";
import { logout, setIsShowDrawer } from "../../app/appSlice";
import { BsFillBellFill, BsList } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BiLogOut, BiExit } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

import { AiFillCaretDown, AiOutlineLock } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

function NavBar(props) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [unreadMes, setUnreadMes] = useState(0);

  const listNotiInit = [
    {
      image:
        "https://image.tmdb.org/t/p/original//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
      message:
        "Godzilla vs. Kong has just released on Netflix, enjoy the movie now.",
      time: "Today",
      isNew: true,
    },
    {
      image:
        "https://image.tmdb.org/t/p/original//wr7nrzDrpGCEgYnw15jyAB59PtZ.jpg",
      message:
        "Loki is on air today, subcribed to see more episodes of this series.",
      time: "Today",
      isNew: true,
    },
    {
      image:
        "https://image.tmdb.org/t/p/original//vqEjXzWdzPbV2DZ7bk29weDFiDl.jpg",
      message:
        "Your favority movie has been removed from Netflix because of the copyright.",
      time: "21/07",
      isNew: false,
    },
    {
      image:
        "https://occ-0-1009-2219.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd",
      message:
        "Netflix has released the version for kids, let's take it for your children",
      time: "15/07",
      isNew: true,
    },
    {
      image:
        "https://image.tmdb.org/t/p/original//6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
      message:
        "Nobody is updated to Full HD quality, go and enjoy the better solution now",
      time: "01/07",
      isNew: false,
    },
    {
      image: "../assets/images/profile_image_2.png",
      message:
        "Your account will be outdated tomorrow. Check the payment plan now.",
      time: "30/06",
      isNew: true,
    },
  ];

  const [listNoti, setListNoti] = useState(listNotiInit);

  useEffect(() => {
    var countUnread = 0;
    for (let i = 0; i < listNotiInit.length; i++) {
      if (listNotiInit[i].isNew === true) {
        countUnread++;
      }
    }
    setUnreadMes(countUnread);
    console.log(countUnread);
    // eslint-disable-next-line
  }, []);

  function clickNoti(index) {
    var cloneNotis = [];
    for (let i = 0; i < listNoti.length; i++) {
      if (i === index) {
        cloneNotis.push({
          ...listNoti[i],
          isNew: false,
        });
      } else {
        cloneNotis.push(listNoti[i]);
      }
    }
    setListNoti(cloneNotis);

    var countUnread = 0;
    for (let i = 0; i < cloneNotis.length; i++) {
      if (cloneNotis[i].isNew === true) {
        countUnread++;
      }
    }
    setUnreadMes(countUnread);
  }

  function logoutApp() {
    dispatch(logout(history));
  }

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  function clearAllNoti() {
    setListNoti([]);
    setUnreadMes(0);
  }

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
            onClick={() => {
              history.push("/");
            }}
          />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Browse
              <AiFillCaretDown className="icon-arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  history.push("/");
                }}
                className={`${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/tvshows");
                }}
                className={`${
                  location.pathname === "/tvshows" ? "active" : ""
                }`}
              >
                TV Shows
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/movies");
                }}
                className={`${location.pathname === "/movies" ? "active" : ""}`}
              >
                Movies
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/newpopular");
                }}
                className={`${
                  location.pathname === "/newpopular" ? "active" : ""
                }`}
              >
                New & Popular
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/mylist");
                }}
                className={`${location.pathname === "/mylist" ? "active" : ""}`}
              >
                My List
              </Dropdown.Item>
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
          <Dropdown className="noti-dropdown">
            <Dropdown.Toggle className="noti-toggle" variant="success">
              <BsFillBellFill className="icon-noti nav__icon" />
              <div className={`badge ${unreadMes === 0 && "hidden"}`}>
                {unreadMes}
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu align="right">
              <Dropdown.ItemText>
                <div className="header">
                  <div className="title">Notifications</div>
                  <div className="clear-btn" onClick={clearAllNoti}>
                    Clear all
                  </div>
                </div>
              </Dropdown.ItemText>
              <Dropdown.Divider />
              <div className="list-noti">
                {listNoti.map((noti, index) => {
                  return (
                    <div
                      onClick={() => {
                        clickNoti(index);
                      }}
                      className={`noti-item ${noti.isNew ? "new" : ""}`}
                    >
                      <div
                        className="status"
                        style={{
                          visibility: !noti.isNew ? "hidden" : "visible",
                        }}
                      ></div>
                      <img alt="" src={noti.image} />
                      <div className="detail-group">
                        <div className="message">{noti.message}</div>
                        <div className="time">{noti.time}</div>
                      </div>
                    </div>
                  );
                })}
                {listNoti.length === 0 && (
                  <div className="empty-noti">
                    You have no new notifications!
                  </div>
                )}
              </div>
              <Dropdown.Divider />
              <Dropdown.ItemText>
                <div className="see-all-btn">Load more...</div>
              </Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="profile-dropdown">
            <Dropdown.Toggle
              className="profile-toggle"
              variant="success"
              id="dropdown-basic"
            >
              <img
                className="nav__avatar"
                alt=""
                src="../assets/images/netflix_avatar.png"
                //onClick={logoutApp}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu align="right">
              <Dropdown.ItemText>Switch to</Dropdown.ItemText>
              <Dropdown.Item className="profile-item">
                <div className="content-left">
                  <img
                    className="nav__avatar"
                    alt=""
                    src="../assets/images/profile_image_2.png"
                    //onClick={logoutApp}
                  />
                  <div className="profile-name">1</div>
                </div>
                <AiOutlineLock className="icon-lock" />
              </Dropdown.Item>
              <Dropdown.Item className="profile-item">
                <div className="content-left">
                  <img
                    className="nav__avatar"
                    alt=""
                    src="../assets/images/profile_image_3.png"
                    //onClick={logoutApp}
                  />
                  <div className="profile-name">2</div>
                </div>
                <AiOutlineLock className="icon-lock" />
              </Dropdown.Item>
              <Dropdown.Item className="profile-item">
                <div className="content-left">
                  <img
                    className="nav__avatar"
                    alt=""
                    src="../assets/images/profile_image_4.png"
                    //onClick={logoutApp}
                  />
                  <div className="profile-name">3</div>
                </div>
                <AiOutlineLock className="icon-lock" />
              </Dropdown.Item>
              <Dropdown.Item className="profile-item">
                <div className="content-left">
                  <img
                    className="nav__avatar"
                    alt=""
                    src="../assets/images/profile_image_5.png"
                    //onClick={logoutApp}
                  />
                  <div className="profile-name">4</div>
                </div>
                <AiOutlineLock className="icon-lock" />
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className="action-item"
                onClick={() => history.push("/manageprofile")}
              >
                <FiUser className="icon-action icon-profile" />
                Manage Profile
              </Dropdown.Item>
              <Dropdown.Item
                className="action-item"
                onClick={() => history.push("/profile")}
              >
                <BiExit className="icon-action icon-exit" />
                Exit Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="action-item" onClick={logoutApp}>
                <BiLogOut className="icon-action icon-logout" />
                Logout Account
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <img
            className="nav__avatar"
            alt=""
            src="../assets/images/netflix_avatar.png"
            onClick={logoutApp}
          /> */}
          <div
            className="toggle-drawer-btn"
            onClick={() => dispatch(setIsShowDrawer(true))}
          >
            <BsList className="icon-toggle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
