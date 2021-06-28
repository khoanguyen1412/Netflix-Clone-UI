import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Banner.scss";
import axios from "../../api/axios";
import requests from "../../api/Requests";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";

function Banner(props) {
  const [bannerMovie, setBannerMovie] = useState({});

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
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>

        <div className="banner__description">
          {truncate(bannerMovie?.overview, 150)}
        </div>
        <div className="banner__buttons">
          <button className="banner__button play-button">
            <FaPlay className="icon-play icon-button" />
            Play
          </button>
          <button className="banner__button info-button">
            <BiInfoCircle className="icon-info icon-button" />
            My List
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
