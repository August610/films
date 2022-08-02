import React, {useState, useEffect} from "react";
import { Movies } from "../Movies";
import { Preloader } from "./Preloader";
import { Search } from "./Search";

// const API_KEY = process.env.REACT_APP_API_KEY;
const  Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  const searchMovies = (str, type = "all") => {
    setLoading(true)
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=1128dd91&s=${str}${
        type !== "all" ? `&type=${type}` : " "
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      })
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1128dd91&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }, [])

    return (
      <main className="container content">
        <Search searchMovies={searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }

export { Main };
