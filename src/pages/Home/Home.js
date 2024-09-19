import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Peliculas from "../../components/Peliculas/Peliculas";
import PeliculasPopulares from '../../components/PeliculasPopulares/PeliculasPopulares';
import PeliculasCartel from '../../components/PeliculasCartel/PeliculasCartel';
import "./Home.css"

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
      <div className='home'>
        <Header />
        <SearchBar onSearch={this.manejarBusqueda} />
        {this.state.terminoBusqueda && (
          <Peliculas terminoBusqueda={this.state.terminoBusqueda} />
        )}
          <h1 className='title-font'>Películas populares</h1>
        <div className='movies-home'>
          <PeliculasPopulares />
        </div>
          <h1 className='title-font'>Películas en cartelera</h1>
        <div className='movies-home'>
          <PeliculasCartel />
        </div>
        <Footer />
      </div>
    );
  }
}
