import React,{useState,useEffect } from 'react';
import { API_URL, API_KEY,API_BASE_URL,POSTER_SIZE,BACKDROP_SIZE} from "../../config";
export const useHomeFetch = () => {
    const [state,setState]     = useState({movies:[]});
    const [loading,setLoading] = useState(false);
    const [error,setError]     = useState(false);
  
    const fetchMovies = async endpoint => {
      setError(false);
      setLoading(true);
      try{
        const result = await (await fetch(endpoint)).json();
        setState( prev => ({
          ...prev,
          movies:[...result.results],
           heroimage:prev.heroimage || result.results[0],
           currentPage:result.page,
           totalPage:result.total_pages,
        }));
        console.log(result);
  
      }catch(error){
        setError(true);
        console.log(error);
      }
    }

    useEffect( () => {
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
      },[]);

      return [{state,loading,error},fetchMovies]
}

