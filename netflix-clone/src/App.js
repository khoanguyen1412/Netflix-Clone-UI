import "./App.scss";
import MainScreen from "./pages/MainScreen/MainScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieInfoModal from "./shared_components/MovieInfoModal/MovieInfoModal.js";
import NavBar from "./shared_components/NavBar/NavBar.js";
import HomePage from "./pages/MainScreen/Components/HomePage/HomePage.js";
import TVShowPage from "./pages/MainScreen/Components/TVShowPage/TVShowPage.js";
import MoviePage from "./pages/MainScreen/Components/MoviePage/MoviePage.js";
import PopularPage from "./pages/MainScreen/Components/PopularPage/PopularPage.js";
import VideoModal from "./shared_components/VideoModal/VideoModal.js";
import axios from "./api/axios.js";
import { logout, setListMovies, setListTVs } from "./app/appSlice.js";
import Drawer from "@material-ui/core/Drawer";
import { FormControl, Dropdown } from "react-bootstrap";
import { BsFillBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BiLogOut, BiExit } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

import { AiFillCaretDown, AiOutlineLock } from "react-icons/ai";
import DrawerApp from "./shared_components/DrawerApp/DrawerApp.js";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);
  const [showVideo, setShowVideo] = useState(false);
  const isShowVideoTV = useSelector((state) => state.app.isShowVideoTV);

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

  return (
    <div className="app">
      <button
        style={{ zIndex: "1000000000", position: "fixed" }}
        onClick={() => setOpenDrawer(true)}
      >
        ok
      </button>
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
            <VideoModal isTV={isShowVideoTV} isGlobal={true} />
          </>
        ) : (
          <LoginScreen />
        )}
      </Router>

      <DrawerApp openDrawer={openDrawer} onClose={() => setOpenDrawer(false)} />
      <MovieInfoModal />
    </div>
  );
}

export default App;
