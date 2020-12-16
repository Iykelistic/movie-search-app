import React, { useState,  } from "react";
import "./App.css";
import MoviesDisplay from "./MoviesDisplay";
import Search from "./Search";

const MovieSearch = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    let page = 1;
  
      const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);
        page = 1;
  
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=925d194f&page=${page}`)
          .then(response => response.json())
          .then(jsonResponse => {
            if (jsonResponse.Response === "True") {
              page++;
              setMovies(jsonResponse.Search);
              setLoading(false);
            } else {
              setErrorMessage(jsonResponse.Error);
              setLoading(false);
            }
          });
  
          window.onscroll = () => {
            if (loading || errorMessage) return;
  
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setLoading(true);
                setErrorMessage(null);
                
                fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=925d194f&page=${page}`).then(response => response.json()).then(jsonResponse=> {
                  if(jsonResponse.Response === "True") {
                    page++;
                    setMovies(prevMovies => [...prevMovies, ...jsonResponse.Search]);
                    setLoading(false);
                  } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                  }
                });
            }
        };
        };
  
      
      return (
       <div className="App">
        <Search search={search} />
        <MoviesDisplay movies={movies} loading={loading} errorMessage={errorMessage} />
      </div>
    );
  };
  export default MovieSearch;