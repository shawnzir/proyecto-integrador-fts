import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';

class PeliculasCartel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      loading: true,
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

    fetch(`https://api.themoviedb.org/3/movie/now_playing`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results.slice(0, 5));
        this.setState({
          peliculas: data.results.slice(0, 5),
          loading: false,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { peliculas, loading } = this.state;
    return (
      <React.Fragment>
        <h2>Películas en cartel</h2>
        {loading ? (
          <p>Cargando...</p>
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
        <a href='ver-todas-las-peliculas-en-cartelera'>Ver todas las peliculas en cartelera</a>
      </React.Fragment>
    );
  }
}

export default PeliculasCartel;
