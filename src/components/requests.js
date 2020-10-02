const APIKEY = "eb83c5199ab5f158336fe5da692896e9";

const requests = {
   fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
   fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
   fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
   fetchActionMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=35`,
   fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=27`,
   fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=10749`,
   fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=99`,
   
};

const genres = {
    
        "genres": [
          {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 16,
            "name": "Animation"
          },
          {
            "id": 35,
            "name": "Comedy"
          },
          {
            "id": 80,
            "name": "Crime"
          },
          {
            "id": 99,
            "name": "Documentary"
          },
          {
            "id": 18,
            "name": "Drama"
          },
          {
            "id": 10751,
            "name": "Family"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 36,
            "name": "History"
          },
          {
            "id": 27,
            "name": "Horror"
          },
          {
            "id": 10402,
            "name": "Music"
          },
          {
            "id": 9648,
            "name": "Mystery"
          },
          {
            "id": 10749,
            "name": "Romance"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 10770,
            "name": "TV Movie"
          },
          {
            "id": 53,
            "name": "Thriller"
          },
          {
            "id": 10752,
            "name": "War"
          },
          {
            "id": 37,
            "name": "Western"
          }
        ]
      }


export default requests;
