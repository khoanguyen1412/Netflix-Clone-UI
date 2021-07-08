import React from "react";
import PropTypes from "prop-types";
import "./SignInForm.scss";
import { login } from "../../app/appSlice";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignInForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  function loginApp() {
    dispatch(login(true));
  }
  return (
    <div className="signinForm">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />

        <button type="submit" onClick={() => history.push("/profile")}>
          Sign In
        </button>
        <h4>
          <span className="signinForm_gray">New to Netflix? </span>
          <span className="signinForm_link">Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInForm;
