import React, { Component } from 'react'

export default class DetallePelicula extends Component {
  constructor(){
    super();
    this.state={
      datos: null
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/533535?language=en-US`)
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
