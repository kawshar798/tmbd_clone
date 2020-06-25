import React,{useState,useEffect } from 'react';
import { API_URL, API_KEY,IMAGE_BASE_URL,POSTER_SIZE,BACKDROP_SIZE} from "../config";

import HeroImage from '../components/HeroImage';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';
import MovieThumb from '../components/MovieThumb';
import Spinner from '../components/Spinner';
import LoadMoreBtn from '../components/LoadMoreBtn';
import NoImage from "../components/images/no_image.jpg";
//use Custom Hook;
import{useHomeFetch} from '../components/hooks/useHomeFetch';


const Home = () => {
  const [
    {
      state:{movies,currentPage,totalPages,heroimage},
    loading, 
    error
  },
     fetchMovies ]  = useHomeFetch();
  const [searchTerm,setSearchTerm] = useState('');
  console.log(movies);


  if(!movies[0]){
   return  <Spinner/>
  }

    return (
        <>
     
          <HeroImage 
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroimage.backdrop_path}`} 
          title={heroimage.original_title}
          text={heroimage.overview}
          
          /> 
          <SearchBar/>
          <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
          {
              movies.map(item=>(
                <MovieThumb 
                key={item.id}
                clickable
                image={
                 item.poster_path ?
                  `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`
                  :NoImage
                }
                movieId={item.id}
                movieName={item.original_title}

                 />
              ))
            }
          </Grid>
        
          <Spinner/>
          <LoadMoreBtn/>

        </>
    );
};

export default Home;