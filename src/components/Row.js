import React, { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import axios from "./axios";
import './Row.css'

const baseURL = "https://image.tmdb.org/t/p/original";

const myFavoriteMovieState = atom({
    key: "myFavoriteMovieState",
    default: [],
  });
  const moviesState = atom({
    key: "moviesState",
    default: [],
  });

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
const [myMovies, setMyMovies] = useRecoilState(myFavoriteMovieState);
// const [movies, setMovies] = useRecoilState(moviesState);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => {
                setMyMovies([
                  ...myMovies,
                  { name: movie?.title || movie?.name || movie?.original_name },
                ]);
              }}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
