import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import "./VideoModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { setShowVideoModal } from "../../app/appSlice.js";
import ListEpisodes from "../ListEpisodes/ListEpisodes.js";
function VideoModal({
  isGlobal = false,
  showMovieModal = null,
  onClose = null,
  isTV = false,
}) {
  const videoRef = useRef();
  const dispatch = useDispatch();
  const showGlobal = useSelector((state) => state.app.showVideoModal);
  console.log(isTV);

  function handleClose() {
    if (isGlobal) {
      dispatch(setShowVideoModal(false));
      return;
    }
    if (onClose) {
      onClose();
    }
  }

  function replayVideo() {
    const video = document.querySelector(".frame");
    video.src += "&autoplay=1";
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
          ref={videoRef}
          className="frame"
          src="https://www.youtube.com/embed/rrwBnlYOp4g?autoplay=1&fullscreen=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        {isTV && <ListEpisodes replayVideo={replayVideo} />}
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
