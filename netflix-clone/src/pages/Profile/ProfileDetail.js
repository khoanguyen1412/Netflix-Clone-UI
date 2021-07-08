import React from "react";
import { Dropdown } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import "./ProfileDetail.css";

function ProfileDetail() {
  const history = useHistory();
  return (
    <div className="profileScreen">
      <img
        src="../assets/images/netflix_logo.png"
        alt=""
        className="profileScreen_logo"
      />
      <div className="profileScreen_body">
        <h2>Edit Profile</h2>
        <div className="profileScreen_info">
          <img src="../assets/images/profile_image_5.png" alt="" />
          <div className="profileScreen_details">
            <h2>khoanguyen@gmail.com</h2>
            <div className="profileScreen_plans">
              <label>Autoplay controls</label>
              <div className="option">
                <input type="checkbox" />
                <label> Autoplay next episode </label>
              </div>
              <div className="option2">
                <input type="checkbox" />
                <label> Autoplay previews </label>
              </div>
              <div className="buttonContainer">
                <button
                  className="profileScreen_signout"
                  onClick={() => history.push("/manageprofile")}
                >
                  Save
                </button>
                <button
                  className="profileScreen_cancel"
                  onClick={() => history.push("/manageprofile")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
