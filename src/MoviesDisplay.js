import Movie from './Movie';

const MoviesDisplay = (props) => (
    <>
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="cards">
          {props.movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))}
          {props.loading && <span>loading...</span>}
          {!!props.errorMessage && <div className="errorMessage">{props.errorMessage}</div>}
        </div>
    </>
);

export default MoviesDisplay;