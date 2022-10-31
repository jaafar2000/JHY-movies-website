import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import request from "../axios/Requests";
import axios from "../axios/axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../context/Mycontext";
import Loader from "./Loader";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 26,
  p: 0,
};

const baseURL = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const nav = useNavigate();
  const {setId} = useContext(myContext)
  const [movie, setMovie] = useState([]);
  const [Trailer, setTrailerUrl] = useState();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [isLoading ,setIsLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fetchMovie);
      setMovie(
        req?.data?.results[
          Math.floor(Math.random() * req?.data?.results.length - 1)
        ]

      );
      setIsLoading(true)

    }
    fetchData();
  }, []);

  const handleOnClickToDetails = (id) => {
      nav("./home/MovieDetails");
      setId(id);

  };

  const handleOnClickT = (movie) => {
    movieTrailer(movie?.name || movie?.original_title || "")
      .then((url) => {
        const urlParams = new URL(url).search;
        console.log(urlParams);
        setTrailerUrl(urlParams);
      })
      .catch((err) => console.log(err));
      setOpen(true)
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >

      {
        isLoading ? (
          <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <Button className="banner__button" onClick={() => handleOnClickT(movie)}>
              Play Trailer
            </Button>
  
            <button
              className="banner__button"
              onClick={()=>handleOnClickToDetails(movie?.id)}
            >
              See Details
            </button>
          </div>
  
          <h1 className="banner__description">
            {movie?.overview?.length > 100
              ? `${movie?.overview.substring(0, 150)}...`
              : movie?.overview}
          </h1>
        </div>
        ):(
          <Loader/>
        )
      }
      <div className="banner__fadeButtom"></div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="close" onClick={handleClose}><HighlightOffIcon sx={{fontSize : 45}} /></div>
          <ReactPlayer
            className="player"
            controls
            width='800px'
            height="500px"
            url={`https://www.youtube.com/watch${Trailer}`}
          />
        </Box>
      </Modal>
    </header>
  );
};

export default Banner;
