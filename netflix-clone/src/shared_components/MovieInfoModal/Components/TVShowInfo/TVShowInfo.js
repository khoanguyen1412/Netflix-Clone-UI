import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BiLike, BiDislike, BiPlus } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import VideoModal from "../../../VideoModal/VideoModal.js";
import "./TVShowInfo.scss";

function TVShowInfo(props) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [showVideo, setShowVideo] = useState(false);
  const [mark, setMark] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [season, setSeason] = useState(1);
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
  //ep1: 9 eps
  const listEp1 = [
    {
      image: "../assets/images/tvImages/ep1.png",
      content:
        "The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.",
      time: "48m",
    },
    {
      image: "../assets/images/tvImages/ep2.png",
      content:
        "Hostage negotiator Raquel makes initial contact with the Professor. One of the hostages is a crucial part of the thieves' plans.",
      time: "42m",
    },
    {
      image: "../assets/images/tvImages/ep3.png",
      content:
        "Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.",
      time: "51m",
    },
    {
      image: "../assets/images/tvImages/ep10.png",
      content:
        "Raquel enters the Mint to ascertain that all of the hostages are still alive and well. Nairobi gives Alison advice.",
      time: "58m",
    },
    {
      image: "../assets/images/tvImages/ep4.png",
      content:
        "Raquel suffers a personal crisis with her ex. The hostages are frightened by the gunshots they overheard. The thieves argue among themselves.",
      time: "49m",
    },
    {
      image: "../assets/images/tvImages/ep5.png",
      content:
        "The thieves let a medical team enter the Mint, and an undercover policeman sneaks in with them. Can the Professor stay one step ahead of Raquel?",
      time: "55m",
    },
    {
      image: "../assets/images/tvImages/ep6.png",
      content:
        "Mónica's condition worsens. The Professor enjoys the spoils of his latest trick. Río is disturbed by news he sees on the television.",
      time: "53m",
    },
    {
      image: "../assets/images/tvImages/ep7.png",
      content:
        "A break in the investigation and a mistake by one of the thieves puts the Professor at serious risk of being discovered.",
      time: "51m",
    },
    {
      image: "../assets/images/tvImages/ep8.png",
      content:
        "Tokyo catches Alison chatting with Río and confronts her. The police suspect a spy is in their midst.",
      time: "48m",
    },
  ];

  //ep2: 8 eps
  const listEp2 = [
    {
      image: "../assets/images/tvImages/ep9.png",
      content:
        "The Professor races to stop a witness from identifying him. Berlín seeks revenge once his own name is revealed and slandered in the press.",
      time: "1h 10m",
    },
    {
      image: "../assets/images/tvImages/ep10.png",
      content:
        "Raquel enters the Mint to ascertain that all of the hostages are still alive and well. Nairobi gives Alison advice.",
      time: "58m",
    },
    {
      image: "../assets/images/tvImages/ep11.png",
      content:
        "Ángel and Raquel question each other's loyalties. Mónica makes a move on Denver. Río is faced with a difficult decision.",
      time: "51m",
    },
    {
      image: "../assets/images/tvImages/ep12.png",
      content:
        "Arturo continues to formulate an escape plan for a group of hostages. The Professor reveals who gave him the idea for the heist.",
      time: "1h 2m",
    },
    {
      image: "../assets/images/tvImages/ep13.png",
      content:
        "The Professor meets Raquel's mother under stressful circumstances. At the Mint, the thieves offer the hostages a decision: money or freedom?",
      time: "1h 9m",
    },
    {
      image: "../assets/images/tvImages/ep14.png",
      content:
        "As forensic experts comb the Toledo country house for DNA,  the Professor loses control. Inside the Mint, the robbers' nerves reach a breaking point.",
      time: "55m",
    },
    {
      image: "../assets/images/tvImages/ep15.png",
      content:
        "The police interrogate the first robber to be captured. Furious over Berlín's recent actions, Río takes a stand against him.",
      time: "56m",
    },
    {
      image: "../assets/images/tvImages/ep16.png",
      content:
        "Hoping to learn the Professor's identity, Raquel appeals to her captive's emotions. A punishment for high treason sparks a revolt among the robbers.",
      time: "42m",
    },
  ];
  const [displayEps, setDisplayEps] = useState(listEp1);

  useEffect(() => {
    if (displayEps.length === 9) {
      setDisplayEps(listEp2);
    } else {
      setDisplayEps(listEp1);
    }
  }, [season]);

  function handleLike() {
    setLike(true);
    setDislike(false);
  }

  function handleDislike() {
    setDislike(true);
    setLike(false);
  }

  function getTitleSeason() {
    switch (season) {
      case 1:
        return "Season 1";
      case 2:
        return "Season 2";
      case 3:
        return "Season 3";
      default:
        return "Season 4";
    }
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
          <button
            className="banner__button play-button"
            onClick={() => setShowVideo(true)}
          >
            <FaPlay className="icon-play icon-button" />
            Play
          </button>
          <div
            className={`movie-btn mark-btn ${mark ? "active" : ""}`}
            onClick={() => setMark(!mark)}
          >
            <BiPlus className="icon-btn icon-check" />
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
        <div className="header">
          <h3>Episodes</h3>

          <DropdownButton menuAlign="right" title={getTitleSeason()}>
            <Dropdown.Item as="button" onClick={() => setSeason(1)}>
              <strong>Season 1</strong> (12 episodes)
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setSeason(2)}>
              <strong>Season 2</strong> (10 episodes)
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setSeason(3)}>
              <strong>Season 3</strong> (9 episodes)
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setSeason(4)}>
              <strong>Season 4</strong> (11 episodes)
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="list-ep">
          {displayEps.map((ep, index) => {
            return (
              <div className="ep-item">
                <div className="stt">{index + 1}</div>
                <div className="image">
                  <img alt="" src={ep.image} />
                </div>
                <div className="detail-info">
                  <div className="header-info">
                    <div className="name">Eposides {index + 1}</div>
                    <div className="time">{ep.time}</div>
                  </div>
                  <div className="description">{ep.content}</div>
                </div>
              </div>
            );
          })}
        </div>
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
                    <div className="movie-btn mark-btn">
                      <BiPlus className="icon-btn icon-check" />
                    </div>
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
        <div className="loadmore-btn show-info-btn">
          <FiChevronDown className="icon-btn icon-show" />
        </div>
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
        showMovieModal={showVideo}
        onClose={() => setShowVideo(false)}
      />
    </div>
  );
}

export default TVShowInfo;
