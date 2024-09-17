import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorBusqueda: "" // Valor que escriba el usuario en el buscador
    };
  }

  controlarCambios = (event) => {
    this.setState({ valorBusqueda: event.target.value });
  };

  onSubmit = () => {
    const { valorBusqueda } = this.state;
    this.props.onSearch(valorBusqueda);
  };

  render() {
    const { valorBusqueda } = this.state;
    return (
      <form className="form-home" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onChange={this.controlarCambios}
          placeholder="Buscar"
          value={valorBusqueda}
        />
        <Link to={`/resultados/${valorBusqueda}`}>
          <button type="submit" onClick={this.onSubmit}>Enter</button>
        </Link>
      </form>
    );
  }
}

export default SearchBar;
