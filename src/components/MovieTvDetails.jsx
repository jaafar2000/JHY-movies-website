import React from 'react'

const baseURL = "https://image.tmdb.org/t/p/original";

const MovieTvDetails = ({item}) => {

  return (
    
    <div className="background">
    <img
      className="backdrop__img"
      style={{ width: "100%" }}
      src={`${baseURL}${item?.backdrop_path}`}
      alt="backdrop__img"
    />
    <div className="overlay"></div>
    <div className="movie__info">
      <img src={`${baseURL}${item?.poster_path}`} alt="poster" />
      <div className="movie__info-text">
        <h1 className="title">
          {item?.title || item?.name }  {" "}
          <span className="vote_average">
            {item?.vote_average.toFixed(1)}
          </span>{" "}
        </h1>
        <p className="release_date_and_genres" >
          <span className="release-date">{item?.release_date}</span>
          {item?.genres.map((g, index) => (
            <span key={`${index}${g}`} className="genres">
              {g.name}{" "}
            </span>
          ))}
        </p>
        <h3>Overview</h3>
        <p className="overview"> {item?.overview} </p>
      </div>
    </div>
  </div>
  )
}

export default MovieTvDetails