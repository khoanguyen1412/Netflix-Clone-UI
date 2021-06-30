import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MovieInfoModal.scss";
import { Modal } from "react-bootstrap";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowMovieInfoModal } from "../../app/appSlice.js";
import { RiCloseCircleFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BiLike, BiDislike, BiPlus } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import VideoModal from "../VideoModal/VideoModal.js";
import MovieInfo from "./Components/MovieInfo/MovieInfo.js";
import TVShowInfo from "./Components/TVShowInfo/TVShowInfo.js";
MovieInfoModal.propTypes = {};

function MovieInfoModal(props) {
  const dispatch = useDispatch();
  const isShowMovieInfo = useSelector((state) => state.app.isShowMovieInfo);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const showMovieInfoModal = useSelector(
    (state) => state.app.showMovieInfoModal
  );
  function handleClose() {
    dispatch(setShowMovieInfoModal(false));
  }
  return (
    <Modal
      className="movie-info-modal"
      size="lg"
      show={showMovieInfoModal}
      onHide={handleClose}
    >
      <Modal.Body>
        <div className="btn-close" onClick={handleClose}>
          <RiCloseCircleFill className="icon-close" />
        </div>
        {isShowMovieInfo && <MovieInfo />}
        {!isShowMovieInfo && <TVShowInfo />}
      </Modal.Body>
    </Modal>
  );
}

export default MovieInfoModal;
