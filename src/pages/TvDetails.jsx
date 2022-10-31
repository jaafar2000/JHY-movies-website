import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../context/Mycontext";
import axios from "../axios/axios";
import { useState } from "react";
import MovieTvDetails from "../components/MovieTvDetails";

import "./TvDetails.css";
import "./movieDetails.css";
import MovieTvCredits from "../components/MovieTvCredits";
import Video from "../components/Video";
import Review from "../components/Review";

const baseURL = "https://image.tmdb.org/t/p/original";

const TvDetails = () => {
  const { tvId } = useContext(myContext);

  const [tv, setTv] = useState();
  const [credit, setCredits] = useState([]);
  const [videoTv, setVideoTv] = useState([]);
  const [reviews, setReviews] = useState([]);
  const urlReviews = `https://api.themoviedb.org/3/tv/${tvId}/reviews?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US`;
  const urlTvDetails = `https://api.themoviedb.org/3/tv/${tvId}?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US`;
  const urlCredits = `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US`;
  const urlVideo = `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US`;

  useEffect(() => {
    async function fetchTvDetails() {
      const req = await axios.get(urlTvDetails);
      setTv(req?.data);
    }
    fetchTvDetails();
  }, []);

  useEffect(() => {
    async function fetchTvCredits() {
      const req = await axios.get(urlCredits);
      setCredits(req?.data?.cast);
    }
    fetchTvCredits();
  }, []);

  useEffect(() => {
    async function fetchVideo() {
      const reqestv = await axios.get(urlVideo);
      setVideoTv(reqestv?.data?.results);
    }
    fetchVideo();
  }, []);

  useEffect(() => {
    async function fetchReview() {
      const reqestr = await axios.get(urlReviews);
      setReviews(reqestr?.data?.results);
    }
    fetchReview();
  }, []);

  console.log(tv?.seasons);

  return (
    <div style={{ paddingTop: "4rem", color: "white" }}>
      <MovieTvDetails item={tv} />
      <div className="season_section">
    <h1 className="season-title">Season</h1>
        <div className="season">
          {tv?.seasons.map((season, index) => (
            <>
              {index ? (
                <div className="card">
                  <img src={`${baseURL}${season?.poster_path}`} alt="" />
                  <p className="info">
                    <p>
                      {season?.name} <span>{season?.air_date}</span>{" "}
                    </p>
                    <p>
                      {season?.episode_count} <span>Episode</span>
                    </p>
                  </p>
                  <div className="overlay-season"></div>
                </div>
              ) : (
                <div className="card">
                  <img src={`${baseURL}${season?.poster_path}`} alt="" />
                  <p className="info">
                    <p>
                      season 1 <span>{season?.air_date}</span>{" "}
                    </p>
                    <p>
                      {season?.episode_count} <span> Episode</span>
                    </p>
                  </p>
                  <div className="overlay-season"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      <MovieTvCredits credits={credit} />
      <Video video={videoTv} />
      <Review reviews={reviews} />
    </div>
  );
};

export default TvDetails;
