import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./MovieComponent.scss";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  setIsShowMovieInfo,
  setIsShowVideoTV,
  setShowMovieInfoModal,
  setShowVideoModal,
} from "../../app/appSlice.js";

function MovieComponent({ movie, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch();
  const [mark, setMark] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  function openMovieInfoModal() {
    if (movie.release_date) {
      dispatch(setIsShowMovieInfo(true));
    } else {
      dispatch(setIsShowMovieInfo(false));
    }
    dispatch(setShowMovieInfoModal(true));
  }

  function handleLike() {
    setLike(true);
    setDislike(false);
  }

  function handleDislike() {
    setDislike(true);
    setLike(false);
  }
  function openVideo() {
    const isTV = movie.release_date ? false : true;
    dispatch(setIsShowVideoTV(isTV));
    dispatch(setShowVideoModal(true));
  }

  return (
    <Col className="movie-component">
      <img
        alt=""
        style={{}}
        src={`${base_url}${
          isLargeRow
            ? movie.poster_path
            : movie.backdrop_path
            ? movie.backdrop_path
            : "https://image.tmdb.org/t/p/original//rlNnwObbMu5G2FaOUlacnUIdIIA.jpg"
        }`}
      />
      <div className="movie-info">
        <div className="movie-name">
          {movie.name || movie.title || movie.original_title}
        </div>
        <div className="actions-group">
          <div className={`movie-btn play-btn `} onClick={openVideo}>
            <FaPlay className="icon-btn icon-play" />
          </div>
          <div
            className={`movie-btn mark-btn ${mark ? "active" : ""}`}
            onClick={() => setMark(!mark)}
          >
            <AiOutlineCheck className="icon-btn icon-check" />
          </div>
          <div
            className={`movie-btn like-btn ${like ? "active" : ""}`}
            onClick={handleLike}
          >
            <BiLike className="icon-btn icon-like" />
          </div>
          <div
            className={`movie-btn dislike-btn ${dislike ? "active" : ""}`}
            onClick={handleDislike}
          >
            <BiDislike className="icon-btn icon-dislike" />
          </div>
          <div className="movie-btn show-info-btn" onClick={openMovieInfoModal}>
            <FiChevronDown className="icon-btn icon-show" />
          </div>
        </div>
        <div className="detail-info">
          <div className="age-limit">13+</div>
          <div className="time">2h 13m</div>
          <div className="quality">HD</div>
        </div>
        <div className="genres-group">
          <div className="genre">Supperhero</div>
          <div className="divider"></div>
          <div className="genre">Exciting</div>
          <div className="divider"></div>
          <div className="genre">Adult</div>
        </div>
      </div>
    </Col>
  );
}

export default MovieComponent;
