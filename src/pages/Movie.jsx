import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios/axios";
import CustomPageInation from "../components/CustomPageInation";
import MovieTvCard from "../components/MovieTvCard";
import Loader from "../components/Loader";

const baseURL = "https://image.tmdb.org/t/p/original";

const Movie = () => {
  const [isLoading , setIsLoading] = useState(false)
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchMovie() {
      const req = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );

      setItems(req?.data?.results);
      setIsLoading(true)
    }

    fetchMovie();
  }, [page]);

  return (
    <div className="movie__container">
      {
        isLoading ? (<MovieTvCard items={items} baseURL={baseURL} type={'movie'} />):( <Loader/> )
      }
      <CustomPageInation setPage={setPage} noOfPages={500}  />
    </div>
  );
};

export default Movie;
