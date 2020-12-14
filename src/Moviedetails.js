import React from 'react';
import "./Details.css";

class Moviedetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movie: []
        }
    }
    componentDidMount(){
        const { id } = this.props.match.params;

        fetch(`https://www.omdbapi.com/?i=${id}&apikey=925d194f`)
        .then(response => response.json())
        .then(data => {
            this.setState({ movie:data })
        })
    }
    render(){
        const movie = this.state.movie
        return(
            <div className="holder">
            <h2 className="text__name">Guardians Of The Galaxy Vol.2</h2>
            <div className="card__holder">
            <img src={movie.Poster} alt={movie.Title} className="image" />
            <article className="card__details">
                <h2> Year: {movie.Year}</h2>
                <h2> Genre:</h2>
                <h3>{movie.Genre}</h3>
                <h2> Actors: </h2>
                <h3>{movie.Actors}</h3>
                <h2> Directors: {movie.Director}</h2>
                <h2> Producers:</h2>
                <h3>{movie.Production}</h3>
                <h2> Plot:</h2>
                <h3>{movie.Plot}</h3>
            <div className="movie_button">
                <button type="submit">Play Now</button>
            </div>
            </article>
        </div>
        </div>
    
        ); 
    
    }
}
       
export default Moviedetails;
    
