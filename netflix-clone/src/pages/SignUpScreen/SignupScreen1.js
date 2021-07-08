import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./SignupScreen1.css";

function SignupScreen1() {
  const history = useHistory();
  return (
    <div className="signupScreen1">
      <img src="../assets/images/netflix_logo.png" alt="" className="logo" />
      <form>
        <img src="../assets/images/signin1.jpg"></img>
        <h6> STEP 1 OF 3</h6>
        <h2>Finish setting up your account</h2>
        <label>
          Netflix is personalized for you. Create username and password to start
          your membership
        </label>
        <input placeholder="Username" required />
        <input placeholder="Add a Password" type="password" required />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default SignupScreen1;
