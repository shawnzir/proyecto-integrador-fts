import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorBusqueda: "" // El usuario no escribió
        }
    }

    evitarSubmit = (event) => {
        event.preventDefault();

    }

    controlarCambios = (event) => {
        this.setState(
            {
                valorBusqueda: event.target.value
            }
        );
    }

    render() {
        {/* Formulario de búsqueda */ }

        <form onSubmit={(event) => this.evitarSubmit(event)}>
            <label> Buscar: </label>
            <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valorBusqueda} />
        </form>
        
        {/* Hasta acá */ }
    }
}

export default SearchBar;