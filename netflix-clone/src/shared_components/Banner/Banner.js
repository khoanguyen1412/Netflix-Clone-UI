import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Banner.scss";
import axios from "../../api/axios";
import requests from "../../api/Requests";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  setIsShowMovieInfo,
  setShowMovieInfoModal,
  setShowVideoModal,
} from "../../app/appSlice.js";
import { useHistory } from "react-router-dom";

function Banner(props) {
  const [bannerMovie, setBannerMovie] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBannerMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function handleOpenVideo() {
    dispatch(setShowVideoModal(true));
  }

  function openMyList() {
    history.push("/mylist");
  }

  function openMovieInfoModal() {
    dispatch(setIsShowMovieInfo(false));
    dispatch(setShowMovieInfoModal(true));
  }

  //`url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("../assets/images/banner_default.jpg")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {/* {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name} */}
          Superman & Lois
        </h1>

        <div className="banner__description">
          {/* {truncate(bannerMovie?.overview, 150)} */}
          After years of facing megalomaniacal supervillains, monsters wreaking
          havoc on Metropolis, and alien invaders intent on wiping out the human
          race...
        </div>
        <div className="banner__buttons">
          <button
            className="banner__button play-button"
            onClick={handleOpenVideo}
          >
            <FaPlay className="icon-play icon-button" />
            Play
          </button>
          <button
            className="banner__button info-button"
            onClick={openMovieInfoModal}
          >
            <BiInfoCircle className="icon-info icon-button" />
            More Info
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
