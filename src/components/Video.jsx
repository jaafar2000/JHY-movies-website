import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Video = ({video}) => {
  return (
    <div>
    <p className="rT">Related Videos & Trailer</p>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {video.map((v, index) => (
        <SwiperSlide>
          <>
            {index < 3 && (
              <div className="reactPlayer_container">
                <ReactPlayer
                  className="reactPlayer"
                  controls
                  url={`https://www.youtube.com/watch?v=${v.key}`}
                />
              </div>
            )}
          </>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default Video