import React from "react";
import { useNavigate } from "react-router-dom";
import "./movieAndTvCard.css";
import { useContext } from "react";
import { myContext } from "../context/Mycontext";

const MovieTvCard = ({ items, baseURL, type }) => {
  const { setTvId, setId } = useContext(myContext);
  const nav = useNavigate();
  const handleOnClick = (id) => {
    if (type == "movie") {
      nav("./MovieDetails");
      setId(id);
    } else {
      nav("./TvDetails");
      setTvId(id);
    }
  };

  return (
    <section className="movies__section  m-t">
      {items.map((item) => (
        <div
          className="movie__card"
          key={item?.title}
          onClick={() => handleOnClick(item.id)}
        >

          <div className="image" >
            <div className="overLay" ></div>
            <img className="movie__img" src={`${baseURL}${item.poster_path}` || "https://advancescreenings.com/img/timthumb.php?src=/img/posters/d/drunk_wedding.jpg&h=282&w=190&q=100" } />
          </div>
          <h1>{type == "movie" ? item.title || item?.original_name: item.name || item?.original_name }</h1>
          <p>{type == "movie" ? item.release_date : item.first_air_date}</p>
          <span>{item.vote_average}</span>
        </div>
      ))}
    </section>
  );
};

export default MovieTvCard;
