import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import PropTypes from "prop-types";
import "./NewRow.scss";
import ScrollMenu from "react-horizontal-scrolling-menu";
NewRow.propTypes = {};

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieItem = ({ movie, selected }) => {
  return (
    <img
      className={`row__poster`}
      alt={movie.name}
      src={`${base_url}${movie.backdrop_path}`}
    />
  );
};
export const Menu = (movies, selected) =>
  movies.map((movie, index) => {
    return <MovieItem movie={movie} key={index} selected={selected} />;
  });

const selected = "item1";

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

function NewRow({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const menu = Menu(movies, selected);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const onSelect = (key) => {};

  return (
    <div className="newRow">
      <h2 className="row-title">{title}</h2>
      <div className="row__posters">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
          wheel={false}
        />
      </div>
    </div>
  );
}

export default NewRow;
