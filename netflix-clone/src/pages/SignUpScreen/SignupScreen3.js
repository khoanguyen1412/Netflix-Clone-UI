import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../app/appSlice.js";
import "./SignupScreen3.scss";

function SignupScreen3() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="signupScreen3">
      <img
        onClick={() => history.push("/")}
        src="../assets/images/netflix_logo.png"
        alt=""
        className="logo"
      />
      <form>
        <h6> STEP 3 OF 3</h6>
        <h2>Set up your payment</h2>
        <label>Set up your credit card or debit card</label>
        <input placeholder="First Name" required />
        <input placeholder="Last Name" required />
        <input placeholder="Card Number" required />
        <input placeholder="Expiration Date(MM/YY)" required />
        <input placeholder="Security Code (CVV)" required />
        <label>
          By clicking the "Start Membership" button below, you agree to our Term
          of Use, Privacy Statement, and that you are over 18. You may cancel at
          any time in your free trial and will not be charged. To cancel, go
          online to your Account and click on "Cancel Membership"
        </label>
        <button
          onClick={() => {
            dispatch(login());
            history.push("/profile");
          }}
        >
          START MEMBERSHIP
        </button>
      </form>
    </div>
  );
}

export default SignupScreen3;
