import { Icon } from "@material-ui/core";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./ManageProfile.css";

function ManageProfile() {
  const history = useHistory();
  return (
    <div className="manageprofile">
      <img
        src="../assets/images/netflix_logo.png"
        alt=""
        className="profileScreen_logo"
      />
      <div className="profileScreen">
        <label>Manage Profiles:</label>
        <div className="profileContainer">
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_edit_1.png"
            onClick={() => {
              history.push("/");
            }}
          />
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_edit_2.png"
            onClick={() => {
              history.push("/");
            }}
          />
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_edit_3.png"
            onClick={() => {
              history.push("/");
            }}
          />
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_edit_4.png"
            onClick={() => {
              history.push("/");
            }}
          />
          <img
            className="profileimage"
            alt=""
            src="../assets/images/profile_edit_1.png"
            onClick={() => {
              history.push("/");
            }}
          ></img>
        </div>
        <button
          onClick={() => {
            history.push("/profile");
          }}
        >
          DONE
        </button>
      </div>
    </div>
  );
}

export default ManageProfile;
