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
    const page = this.state.page
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
        this.setState({
          peliculas: this.state.peliculas.concat(data.results.slice(0, limit)),
          loading: false
        });
      })
      .catch((error) => console.error(error));
  }

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        loading: false
      },
      () => {
        console.log("estamos en la pagina " + this.state.page);
        
        this.cargarPeliculas();
      }
    )
  }

  render() {
    const peliculas = this.state.peliculas
    const loading = this.state.loading
    const limit = this.props.limit
    const filtro = this.props.filtro

    const peliculasFiltradas = peliculas.filter((pelicula) =>
      filtro && pelicula.title.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
      <React.Fragment>
        <div className='movie-cards-container'>
          {loading ? (
            <Loader />
          ) : (
            filtro ? (
              peliculasFiltradas.map((pelicula) => (
                <MovieCard
                  key={pelicula.id}
                  movieId={pelicula.id}
                  title={pelicula.title}
                  image={pelicula.poster_path}
                  description={pelicula.overview}
                />
              ))
            ) : (
              peliculas.map((pelicula) =>
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
          <div className='load-more-container'>
            <button onClick={this.handleLoadMore} className='load-more title-font'> Cargar Más </button>
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
