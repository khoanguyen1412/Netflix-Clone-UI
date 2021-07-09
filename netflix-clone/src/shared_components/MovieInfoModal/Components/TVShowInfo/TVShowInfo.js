import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { BiLike, BiDislike, BiPlus } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";
import VideoModal from "../../../VideoModal/VideoModal.js";
import "./TVShowInfo.scss";
import ListEpisodes from "../../../ListEpisodes/ListEpisodes.js";
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
function TVShowInfo(props) {
  const [showVideo, setShowVideo] = useState(false);
  const [mark, setMark] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const suggestList = [
    {
      limit: "16+",
      year: "2020",
      image: "../assets/images/suggest/suggest1.png",
      content:
        "After Wesley Gibson discovers that his murdered father belonged to a secret guild of assassins, he hones his innate killing skills and turns avenger.",
    },
    {
      limit: "13+",
      year: "2020",
      image: "../assets/images/suggest/suggest2.png",
      content:
        "When a Colombian drug kingpin takes over the smuggling routes to the U.S., a Marine sniper teams with a federal agent to take him and his cartel down.",
    },
    {
      limit: "18+",
      year: "2020",
      image: "../assets/images/suggest/suggest3.png",
      content:
        "Hell-bent on revenge, terrorists attack a group of world leaders in London. Now, it's up to agent Mike Banning to save the U.S. president -- again.",
    },
    {
      limit: "13+",
      year: "2020",
      image: "../assets/images/suggest/suggest4.png",
      content:
        "When a troubled sniper begins killing officers he blames for a bungled mission, elite marksman Brandon Beckett sets out to neutralize the threat.",
    },
    {
      limit: "16+",
      year: "2020",
      image: "../assets/images/suggest/suggest5.png",
      content:
        "A devastating earthquake hits California, and a helicopter pilot and his soon-to-be ex-wife must rescue their daughter before a second one strikes.",
    },
    {
      limit: "13+",
      year: "2013",
      image: "../assets/images/suggest/suggest6.png",
      content:
        "Retired intelligence operative Robert McCall reluctantly returns to action to protect a young prostitute from brutal members of the Russian Mafia.",
    },
    {
      limit: "18+",
      year: "1993",
      image: "../assets/images/suggest/suggest7.png",
      content:
        "While working for a railroad baron in colonial Kenya, engineer John Patterson finds his construction efforts stymied by a series of lion attacks.",
    },
    {
      limit: "17+",
      year: "2001",
      image: "../assets/images/suggest/suggest8.png",
      content:
        "In this fast-paced and action-packed thriller, a retired hitman — along with his sister and a troubled teen — takes revenge on his lethal stepbrother.",
    },
    {
      limit: "13+",
      year: "2021",
      image: "../assets/images/suggest/suggest9.png",
      content:
        "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
    },
  ];

  function handleLike() {
    setLike(true);
    setDislike(false);
  }

  function handleDislike() {
    setDislike(true);
    setLike(false);
  }

  return (
    <div className="tv-info-container">
      <img
        className="movie-image"
        alt=""
        src="https://img.jakpost.net/c/2020/12/01/2020_12_01_108215_1606812059._large.jpg"
      />
      <div className="banner--fadeBottom"></div>
      <div className="banner-content">
        <h2 className="movie-name">MONEY HEIST</h2>
        <div className="action-group">
          <LightTooltip title="Play this movie" arrow placement="top-center">
            <button
              className="banner__button play-button"
              onClick={() => setShowVideo(true)}
            >
              <FaPlay className="icon-play icon-button" />
              Play
            </button>
          </LightTooltip>
          <LightTooltip title="Add to My list" arrow placement="top-center">
            <div
              className={`movie-btn mark-btn ${mark ? "active" : ""}`}
              onClick={() => setMark(!mark)}
            >
              <BiPlus className="icon-btn icon-check" />
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
        </div>
      </div>
      <div className="movie-detail">
        <Row>
          <Col className="info-col" lg={8} sm={12}>
            <div className="movie-props">
              <div className="age-limit">13+</div>
              <div className="time">4 Seasons</div>
              <div className="quality">Full HD</div>
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
      <div className="episodes-group">
        <ListEpisodes />
      </div>
      <div className="suggestion-group">
        <h3 className="title">More like this</h3>
        <Row>
          {suggestList.map((suggest) => {
            return (
              <Col lg={4} sm={6} xs={12} className="suggest-item">
                <div className="suggestion-content">
                  <img alt="" className="movie-image" src={suggest.image} />
                  <div className="overview-group">
                    <div className="limit">{suggest.limit}</div>
                    <div className="year">{suggest.year}</div>
                    <LightTooltip
                      title="Add to My list"
                      arrow
                      placement="top-center"
                    >
                      <div className="movie-btn mark-btn">
                        <BiPlus className="icon-btn icon-check" />
                      </div>
                    </LightTooltip>
                  </div>
                  <div className="movie-description">{suggest.content}</div>
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
      <div className="loadmote-btn-container">
        <LightTooltip title="Show more" arrow placement="top-center">
          <div className="loadmore-btn show-info-btn">
            <FiChevronDown className="icon-btn icon-show" />
          </div>
        </LightTooltip>
      </div>

      <div className="movie-super-detail">
        <h3 className="title">About Money Heist</h3>
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
        isTV={true}
        showMovieModal={showVideo}
        onClose={() => setShowVideo(false)}
      />
    </div>
  );
}

export default TVShowInfo;
