const API_KEY =  "f60286e80b3cb2ce39c51b561c49c906";

const request = {
  fetchTrending : `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchingNetflixOriginals : `/discover/tv?api_key=${API_KEY}&width_network=213`,
  fetchingTopRated : `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchingActionMovie : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchingComdeyMovie : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchingHorrorMovie : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchingRomanceMovie : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchingDocs : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMovie :`/discover/movie?api_key=${API_KEY}&language=en-US`
}

export default request;


