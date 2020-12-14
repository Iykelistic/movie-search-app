import { createContext} from 'react';

const MovieContext = createContext({
    movies: [],
    search: () => {}
})

export default MovieContext;