import "./App.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.app.user);

  return (
    <div className="app">
      <Router>
        {user ? (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        ) : (
          <LoginScreen />
        )}
      </Router>
    </div>
  );
}

export default App;
