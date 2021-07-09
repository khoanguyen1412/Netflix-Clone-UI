import React, { useState } from "react";
import SignInForm from "../../shared_components/SignInForm/SignInForm";
import { useHistory } from "react-router-dom";
import "./LoginScreen.scss";

function LoginScreen(props) {
  const [signIn, setSignIn] = useState(false);
  const history = useHistory();
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="../assets/images/netflix_logo.png"
          alt=""
          className="loginScreen__logo"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
      </div>
      <div className="loginScreen__gradient"></div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignInForm />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Start your membership NOW.</h3>
            <div className="loginScreen__input">
              <form>
                <button
                  onClick={() => history.push("/signup1")}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
