import React from "react";
import NavBar from "../../shared_components/NavBar/NavBar";
import Banner from "../../shared_components/Banner/Banner";
import Row from "../../shared_components/Row/Row";
import "./HomeScreen.scss";
import requests from "../../api/Requests";

function HomeScreen(props) {
  return (
    <div className="home-screen">
      <NavBar />

      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow="true"
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default HomeScreen;
