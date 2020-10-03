import React, { useState, useEffect } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);
  console.log("banner", movie);
  function truncateString(str, num) {
   
    return str?.length > num ? str.slice(0, num) + '...' : str
  }
  
  const addMyMovie = (title)=>{
    //set the title to global state with recoil
    //
    alert(`Added ${title} to my list`)
  }
  
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={()=>addMyMovie(movie?.title  || movie?.name || movie?.original_name)}>Play</button>
          <button className="banner_button"  onClick={()=>addMyMovie(movie?.title  || movie?.name || movie?.original_name)}>My List</button>
        </div>
        <h1 className="banner_description">
            {truncateString(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fadebutton"/>
    </header>
  );
}

export default Banner;
