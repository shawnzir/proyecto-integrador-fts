import { Component } from "react"; //Con esto puedo crear un componente de clase

class Peliculas extends Component {
  componentDidMount() {
    const { terminoBusqueda } = this.props; // Estoy obteniendo terminoBusqueda de las props de Home.js

    if (terminoBusqueda) {
      const apiKey = '37350c3066893fe6f6ce9d5792c23197';
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${terminoBusqueda}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          this.props.onResults(data.results);
        })
        .catch((e) => console.log(e));
    }
  }

  render() {
    return null
  }
}

export default Peliculas;
