import React from "react";

import { atom, useRecoilState } from "recoil";
import "./MyList.css";

const myFavoriteMovieState = atom({
  key: "myFavoriteMovieState",
  default: [],
});
const moviesState = atom({
  key: "moviesState",
  default: [],
});

const MyList = () => {
  const [myMovies, setMyMovies] = useRecoilState(myFavoriteMovieState);
  const deleteMyMovie = (index) => {
    setMyMovies((oldMyMovies) => {
      return oldMyMovies.filter(function (el, i) {
        return index !== i;
      });
    });
  };
  return (
    <div className="my_list">
      <h2>My Favorite List</h2>

      {myMovies.length === 0 ? (
        <div>add your favorite</div>
      ) : (
        <ul>
          {myMovies.map((movie, i) => (
            <>
              <li key={i}  className="my_list_li">
                {movie?.title || movie?.name || movie?.original_name}
              <button
                onClick={() => {
                  deleteMyMovie(i);
                }}>
                delete
              </button>
              </li>

            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyList;
