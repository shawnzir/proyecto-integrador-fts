import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar"; 
import Peliculas from "../../components/Peliculas/Peliculas"; 

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
        <h1 className='title-font'>Este es el home!</h1>
        <Footer />
      </React.Fragment>
    );
  }
}
