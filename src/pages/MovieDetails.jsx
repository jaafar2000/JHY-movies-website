import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import { useContext } from "react";
import { myContext } from "../context/Mycontext";
import { useNavigate } from "react-router-dom";
import MovieTvDetails from "../components/MovieTvDetails";
import MovieTvCredits from "../components/MovieTvCredits";
import Video from "../components/Video";
import Review from "../components/Review";


import "./movieDetails.css";


const MovieDetails = () => {
  const nav = useNavigate();
  const { id } = useContext(myContext);
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState([]);
  const [video, setVideo] = useState([]);
  const [reviews, setReview] = useState([]);
  const URLMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US`;
  const URLMovieCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US`;
  const URLMovieVdeios = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US`;
  const URLMovieReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US`;

  useEffect(() => {
    async function fetchMovie() {
      const req = await axios
        .get(URLMovieDetails)
        .catch((err) => console.log("ERR"));
      setMovie(req?.data);
    }
    fetchMovie();
  }, []);

  useEffect(() => {
    async function fetchCredits() {
      const reqestCast = await axios.get(URLMovieCredits);
      setCredits(reqestCast?.data?.cast);
    }
    fetchCredits();
  }, []);

  useEffect(() => {
    async function fetchVideo() {
      const reqestv = await axios.get(URLMovieVdeios);
      setVideo(reqestv?.data?.results);
    }
    fetchVideo();
  }, [id]);

  useEffect(() => {
    async function fetchReview() {
      const reqestr = await axios.get(URLMovieReviews);
      setReview(reqestr?.data?.results);
    }
    fetchReview();
  }, []);
  window.addEventListener("load", function () {
    nav(-1);
  });
  window.removeEventListener("load", function () {
    nav(-1);
  });
  return (
    <div style={{ color: "white", paddingTop: "4rem" }}>
      <MovieTvDetails item={movie} />
      <MovieTvCredits credits={credits} />

      <Video video={video} />

      <Review reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
