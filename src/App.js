import "./App.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import TvDetails from "./pages/TvDetails";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search.jsx"
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home />}/>        
        <Route path="/" element={<Home />}/>        
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/search" element={ <Search/> } />
        <Route path="/search/MovieDetails" element={<MovieDetails/>} />
        <Route path="/home/MovieDetails" element={<MovieDetails/>} />
        <Route path="/movie/MovieDetails" element={<MovieDetails/>} />
        <Route path="/tv/TvDetails" element={<TvDetails/>} />
        <Route path="/home/TvDetails" element={<TvDetails/>} />
        <Route path="/search/TvDetails" element={<TvDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
