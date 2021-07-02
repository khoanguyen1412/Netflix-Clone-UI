import React, { useEffect, useState } from "react";
import "./RowTop.scss";
import { Row } from "react-bootstrap";
import axios from "../../api/axios.js";
import requests from "../../api/Requests.js";
import MovieTopItem from "../MovieTopItem/MovieTopItem.js";

function RowTop(props) {
  const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";
  const [top10, setTop10] = useState();
  useEffect(() => {
    async function fetchData() {
      var request = await axios.get(requests.fetchTopRated);

      //setTop10(request.data.results);
      const res = request.data.results;
      var cloneList = [];
      for (let i = 0; i <= 4; i++) {
        cloneList.push(res[i]);
      }
      setTop10(cloneList);
      return request;
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(top10);
  }, [top10]);

  return (
    <Row className="row-top">
      {top10?.map((movie, index) => {
        return (
          <div className="top-item-container">
            <div className={`stt stt${index + 1}`}>{index + 1}</div>
            <MovieTopItem movie={movie} isLargeRow={true} />
          </div>
        );
      })}
    </Row>
  );
}

export default RowTop;
