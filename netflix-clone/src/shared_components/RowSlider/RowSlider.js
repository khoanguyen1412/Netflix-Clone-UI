import React, { useEffect, useState } from "react";
import "./RowSlider.scss";
import Carousel from "react-bootstrap/Carousel";
import axios from "../../api/axios";
import Row from "react-bootstrap/Row";
import MovieItem from "../MovieItem/MovieItem.js";

const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";
RowSlider.propTypes = {};

function RowSlider({
  title,
  fetchUrl,
  isLargeRow = false,
  isSpecial = false,
  isTV = false,
  genresId = null,
  bottomRow = false,
}) {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const [movies, setMovies] = useState([]);
  const [sliderData, setSliderData] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    async function fetchData() {
      var request = null;
      if (isSpecial) {
        if (isTV) {
          request = await axios.get(
            `/discover/tv?api_key=${API_KEY}&with_genres=${genresId}`
          );
        } else {
          request = await axios.get(
            `/discover/movie?api_key=${API_KEY}&with_genres=${genresId}`
          );
        }
      } else {
        request = await axios.get(fetchUrl);
      }

      setMovies(request.data.results);
      var slide1 = [];
      for (let i = 0; i < 6; i++) {
        slide1.push(request.data.results[i]);
      }
      var slide2 = [];
      for (let i = 6; i < 12; i++) {
        slide2.push(request.data.results[i]);
      }
      var slide3 = [];
      for (let i = 12; i < 18; i++) {
        slide3.push(request.data.results[i]);
      }

      var slides = [slide1, slide2, slide3];
      setSliderData(slides);
      return request;
    }

    fetchData();
    // eslint-disable-next-line
  }, [fetchUrl]);

  return (
    <div className="row-slider">
      <h2 className="row-title">{title}</h2>
      {sliderData?.length > 0 && (
        <Carousel
          interval="500000000000"
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
        >
          {sliderData.map((slide) => {
            return (
              <Carousel.Item>
                <Row className="slide-container">
                  {slide.map((movie, index) => {
                    return (
                      <MovieItem
                        isBottom={bottomRow}
                        index={index}
                        movie={movie}
                        isLargeRow={isLargeRow}
                      />
                    );
                  })}
                </Row>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default RowSlider;
