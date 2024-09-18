import React, { Component } from "react";
import Peliculas from "../../components/Peliculas/Peliculas";
import Loader from '../../components/Loader/Loader';
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './Results.css';

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      loading: true,
    };
  }

  handleResults = (peliculas) => {
    this.setState({ peliculas, loading: false });
  };

  render() {
    const { peliculas, loading} = this.state;
    const { valorBusqueda } = this.props.match.params;

    return (
      <div>
        <Header />
        <Peliculas
          terminoBusqueda={valorBusqueda}
          onResults={this.handleResults}
          onError={this.handleError}
        />

        <div className="results-page">
          {loading ? (
            <Loader />
          ) : peliculas.length > 0 ? (
            <ul className="results">
              {peliculas.map((movie) => (
                <li key={movie.id}>
                  <Link to={`/pelicula/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                    <h2 className="title-font">{movie.title}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <h1 className="font">No se encontraron resultados</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Resultados;
