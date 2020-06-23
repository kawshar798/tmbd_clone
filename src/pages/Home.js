import React,{useState,useEffect } from 'react';
import { API_URL, API_KEY,API_BASE_URL,POSTER_SIZE,BACKDROP_SIZE} from "../config";

import HeroImage from '../components/HeroImage';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';
import MovieThumb from '../components/MovieThumb';
import Spinner from '../components/Spinner';
import LoadMoreBtn from '../components/LoadMoreBtn';

import{useHomeFetch} from '../components/hooks/useHomeFetch';

const Home = () => {
  const [{state,loading, error}, fetchMovies ]  = useHomeFetch();
  console.log(state);


  

    return (
        <>
          <HeroImage/> 
          <SearchBar/>
          <Grid/>
          <MovieThumb/>
          <Spinner/>
          <LoadMoreBtn/>

        </>
    );
};

export default Home;