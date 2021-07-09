import React, { useEffect } from "react";
import "./HomePage.scss";
import requests from "../../../../api/Requests";
import RowSlider from "../../../../shared_components/RowSlider/RowSlider.js";
import NavBar from "../../../../shared_components/NavBar/NavBar";
import Banner from "../../../../shared_components/Banner/Banner";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
HomePage.propTypes = {};

function HomePage(props) {
  const user = useSelector((state) => state.app.user);
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);
  return (
    <div className="homePage">
      <NavBar />
      <Banner />
      {/* <RowTop /> */}
      <RowSlider title="Trending Now" fetchUrl={requests.fetchTrending} />
      <RowSlider
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <RowSlider
        title="Top Rated"
        rowId={1}
        fetchUrl={requests.fetchTopRated}
      />
      <RowSlider
        title="Action Movies"
        rowId={2}
        fetchUrl={requests.fetchActionMovies}
      />
      <RowSlider
        title="Comedy Movies"
        rowId={3}
        fetchUrl={requests.fetchComedyMovies}
      />
      <RowSlider
        title="Horror Movies"
        rowId={4}
        fetchUrl={requests.fetchHorrorMovies}
      />
      <RowSlider
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <RowSlider
        bottomRow={true}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}

export default HomePage;
