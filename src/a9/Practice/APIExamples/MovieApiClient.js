import React, {useEffect, useState} from "react";
const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({title: '', rating: 2.5});

    const onMovieTitleChange = (event) =>
        setMovie({...movie, title: event.target.value});

    const createMovieClickHandler = () =>
        fetch('http://localhost:4000/api/movies', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    const deleteMovie = (movie) =>
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    const saveMovie = () =>
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    useEffect(() =>
            fetch('http://localhost:4000/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);
    return(
        <div>
            <h2>Movies</h2>
            <div className="row ps-3">
                <input className="col-6 form-control"
                       value={movie.title}
                       onChange={onMovieTitleChange}
                       style={{width: "70%"}}/>

            </div>
            <div className="row pt-2 ps-2">
                <button
                    onClick={saveMovie}
                    className="col-3 btn btn-primary float-end ms-2">
                    Save
                </button>

                <button
                    onClick={createMovieClickHandler}
                    className="col-3 btn btn-success float-end">
                    Create
                </button>
            </div>


            <ul className="list-group pt-4">
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.stars}
                            <button onClick={() => setMovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>

                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;