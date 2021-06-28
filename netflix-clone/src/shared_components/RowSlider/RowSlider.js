import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./RowSlider.scss";
import Carousel from "react-bootstrap/Carousel";
import axios from "../../api/axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

RowSlider.propTypes = {};
const data = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4e/Loki_%28TV_series%29_logo.png",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4e/Loki_%28TV_series%29_logo.png",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4e/Loki_%28TV_series%29_logo.png",
    caption: "Caption",
    description: "Description Here",
  },
];
function RowSlider({ title, fetchUrl, isLargeRow = false }) {
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [sliderData, setSliderData] = useState([]);
  const limit = 5;
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results.length);
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
      console.log(sliderData);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row-slider">
      <h2>{title}</h2>
      {sliderData?.length > 0 && (
        <Carousel
          interval="500000000000"
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
        >
          {sliderData.map((slide) => {
            console.log(slide);
            return (
              <Carousel.Item>
                <Row className="slide-container">
                  {slide.map((movie) => {
                    return (
                      <Col className="movie-item">
                        <img
                          alt=""
                          style={{}}
                          src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                          }`}
                        />
                        <div className="movie-info">
                          <div className="movie-name">
                            {movie.name || movie.title || movie.original_title}
                          </div>
                          <div className="actions-group">
                            <div className="movie-btn play-btn">
                              <FaPlay className="icon-btn icon-play" />
                            </div>
                            <div className="movie-btn mark-btn">
                              <AiOutlineCheck className="icon-btn icon-check" />
                            </div>
                            <div className="movie-btn like-btn">
                              <BiLike className="icon-btn icon-like" />
                            </div>
                            <div className="movie-btn dislike-btn">
                              <BiDislike className="icon-btn icon-dislike" />
                            </div>
                            <div className="movie-btn show-info-btn">
                              <FiChevronDown className="icon-btn icon-show" />
                            </div>
                          </div>
                          <div className="detail-info">
                            <div className="age-limit">13+</div>
                            <div className="time">2h 13m</div>
                            <div className="quality">HD</div>
                          </div>
                          <div className="genres-group">
                            <div className="genre">Supperhero</div>
                            <div className="divider"></div>
                            <div className="genre">Exciting</div>
                            <div className="divider"></div>
                            <div className="genre">Adult</div>
                          </div>
                        </div>
                      </Col>
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
