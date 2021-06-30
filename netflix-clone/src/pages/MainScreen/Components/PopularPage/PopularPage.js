import React, { useState } from "react";
import GridMovies from "../../../../shared_components/GridMovies/GridMovies.js";
import { ButtonGroup, Button } from "react-bootstrap";
import "./PopularPage.scss";

function PopularPage(props) {
  const [mode, setMode] = useState(1); //1: movies, 2: tv shows
  return (
    <div className="popularPage">
      <div className="header">
        <h3 className="title">New & Popular on Netflix </h3>
        <ButtonGroup aria-label="Basic example">
          <Button
            className={`${mode === 1 ? "active" : ""}`}
            variant="secondary"
            onClick={() => setMode(1)}
          >
            Movies
          </Button>
          <Button
            className={`${mode === 2 ? "active" : ""}`}
            variant="secondary"
            onClick={() => setMode(2)}
          >
            TV Shows
          </Button>
        </ButtonGroup>
      </div>
      <GridMovies mode={mode} />
    </div>
  );
}

export default PopularPage;
