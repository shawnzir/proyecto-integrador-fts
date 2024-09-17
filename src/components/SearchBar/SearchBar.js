import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorBusqueda: "" // Valor que escriba el usuario en el buscador
    };
  }

  evitarSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.valorBusqueda);
  };

  controlarCambios = (event) => {
    this.setState({ valorBusqueda: event.target.value });
  };

  render() {
    return (
      <form className="form-home" onSubmit={this.evitarSubmit}>
        <input
          type="text"
          onChange={this.controlarCambios}
          placeholder="Buscar"
          value={this.state.valorBusqueda}
        />
        <button type="submit">Enter</button>
      </form>
    );
  }
}

export default SearchBar;
