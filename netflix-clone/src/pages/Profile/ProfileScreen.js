import React from "react";
import { useHistory } from "react-router-dom";
import "./ProfileScreen.css";

function ProfileScreen() {
  const history = useHistory();
  return (
    <div className="profile">
      <img
        src="../assets/images/netflix_logo.png"
        alt=""
        className="profileScreen_logo"
      />
      <div className="profileScreen">
        <label>Who's watching?</label>
        <div className="profileContainer">
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_image_5.png"
            onClick={() => {
              history.push("/");
            }}
          />
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_image_2.png"
            onClick={() => {
              history.push("/");
            }}
          />
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_image_3.png"
            onClick={() => {
              history.push("/");
            }}
          />
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_image_4.png"
            onClick={() => {
              history.push("/");
            }}
          />
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_image_5.png"
            onClick={() => {
              history.push("/");
            }}
          />
        </div>
        <button
          onClick={() => {
            history.push("/manageprofile");
          }}
        >
          MANAGE PROFILE
        </button>
      </div>
    </div>
  );
}

export default ProfileScreen;
