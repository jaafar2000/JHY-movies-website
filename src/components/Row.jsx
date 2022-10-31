import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";
import "./Row.css";
import { useContext } from "react";
import { myContext } from "../context/Mycontext";
import Loader from "./Loader";

const Row = ({ title, fetchUrl, isLarge }) => {
  const { setId, setTvId } = useContext(myContext);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const baseURL = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req?.data?.results);
      setLoading(true);
      return req;
    }
    fetchData();
  }, [fetchUrl]);

  const handleOnClick = (id) => {
    if (!isLarge) {
      nav("./MovieDetails");
      setId(id);
      console.log(id);
    } else {
      nav("./TvDetails");
      setTvId(id);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__container`}>
        {loading ? (
          movies.map(
            (movie) =>
              (movie?.poster_path || movie?.backdrop_path) && (
                <div className={`cont  ${isLarge ? "l" : "s"}`}>
                  <img
                    onClick={() => handleOnClick(movie?.id)}
                    className={`row__poster ${isLarge && "l"}`}
                    key={movie?.id}
                    src={`${baseURL}${
                      isLarge ? movie.poster_path : movie?.backdrop_path
                    }`}
                    alt={movie?.name}
                  />
                  <div
                    className={`row_details ${isLarge ? "bigDiv" : "smallDiv"}`}
                  >
                    <p className="row_details-title">
                      {movie?.original_name || movie?.name || movie?.title}
                    </p>
                    <p>
                      {" "}
                      <span>Date : </span>{" "}
                      {movie?.first_air_date || movie?.release_date}
                    </p>
                    <p>
                      {" "}
                      <span>Vote Average :</span> {movie?.vote_average}/10
                    </p>
                    <p>
                      {" "}
                      <span>Vote Count : </span>
                      {movie?.vote_count}
                    </p>
                  </div>
                </div>
              )
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Row;
