import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const baseURL = "https://image.tmdb.org/t/p/original";

const MovieTvCredits = ({credits}) => {
  return (
    <div className="cast">
    <h1 className="cast_section-title">Cast</h1>
    <Swiper modules={Navigation} spaceBetween={10} slidesPerView={5}>
      {credits.map((credit) => (
        <SwiperSlide className="swiper__actor">
          <div className="slide">
            <img
              className="actor_image"
              src={
                credit?.profile_path == null
                  ? `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`
                  : `${baseURL}${credit?.profile_path}`
              }
              alt=""
            />
            <h1 className="actor_name">{credit?.name}</h1>
            <p className="actor_character">
              {credit?.character || "Character Name Not Avilable"}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default MovieTvCredits