import React from "react";
import "./MovieInfoModal.scss";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowMovieInfoModal } from "../../app/appSlice.js";
import { RiCloseCircleFill } from "react-icons/ri";

import MovieInfo from "./Components/MovieInfo/MovieInfo.js";
import TVShowInfo from "./Components/TVShowInfo/TVShowInfo.js";

function MovieInfoModal(props) {
  const dispatch = useDispatch();
  const isShowMovieInfo = useSelector((state) => state.app.isShowMovieInfo);
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
