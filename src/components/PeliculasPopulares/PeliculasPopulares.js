import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard"
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

class PeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            loading: true,
            limit: 5
        };
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`,
            },
        };

        fetch(`https://api.themoviedb.org/3/movie/popular`, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results.slice(0, 5));
                this.setState({

                    peliculas: data.results.slice(0, 5), // Mostrando solo 5
                    loading: false,
                });
            })
            .catch((error) => console.error(error));
    }

    render() {
        const { peliculas, loading } = this.state;

        return (
            <React.Fragment>
                <div className='movie-cards-container'>
                    {loading ? (
                        <Loader/>
                    ) : (
                        peliculas.map((pelicula) => (
                            <MovieCard 
                                key={pelicula.id}
                                movieId={pelicula.id}
                                title={pelicula.title}
                                image={pelicula.poster_path}
                                description={pelicula.overview}
                            />
                        ))
                    )}
                </div>
                <div className='link'>
                    <Link to="/peliculas-populares" > Ver todas las peliculas populares</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default PeliculasPopulares;
