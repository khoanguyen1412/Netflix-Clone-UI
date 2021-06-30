import React, { useEffect, useState } from "react";
import "./GridMovies.scss";
import { Row, Col } from "react-bootstrap";
import axios from "../../api/axios.js";
import MovieItem from "../MovieItem/MovieItem.js";
import MovieComponent from "../MovieComponent/MovieComponent.js";

const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";
function GridMovies({ mode = 1 }) {
  const [listMovies, setListMoves] = useState([]);
  const [listTVs, setListTVs] = useState([]);
  // /popular?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US&page=3
  useEffect(() => {
    //get movies
    function fetchDataMovies() {
      var request = [];
      axios
        .get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${1}`)
        .then((res) => {
          request = request.concat(res.data.results);
          axios
            .get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${2}`)
            .then((res) => {
              request = request.concat(res.data.results);
              axios
                .get(
                  `/movie/popular?api_key=${API_KEY}&language=en-US&page=${3}`
                )
                .then((res) => {
                  request = request.concat(res.data.results);
                  setListMoves(request);
                })
                .catch((err) => {});
            })
            .catch((err) => {});
        })
        .catch((err) => {});

      return request;
    }

    //get tv shows
    function fetchDataTVs() {
      var request = [];
      axios
        .get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=${1}`)
        .then((res) => {
          request = request.concat(res.data.results);
          axios
            .get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=${2}`)
            .then((res) => {
              request = request.concat(res.data.results);
              axios
                .get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=${3}`)
                .then((res) => {
                  request = request.concat(res.data.results);
                  setListTVs(request);
                })
                .catch((err) => {});
            })
            .catch((err) => {});
        })
        .catch((err) => {});

      return request;
    }

    fetchDataMovies();
    fetchDataTVs();
  }, []);

  useEffect(() => {}, []);
  return (
    <Row className="grid-movies-container">
      {mode === 1 &&
        listMovies.map((movie) => {
          return (
            <Col className="grid-item" lg={2} sm={6} xs={12}>
              <div className="container">
                <MovieComponent movie={movie} isLargeRow={false} />
              </div>
            </Col>
          );
        })}
      {mode === 2 &&
        listTVs.map((movie) => {
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
