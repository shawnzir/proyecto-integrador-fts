import React, { Component } from 'react'

export default class DetallePelicula extends Component {
  constructor(){
    super();
    this.state={
      datos: null
    }
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`
      }
    };
    // Realizar el fetch a la API
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          datos: data,
        });
      })
      .catch((error) => {
        console.error(error)
      });
    }

  
  render() {
    console.log(this.state.datos)
    return (
      <div>
        <h1>Detalle pelicula</h1>
      </div>
    )
  }
}
