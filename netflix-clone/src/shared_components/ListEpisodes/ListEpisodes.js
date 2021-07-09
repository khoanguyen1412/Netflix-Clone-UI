import React, { useEffect, useState } from "react";
import "./ListEpisodes.scss";
import { DropdownButton, Dropdown } from "react-bootstrap";

function ListEpisodes(props) {
  const [season, setSeason] = useState(1);
  //#333333

  const [selectedEp, setSelectedEp] = useState(0);

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
  useEffect(() => {
    if (displayEps.length === 9) {
      setDisplayEps(listEp2);
    } else {
      setDisplayEps(listEp1);
    }
    // eslint-disable-next-line
  }, [season]);

  return (
    <div className="list-episodes">
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
            <div
              className={`ep-item ${selectedEp === index ? "selected" : ""}`}
              onClick={() => {
                setSelectedEp(index);
                if (props.replayVideo) {
                  props.replayVideo();
                }
              }}
            >
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
  );
}

export default ListEpisodes;
