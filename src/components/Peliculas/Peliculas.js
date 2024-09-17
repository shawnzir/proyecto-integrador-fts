import React, { Component } from "react"; //Con esto puedo crear un componente de clase

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    const { terminoBusqueda } = this.props; // Estoy obteniendo terminoBusqueda de las props de Home.js

    if (terminoBusqueda) {
      const apiKey = '37350c3066893fe6f6ce9d5792c23197'; 
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${terminoBusqueda}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results);
            
          this.setState({ peliculas: data.results }); 
        })
        .catch((e) => console.log(e));
    }
  }

  

  render() {
    const { peliculas } = this.state;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // Para construir la URL, tamaño w500 (en original es muy grande) 

    return (
      <div className="font">
        <h2>Resultados de la búsqueda:</h2>
        <section className="title-font">
          {peliculas.length > 0 ? ( //si hay peliculas, recorre cada peli y devolvemela con la imagen titulo y descripción
            peliculas.map((pelicula) => (
              <div key={pelicula.id}>
                <h3>{pelicula.title}</h3> 
                <div>
                  <img
                    src={imageBaseUrl + pelicula.poster_path}
                    alt={pelicula.title}/> 
                </div>
                <p>{pelicula.overview}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </section>
      </div>
    );
  }
}

export default Peliculas;
