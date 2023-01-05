import React, { useEffect, useState } from 'react'
import Api from './Api';
import './Banner.css';
import Requests from './Requests';

const Banner = () => {

  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await Api.get(Requests.fetchNetflixOriginals);
      setmovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ])
      return request;
    }

    fetchData();
  }, [])

  console.log(movie);
  

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",

    }}>
      <div className='banner_contents'>
        <h1 className='banner_title'>
        {movie.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
        <button className='banner_button'>Play</button>
        <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
        {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div> 
      <div className='banner--fadeBottom'/> 
    </header>
  )
}

export default Banner