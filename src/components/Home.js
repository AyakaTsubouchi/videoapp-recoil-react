import React from 'react';
import {Link} from 'react-router-dom';
import Banner from './Banner'
import Row from './Row'
import requests from "./requests"
import "./Home.css"


const Home = () => {
    return (
        <div className="home">
          
            <Banner />
            <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
         <Link to="/mypage">mypage</Link>
            
        </div>
    );
};

export default Home;