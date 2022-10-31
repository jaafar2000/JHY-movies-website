import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomPageInation from "../components/CustomPageInation";
import axios from "../axios/axios";
import MovieTvCard from "../components/MovieTvCard";
import "./search.css";

import { useState } from "react";
import { useEffect } from "react";
const Search = () => {
  const baseURL = "https://image.tmdb.org/t/p/original";

  const [search, setSearch] = useState("");
  const [type, setType] = useState("one");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSomething();
  };

  async function fetchSomething() {
    const req = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type == "one" ? "movie" : "tv"
      }?api_key=f60286e80b3cb2ce39c51b561c49c906&language=en-US&query=${search}&page=${page}&include_adult=false`
    );
    setContent(req?.data?.results);
    setPage(req?.data?.page);
    console.log(content);
  }
  useEffect(() => {
    fetchSomething();
  }, [type, page ]);

  return (
    <div
      className="search_section"
      style={{ paddingTop: "4rem", color: "white" }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="search_form">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <SearchIcon sx={{ fontSize: 40 }} />
          </button>
        </div>
        <Box sx={{ width: "50%" }}>
          <Tabs
            value={type}
            textColor="white"
            aria-label="secondary tabs example"
            onChange={(event,newValue) => {
              setType(newValue);
              setPage(1);
            }}
          >
            <Tab value="one" label="Movie" />
            <Tab value="two" label="TV series" />
          </Tabs>
        </Box>
      </form>
      {content ? (
        <div className="search_result-feed" style={{ paddingTop: "2rem" }}>
          <p className="search_result">
            Results for <span>"{search}"</span>
          </p >
          {
            content.length <1 &&  (<p className="search-result-two" >No {type == "one" ? 'MOVIE' : 'TV'} Found For " <span>{search}</span> "</p>) 
          }
          <MovieTvCard
            items={content}
            baseURL={baseURL}
            type={type == "one" ? "movie" : "tv"}
          />
     
        </div>
      ):(
        
        <div className="waitForSearch" style={{marginTop:"5rem"}}  >
        <p>type and press search</p>
        </div> 
        
        
      )
      
      }
           <CustomPageInation setPage={setPage} noOfPages={page} />
    </div>
  );
};

export default Search;
