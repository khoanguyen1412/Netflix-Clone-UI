import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./MovieItem.scss";
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
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 17,
  },
  arrow: {
    fontSize: 20,
    color: "#FFFFFF",
    "&::before": {
      backgroundColor: "#FFFFFF",
    },
  },
}))(Tooltip);

function MovieItem({
  movie,
  index = null,
  isLargeRow = false,
  isBottom = false,
}) {
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
    return;
  }

  function handleDislike() {
    setDislike(true);
    setLike(false);

    return;
  }

  function handleMark() {
    setMark(!mark);
    return;
    // dispatch(setIsShowToast(false));
    // dispatch(
    //   setToastText(
    //     `You have just marked ${
    //       movie.name || movie.title || movie.original_title
    //     } as Favorite!`
    //   )
    // );
    // if (!isShowToast) dispatch(setIsShowToast(true));
  }

  function openVideo() {
    const isTV = movie.release_date ? false : true;
    dispatch(setIsShowVideoTV(isTV));
    dispatch(setShowVideoModal(true));
  }

  return (
    <Col
      className={`movie-item ${isBottom ? "bottom" : ""} ${
        index ? "movie" + index : ""
      }`}
    >
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
          <LightTooltip title="Play this movie" arrow placement="top-center">
            <div className={`movie-btn play-btn `} onClick={openVideo}>
              <FaPlay className="icon-btn icon-play" />
            </div>
          </LightTooltip>
          <LightTooltip title="Mark as favorite" arrow placement="top-center">
            <div
              className={`movie-btn mark-btn ${mark ? "active" : ""}`}
              onClick={handleMark}
            >
              <AiOutlineCheck className="icon-btn icon-check" />
            </div>
          </LightTooltip>
          <LightTooltip title="Like this movie" arrow placement="top-center">
            <div
              className={`movie-btn like-btn ${like ? "active" : ""}`}
              onClick={handleLike}
            >
              <BiLike className="icon-btn icon-like" />
            </div>
          </LightTooltip>
          <LightTooltip title="Dislike this movie" arrow placement="top-center">
            <div
              className={`movie-btn dislike-btn ${dislike ? "active" : ""}`}
              onClick={handleDislike}
            >
              <BiDislike className="icon-btn icon-dislike" />
            </div>
          </LightTooltip>
          <LightTooltip title="Show more info" arrow placement="top-center">
            <div
              className="movie-btn show-info-btn"
              onClick={openMovieInfoModal}
            >
              <FiChevronDown className="icon-btn icon-show" />
            </div>
          </LightTooltip>
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
