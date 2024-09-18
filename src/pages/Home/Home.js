import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Peliculas from "../../components/Peliculas/Peliculas";
// import MovieCard from '../../components/MovieCard/MovieCard';
import PeliculasPopulares from '../../components/PeliculasPopulares/PeliculasPopulares';
import PeliculasCartel from '../../components/PeliculasCartel/PeliculasCartel';
import "../Favoritos/Favoritos.css"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terminoBusqueda: ""
    };
  }

  manejarBusqueda = (termino) => {
    this.setState({ terminoBusqueda: termino });
    console.log(termino);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchBar onSearch={this.manejarBusqueda} />
        {this.state.terminoBusqueda && (
          <Peliculas terminoBusqueda={this.state.terminoBusqueda} />
        )}
        <div className='color-home'>
          <div className='favoritos'>
            <PeliculasPopulares />
          </div>
          <div className='favoritos'>
            <PeliculasCartel />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
