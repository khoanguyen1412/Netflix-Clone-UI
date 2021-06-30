import "./App.css";
import MainScreen from "./pages/MainScreen/MainScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieInfoModal from "./shared_components/MovieInfoModal/MovieInfoModal.js";
import NavBar from "./shared_components/NavBar/NavBar.js";
import HomePage from "./pages/MainScreen/Components/HomePage/HomePage.js";
import TVShowPage from "./pages/MainScreen/Components/TVShowPage/TVShowPage.js";
import MoviePage from "./pages/MainScreen/Components/MoviePage/MoviePage.js";
import PopularPage from "./pages/MainScreen/Components/PopularPage/PopularPage.js";
import VideoModal from "./shared_components/VideoModal/VideoModal.js";

function App() {
  const user = useSelector((state) => state.app.user);
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="app">
      <Router>
        {user ? (
          <>
            <NavBar />
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/tvshows">
                <TVShowPage />
              </Route>
              <Route path="/movies">
                <MoviePage />
              </Route>
              <Route path="/newpopular">
                <PopularPage />
              </Route>
              <Route path="/mylist">
                <PopularPage title={"My List"} />
              </Route>
            </Switch>
            <VideoModal isGlobal={true} />
          </>
        ) : (
          <LoginScreen />
        )}
      </Router>
      <MovieInfoModal />
    </div>
  );
}

export default App;
