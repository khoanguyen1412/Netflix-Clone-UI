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

  var [refactorMovieLists, setRefactorMovieLists] = useState([]);
  var [refactorTVLists, setRefactorTVLists] = useState([]);
  useEffect(() => {
    var movieLists = [];
    if (movies.length < 50) return;
    var movieList = [];
    for (let index = 1; index <= 10; index++) {
      const limit = 6 * index;
      for (let i = limit - 6; i < limit; i++) {
        movieList.push(movies[i]);
      }
      movieLists.push(movieList);
      movieList = [];
    }
    setRefactorMovieLists(movieLists);

    var TVLists = [];
    if (TVs.length < 50) return;
    var TVList = [];
    for (let index = 1; index <= 10; index++) {
      const limit = 6 * index;
      for (let i = limit - 6; i < limit; i++) {
        TVList.push(TVs[i]);
      }
      TVLists.push(TVList);
      TVList = [];
    }
    setRefactorTVLists(TVLists);
  }, [movies]);

  return (
    <Row className="grid-movies-container">
      {mode === 1 &&
        refactorMovieLists.map((list, indexRow) => {
          return (
            <div className="row-movie">
              {list.map((movie, indexItem) => {
                return (
                  <MovieItem
                    isBottom={indexRow === refactorMovieLists.length - 1}
                    index={indexItem}
                    movie={movie}
                  />
                );
              })}
            </div>
          );
        })}
      {mode === 2 &&
        refactorTVLists.map((list, indexRow) => {
          return (
            <div className="row-movie">
              {list.map((movie, indexItem) => {
                return (
                  <MovieItem
                    isBottom={indexRow === refactorTVLists.length - 1}
                    index={indexItem}
                    movie={movie}
                  />
                );
              })}
            </div>
          );
        })}
    </Row>
  );
}

export default GridMovies;
