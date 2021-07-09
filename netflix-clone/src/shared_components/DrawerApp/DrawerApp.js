import React, { useState } from "react";
import "./DrawerApp.scss";
import Drawer from "@material-ui/core/Drawer";
import { FormControl, Dropdown } from "react-bootstrap";
import { BiLogOut, BiExit, BiBell } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

import { AiOutlineLock } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout, setIsShowDrawer } from "../../app/appSlice.js";
import { useHistory } from "react-router-dom";

function DrawerApp(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isShow = useSelector((state) => state.app.isShowDrawer);
  const [selectedTab, setSelectedTab] = useState(1); //1: user, 2: noti
  const listNoti = [
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
        "https://image.tmdb.org/t/p/original//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
      message:
        "Godzilla vs. Kong has just released on Netflix, enjoy the movie now.",
      time: "Today",
      isNew: true,
    },
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
        "https://image.tmdb.org/t/p/original//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
      message:
        "Godzilla vs. Kong has just released on Netflix, enjoy the movie now.",
      time: "Today",
      isNew: true,
    },
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
  function logoutApp() {
    dispatch(logout(false));
    dispatch(setIsShowDrawer(false));
  }

  return (
    <Drawer
      anchor={"right"}
      open={isShow}
      onClose={() => dispatch(setIsShowDrawer(false))}
    >
      <div className="drawer-header">
        <div
          className={`setting-tab ${selectedTab === 1 ? "active" : ""}`}
          onClick={() => setSelectedTab(1)}
        >
          <FiUser className="icon-user" />
        </div>
        <div
          className={`noti-tab ${selectedTab === 2 ? "active" : ""}`}
          onClick={() => setSelectedTab(2)}
        >
          <BiBell className="icon-bell" />
        </div>
      </div>

      {selectedTab === 1 && (
        <>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="titles, genres,..."
          />
          <div className="switch-title">Switch to</div>
          <div className="drawer-item profile-item">
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
          </div>
          <div className="drawer-item profile-item">
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
          </div>
          <div className="drawer-item profile-item">
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
          </div>
          <div className="drawer-item profile-item">
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
          </div>
          <Dropdown.Divider />
          <div
            className="drawer-item action-item"
            onClick={() => {
              history.push("/manageprofile");
              dispatch(setIsShowDrawer(false));
            }}
          >
            <FiUser className="icon-action icon-profile" />
            Manage Profile
          </div>
          <div
            className="drawer-item action-item"
            onClick={() => {
              history.push("/profile");
              dispatch(setIsShowDrawer(false));
            }}
          >
            <BiExit className="icon-action icon-exit" />
            Exit Profile
          </div>
          <Dropdown.Divider />
          <div className="drawer-item action-item" onClick={logoutApp}>
            <BiLogOut className="icon-action icon-logout" />
            Logout Account
          </div>
        </>
      )}

      {selectedTab === 2 && (
        <div className="list-noti">
          {listNoti.map((noti, index) => {
            return (
              <div className={`noti-item ${noti.isNew ? "new" : ""}`}>
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
            <div className="empty-noti">You have no new notifications!</div>
          )}
        </div>
      )}
    </Drawer>
  );
}

export default DrawerApp;
