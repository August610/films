import React from "react"
import {Movies} from "../Movies"
import { Preloader } from "./Preloader";
import { Search } from "./Search";


class Main extends React.Component {
    state ={
        movies : [],
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=1128dd91&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=1128dd91&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {
                movies.length ? 
                (<Movies movies={this.state.movies}/>) 
                : <Preloader/>
            }
            
         </main>
    }
    
}

export {Main}