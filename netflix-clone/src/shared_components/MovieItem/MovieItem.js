import React from "react";
import { Col } from "react-bootstrap";
import "./MovieItem.scss";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setShowMovieInfoModal } from "../../app/appSlice.js";

MovieItem.propTypes = {};

function MovieItem({ movie, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch();
  function openMovieInfoModal() {
    dispatch(setShowMovieInfoModal(true));
  }

  return (
    <Col className="movie-item">
      <img
        alt=""
        style={{}}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
      />
      <div className="movie-info">
        <div className="movie-name">
          {movie.name || movie.title || movie.original_title}
        </div>
        <div className="actions-group">
          <div className="movie-btn play-btn">
            <FaPlay className="icon-btn icon-play" />
          </div>
          <div className="movie-btn mark-btn">
            <AiOutlineCheck className="icon-btn icon-check" />
          </div>
          <div className="movie-btn like-btn">
            <BiLike className="icon-btn icon-like" />
          </div>
          <div className="movie-btn dislike-btn">
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

export default MovieItem;
