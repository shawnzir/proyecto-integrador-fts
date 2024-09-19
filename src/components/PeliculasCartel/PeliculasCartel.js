import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom"

class PeliculasCartel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      loading: true,
      page: 1
    };
  }

  componentDidMount() {
    this.cargarPeliculas();
  }

  cargarPeliculas = () => {
    const {page} = this.state
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${page}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        const limit = this.props.limit || data.results.length
        this.setState((estadoAnterior) => ({
          peliculas: [...estadoAnterior.peliculas, ...data.results.slice(0, limit)],
          loading: false
        }));
      })
      .catch((error) => console.error(error));
  }

  handleLoadMore = () => {
    this.setState(
      (estadoAnterior) => {
        const nuevaPagina = estadoAnterior.page + 1
        return { page: nuevaPagina, loading: true}
      },
      () => {
        this.cargarPeliculas();
      }
    )
  }

  render() {
    const { peliculas, loading } = this.state;
    const { limit } = this.props
    return (
      <React.Fragment>
        <div className='movie-cards-container'>
          {loading ? (
            <Loader />
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
        {!limit && (
          <div className=''>
            <button onClick={this.handleLoadMore}> Cargar Más </button>
          </div>
        )}
        {limit && (
          <div className='link'>
            <Link to="/peliculas-cartelera" className="font"> Ver todas las peliculas en cartelera </Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default PeliculasCartel;
