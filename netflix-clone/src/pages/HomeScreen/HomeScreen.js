import React, { useState } from "react";
import NavBar from "../../shared_components/NavBar/NavBar";
import Banner from "../../shared_components/Banner/Banner";
import "./HomeScreen.scss";
import requests from "../../api/Requests";
import RowSlider from "../../shared_components/RowSlider/RowSlider.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function HomeScreen(props) {
  return (
    <div className="home-screen">
      <NavBar />

      <Banner />
      <RowSlider title="Trending Now" fetchUrl={requests.fetchTrending} />
      <RowSlider
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <RowSlider title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <RowSlider title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <RowSlider title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <RowSlider title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <RowSlider
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <RowSlider
        title="Documentaries"
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}

export default HomeScreen;
