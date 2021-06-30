import React, { useState } from "react";
import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";
import { Button, Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import "./VideoModal.scss";
import screenfull from "screenfull";
import YouTubePlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { setShowVideoModal } from "../../app/appSlice.js";
function VideoModal({
  isGlobal = false,
  showMovieModal = null,
  onClose = null,
}) {
  const dispatch = useDispatch();
  const showGlobal = useSelector((state) => state.app.showVideoModal);
  const opts = {
    playerVars: {
      autoplay: 1,
      showinfo: 0,
      rel: 0,
    },
  };
  function handleClose() {
    if (isGlobal) {
      dispatch(setShowVideoModal(false));
      return;
    }
    if (onClose) {
      onClose();
    }
  }
  return (
    <Modal
      className="video-modal"
      size="lg"
      show={isGlobal ? showGlobal : showMovieModal}
      onHide={handleClose}
      style={{ backgroundColor: !isGlobal ? "rgba(0,0,0,0.5)" : "" }}
    >
      <Modal.Body>
        {/* <YouTube videoId="QwievZ1Tx-8" opts={opts} /> */}
        <iframe
          className="frame"
          src="https://www.youtube.com/embed/QwievZ1Tx-8?autoplay=1&fullscreen=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <YouTubePlayer
          url={`https://www.youtube.com/watch?v=QwievZ1Tx-8&t=1s`}
          controls
          autoplay
          //   config={{
          //     youtube: {
          //       playerVars: { showinfo: 0, fullscreen: 1, autoplay: 1 },
          //     },
          //   }}
        /> */}
      </Modal.Body>
    </Modal>
  );
}

export default VideoModal;
