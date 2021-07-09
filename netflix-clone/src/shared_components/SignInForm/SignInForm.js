import React from "react";
import "./SignInForm.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../app/appSlice.js";

function SignInForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="signinForm">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" className="input-email" />
        <input
          placeholder="Password"
          type="password"
          className="input-password"
        />

        <button
          type="submit"
          onClick={() => {
            dispatch(login());
            history.push("/profile");
          }}
        >
          Sign In
        </button>
        <h4>
          <span className="signinForm_gray">New to Netflix? </span>
          <span
            className="signinForm_link"
            onClick={() => history.push("/signup1")}
          >
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInForm;
