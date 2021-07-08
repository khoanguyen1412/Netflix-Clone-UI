import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./SignupScreen2.css";
import MaterialTable from "material-table";

function SignupScreen2() {
  const history = useHistory();
  return (
    <div className="signupScreen2">
      <img src="../assets/images/netflix_logo.png" alt="" className="logo" />
      <label>STEP 2 OF 3</label>
      <h2>Choose the plan that's right for you</h2>
      <div className="buttonContainer">
        <button onClick={() => history.push("/signup2")}>Premium</button>
        <button onClick={() => history.push("/signup2")}>Standard</button>
        <button onClick={() => history.push("/signup2")}>Basic</button>
        <button onClick={() => history.push("/signup2")}>Mobile</button>
      </div>

      <MaterialTable
        columns={[
          { title: "", field: "feature" },
          {
            title: "",
            field: "mobile",
          },
          {
            title: "",
            field: "basic",
          },
          {
            title: "",
            field: "standard",
          },
          {
            title: "",
            field: "premium",
          },
        ]}
        data={[
          {
            feature: "Monthly price",
            mobile: "70,000đ",
            basic: "180,000đ",
            standard: "220,000đ",
            premium: "260,000đ",
          },
          {
            feature: "Video Quality",
            mobile: "Good",
            basic: "Good",
            standard: "Better",
            premium: "Best",
          },
          {
            feature: "Resolution",
            mobile: "480p",
            basic: "480p",
            standard: "1080p",
            premium: "4K+HDR",
          },
          {
            feature: "Devices",
            mobile: "Phone",
            basic: "Phone",
            standard: "Phone",
            premium: "Phone",
          },
          {
            mobile: "Tablet",
            basic: "Tablet",
            standard: "Tablet",
            premium: "Tablet",
          },
          {
            basic: "Computer",
            standard: "Computer",
            premium: "Computer",
          },
          {
            basic: "TV",
            standard: "TV",
            premium: "TV",
          },
        ]}
        options={{
          search: false,
          paging: false,
          toolbar: false,
        }}
      />
      <div className="Container">
        <button className="next" onClick={() => history.push("/signup2")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SignupScreen2;
