import React from 'react'
import Row from '../components/Row';
import request from '../axios/Requests';
import Banner from '../components/Banner';
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className='home' >
      
      <Banner/>

      <Row title='NETFLIX ORIGINALS' fetchUrl={request.fetchingNetflixOriginals} isLarge={true}/>
      <Row title='Trending Now' fetchUrl={request.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={request.fetchingTopRated}/>
      <Row title='Action Movies' fetchUrl={request.fetchingActionMovie}/>
      <Row title='Comedy Movie' fetchUrl={request.fetchingComdeyMovie}/>
      <Row title='Horror Movie' fetchUrl={request.fetchingHorrorMovie}/>
      <Row title='Romance Movie' fetchUrl={request.fetchingRomanceMovie}/>
      <Row title='Documentaries' fetchUrl={request.fetchingDocs}/>
      
    </div>
  )
}

export default Home