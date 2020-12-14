import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {

        const link = `/movies/${movie.imdbID}`;

        return(
            <div className="card">
            <img src={movie.Poster} alt={movie.Title} className="card__image" />
            <article className="card__content">
                <h2>{movie.Title} ({movie.Year})</h2>
                <Link to={link}>View</Link>
            </article>
            <div className="card__info">
                <div>
                    <i className="material-icons">thumb_up</i>310
                </div>
            </div>
        </div>
        ); 
    }
export default Movie;
    
    






/*import React from 'react';
class Movie extends React.component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="card">
            <img src={movie.Poster} alt={movie.Title} className="card__image" />
            <article className="card__content">
                <h2>{movie.Title} ({movie.Year})</h2>
            </article>
            <div className="card__info">
                <div>
                    <i className="material-icons">thumb_up</i>310
                </div>
            </div>
        </div>
        ); 
    }
}
export default Movie;*/