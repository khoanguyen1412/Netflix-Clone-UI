import React, { useEffect, useState } from "react";
import "./GridMovies.scss";
import { Row, Col } from "react-bootstrap";
import axios from "../../api/axios.js";
import MovieItem from "../MovieItem/MovieItem.js";
import MovieComponent from "../MovieComponent/MovieComponent.js";
import { useSelector } from "react-redux";

function GridMovies({ mode = 1 }) {
  const movies = useSelector((state) => state.app.listMovies);
  const TVs = useSelector((state) => state.app.listTVs);

  return (
    <Row className="grid-movies-container">
      {mode === 1 &&
        movies.map((movie) => {
          return (
            <Col className="grid-item" lg={2} sm={6} xs={12}>
              <div className="container">
                <MovieComponent movie={movie} isLargeRow={false} />
              </div>
            </Col>
          );
        })}
      {mode === 2 &&
        TVs.map((movie) => {
          return (
            <Col className="grid-item" lg={2} sm={6} xs={12}>
              <div className="container">
                <MovieComponent movie={movie} isLargeRow={false} />
              </div>
            </Col>
          );
        })}
    </Row>
  );
}

export default GridMovies;
