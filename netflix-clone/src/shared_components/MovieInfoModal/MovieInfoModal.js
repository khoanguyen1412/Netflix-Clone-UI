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
MovieInfoModal.propTypes = {};

function MovieInfoModal(props) {
  const dispatch = useDispatch();
  const [showVideo, setShowVideo] = useState(false);
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
        <div
          className="btn-close"
          onClick={handleClose}
          //onClick={() => setShowVideo(true)}
        >
          <RiCloseCircleFill className="icon-close" />
        </div>
        <img
          className="movie-image"
          alt=""
          src="../assets/images/movie_info_image.jpg"
        />
        <div className="banner--fadeBottom"></div>
        <div className="banner-content">
          <h2 className="movie-name">AQUAMAN</h2>
          <div className="action-group">
            <button
              className="banner__button play-button"
              onClick={() => setShowVideo(true)}
            >
              <FaPlay className="icon-play icon-button" />
              Play
            </button>
            <div className="movie-btn mark-btn">
              <BiPlus className="icon-btn icon-check" />
            </div>
            <div className="movie-btn like-btn">
              <BiLike className="icon-btn icon-like" />
            </div>
            <div className="movie-btn dislike-btn">
              <BiDislike className="icon-btn icon-dislike" />
            </div>
          </div>
        </div>
        <div className="movie-detail">
          <Row>
            <Col className="info-col" lg={8} sm={12}>
              <div className="movie-props">
                <div className="age-limit">13+</div>
                <div className="time">2h 13m</div>
                <div className="quality">HD</div>
              </div>
              <div className="movie-description">
                Amphibious superhero Arthur Curry learns what it means to be
                Aquaman when he must stop the king of Atlantis from waging war
                against the surface world.
              </div>
            </Col>
            <Col className="info-col" lg={4} sm={12}>
              <div className="cast-group">
                <div className="title">Cast:</div>
                <strong className="cast-name">Jason Momoa</strong>,
                <strong className="cast-name">Amber Heard</strong>,
                <strong className="cast-name">Willem Dafoe</strong>,
                <strong className="more">more</strong>
              </div>
              <div className="cast-group">
                <div className="title">Genres:</div>
                <strong className="cast-name">US Movies</strong>,
                <strong className="cast-name">Action & Adventure</strong>,
                <strong className="cast-name">Superhero</strong>
              </div>
              <div className="cast-group">
                <div className="title">This movie is:</div>
                <strong className="cast-name">Adrenaline Rush</strong>,
                <strong className="cast-name">Exciting</strong>
              </div>
            </Col>
          </Row>
        </div>
        <div className="suggestion-group">
          <h3 className="title">More like this</h3>
          <Row>
            {data.map(() => {
              return (
                <Col lg={4} sm={6} xs={12} className="suggest-item">
                  <div className="suggestion-content">
                    <img
                      alt=""
                      className="movie-image"
                      src="https://cdn.cnn.com/cnnnext/dam/assets/200305123656-bloodshot-super-tease.jpg"
                    />
                    <div className="overview-group">
                      <div className="limit">16+</div>
                      <div className="year">2020</div>
                      <div className="movie-btn mark-btn">
                        <BiPlus className="icon-btn icon-check" />
                      </div>
                    </div>
                    <div className="movie-description">
                      A dead soldier is resurrected with new biotechnology and
                      embarks on a mission of revenge in this sci-fi action
                      drama based on the comic book series.
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="more--fadeBottom"></div>
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="loadmore-btn show-info-btn">
          <FiChevronDown className="icon-btn icon-show" />
        </div>

        <div className="movie-super-detail">
          <h3 className="title">About Aquaman</h3>
          <div className="cast-group">
            <div className="title">Director:</div>
            <strong className="cast-name">James Wan</strong>
          </div>
          <div className="cast-group">
            <div className="title">Cast:</div>
            <strong className="cast-name">Jason Momoa</strong>,
            <strong className="cast-name">Amber Heard</strong>,
            <strong className="cast-name">Willem Dafoe</strong>,
            <strong className="cast-name">Patrickk Wilson</strong>,
            <strong className="cast-name">Yahya Abdul-Mateen II</strong>,
            <strong className="cast-name">Nicole Kidman</strong>,
            <strong className="cast-name">Temuera Morrison</strong>,
            <strong className="cast-name">Dolph Lundgren</strong>,
            <strong className="cast-name">Ludi Lin</strong>,
            <strong className="cast-name">Pandall Park</strong>
          </div>
          <div className="cast-group">
            <div className="title">Writter:</div>
            <strong className="cast-name">Geoff Johns</strong>,
            <strong className="cast-name">James Wan</strong>,
            <strong className="cast-name">Bill Beall</strong>,
            <strong className="cast-name">David Leslie Johnson</strong>
          </div>
          <div className="cast-group">
            <div className="title">Genres:</div>
            <strong className="cast-name">US Movies</strong>,
            <strong className="cast-name">Action & Adventure</strong>
          </div>
          <div className="cast-group">
            <div className="title">This movie is:</div>
            <strong className="cast-name">Adrenaline Rush</strong>,
            <strong className="cast-name">Exciting</strong>
          </div>
          <div className="cast-group">
            <div className="title">Maturity rating:</div>
            <div className="limit">13+</div>
            <span className="">Recommended for ages 13 and up</span>
          </div>
        </div>

        <VideoModal
          showMovieModal={showVideo}
          onClose={() => setShowVideo(false)}
        />
      </Modal.Body>
    </Modal>
  );
}

export default MovieInfoModal;
