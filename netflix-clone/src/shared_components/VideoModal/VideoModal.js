import React, { useState } from "react";
import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";
import { Button, Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import "./VideoModal.scss";
import screenfull from "screenfull";
import YouTubePlayer from "react-player/youtube";
function VideoModal({ showMovieModal, onClose }) {
  const opts = {
    //height: "390",
    //width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      showinfo: 0,
      rel: 0,
    },
  };
  function handleClose() {
    if (onClose) {
      onClose();
    }
  }
  return (
    <Modal
      className="video-modal"
      size="lg"
      show={showMovieModal}
      onHide={handleClose}
    >
      <Modal.Body>
        <YouTube videoId="QwievZ1Tx-8" opts={opts} />
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QwievZ1Tx-8?autoplay=1&fullscreen=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
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
