import "./App.scss";
import React from "react";
import MainScreen from "./pages/MainScreen/MainScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieInfoModal from "./shared_components/MovieInfoModal/MovieInfoModal.js";
import HomePage from "./pages/MainScreen/Components/HomePage/HomePage.js";
import TVShowPage from "./pages/MainScreen/Components/TVShowPage/TVShowPage.js";
import MoviePage from "./pages/MainScreen/Components/MoviePage/MoviePage.js";
import PopularPage from "./pages/MainScreen/Components/PopularPage/PopularPage.js";
import VideoModal from "./shared_components/VideoModal/VideoModal.js";
import ProfileScreen from "./pages/Profile/ProfileScreen";
import axios from "./api/axios.js";
import { setIsShowToast, setListMovies, setListTVs } from "./app/appSlice.js";
import { CgClose } from "react-icons/cg";
import IconButton from "@material-ui/core/IconButton";

import DrawerApp from "./shared_components/DrawerApp/DrawerApp.js";
import Snackbar from "@material-ui/core/Snackbar";
import SignupScreen1 from "./pages/SignUpScreen/SignupScreen1";
import SignupScreen2 from "./pages/SignUpScreen/SignupScreen2";

function App() {
  const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);
  const isShowVideoTV = useSelector((state) => state.app.isShowVideoTV);
  const showToast = useSelector((state) => state.app.isShowToast);
  const toastText = useSelector((state) => state.app.toastText);
  useEffect(() => {
    //get movies
    function fetchDataMovies() {
      var request = [];
      axios
        .get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${1}`)
        .then((res) => {
          request = request.concat(res.data.results);
          axios
            .get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${2}`)
            .then((res) => {
              request = request.concat(res.data.results);
              axios
                .get(
                  `/movie/popular?api_key=${API_KEY}&language=en-US&page=${3}`
                )
                .then((res) => {
                  request = request.concat(res.data.results);
                  dispatch(setListMovies(request));
                  //setListMoves(request);
                })
                .catch((err) => {});
            })
            .catch((err) => {});
        })
        .catch((err) => {});

      return request;
    }

    //get tv shows
    function fetchDataTVs() {
      var request = [];
      axios
        .get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=${1}`)
        .then((res) => {
          request = request.concat(res.data.results);
          axios
            .get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=${2}`)
            .then((res) => {
              request = request.concat(res.data.results);
              axios
                .get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=${3}`)
                .then((res) => {
                  request = request.concat(res.data.results);
                  dispatch(setListTVs(request));
                  //setListTVs(request);
                })
                .catch((err) => {});
            })
            .catch((err) => {});
        })
        .catch((err) => {});

      return request;
    }

    //data for grid view
    fetchDataMovies();
    fetchDataTVs();
  }, []);

  function handleClose() {
    dispatch(setIsShowToast(false));
  }

  return (
    <div className="app">
      <Router>
        {user ? (
          <>
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
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              <Route path="/signup1">
                <SignupScreen1 />
              </Route>
              <Route path="/signup2">
                <SignupScreen2 />
              </Route>
            </Switch>
            <VideoModal isTV={isShowVideoTV} isGlobal={true} />
          </>
        ) : (
          <LoginScreen />
        )}
      </Router>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={showToast}
        autoHideDuration={2000}
        onClose={handleClose}
        message={toastText}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CgClose />
            </IconButton>
          </React.Fragment>
        }
      />
      <DrawerApp />
      <MovieInfoModal />
    </div>
  );
}

export default App;
