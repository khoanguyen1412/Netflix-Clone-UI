import React from "react";
import NavBar from "../../shared_components/NavBar/NavBar";
import Banner from "../../shared_components/Banner/Banner";
import Row from "../../shared_components/Row/Row";
import "./HomeScreen.scss";
import requests from "../../api/Requests";
import NewRow from "../../shared_components/NewRow/NewRow.js";
import RowSlider from "../../shared_components/RowSlider/RowSlider.js";

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
      {/* <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow="true"
      /> */}

      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} /> */}
    </div>
  );
}

export default HomeScreen;
