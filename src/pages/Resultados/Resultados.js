import React, { Component } from 'react'
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar';

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorBusqueda: this.props.match.params.valorBusqueda,
      results: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchMovies(); 
  }

  fetchMovies = () => {
    const { valorBusqueda } = this.state;

    if (valorBusqueda) {
      this.setState({ loading: true })
      SearchBar(valorBusqueda)
        .then((results) => {
          this.setState({ results, loading: false })
        })
        .catch((err) => {
          this.setState({ loading: false })
        })
    }
  };

  render() {
    const { results, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loader/>
        ) : (
          <div>
            {results.length > 0 ? (
              <ul>
                {results.map((movie) => (
                  <li key={movie.id}>
                    <h2 className='title-font'>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No se encontraron resultados.</p>
            )}
          </div>
        )}
      </div>
    );
  }

}

export default Resultados;