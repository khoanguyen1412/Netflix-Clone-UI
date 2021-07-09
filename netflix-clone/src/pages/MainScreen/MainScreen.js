import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../shared_components/NavBar/NavBar";

import "./MainScreen.scss";

function MainScreen(props) {
  const history = useHistory();
  useEffect(() => {
    console.log(history.location);
  }, [history.location]);
  return (
    <div className="home-screen">
      <NavBar />
      {/* <HomePage /> */}
      {/* <TVShowPage /> */}
    </div>
  );
}

export default MainScreen;
