import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios/axios";
import CustomPageInation from "../components/CustomPageInation";
import MovieTvCard from "../components/MovieTvCard";


const baseURL = "https://image.tmdb.org/t/p/original";
const Tv = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchMovie() {
      const req = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US&sort_by=popularity.desc&page=${page}`
      );

      setItems(req?.data?.results);
    }

    fetchMovie();
  }, [page]);

  return (
    <div className="movie__container">
      <MovieTvCard items={items} baseURL={baseURL} type={"tv"} />
      <CustomPageInation setPage={setPage} noOfPages={500} />
    </div>
  );
};

export default Tv;
