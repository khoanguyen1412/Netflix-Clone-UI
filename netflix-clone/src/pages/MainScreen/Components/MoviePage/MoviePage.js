import React, { useEffect, useState } from "react";
import axios from "../../../../api/axios.js";
import requests from "../../../../api/Requests.js";
import RowSlider from "../../../../shared_components/RowSlider/RowSlider.js";
import NavBar from "../../../../shared_components/NavBar/NavBar";
import "./MoviePage.scss";

function MoviePage(props) {
  const [listGenres, setListGenres] = useState([]);
  // /discover/tv?api_key=f81980ff410e46f422d64ddf3a56dddd&with_genres=10759
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchMovieListGenres);
      setListGenres(request.data.genres);

      return request;
    }

    fetchData();
  }, []);

  useEffect(() => {}, [listGenres]);
  return (
    <div className="moviePage">
      <NavBar />
      {listGenres.map((genres, index) => {
        return (
          <RowSlider
            isSpecial={true}
            isTV={false}
            genresId={genres.id}
            title={genres.name}
            fetchUrl=""
            bottomRow={index === listGenres.length - 1}
          />
        );
      })}
    </div>
  );
}

export default MoviePage;
