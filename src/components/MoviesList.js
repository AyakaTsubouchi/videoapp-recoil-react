import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

import axios from "axios";

const myFavoriteMovieState = atom({
  key: "myFavoriteMovieState",
  default: [],
});
const moviesState = atom({
  key: "moviesState",
  default: [],
});

const MoviesList = () => {
  const [myMovies, setMyMovies] = useRecoilState(myFavoriteMovieState);
  const [movies, setMovies] = useRecoilState(moviesState);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=eb83c5199ab5f158336fe5da692896e9&language=en-US`
      );
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  console.log(movies);

  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie?.title || movie?.name || movie?.original_name}
            <button
              onClick={() => {
                setMyMovies([
                  ...myMovies,
                  { name: movie?.title || movie?.name || movie?.original_name },
                ]);
              }}>
              add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
