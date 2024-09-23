import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasCartel from "../../components/PeliculasCartel/PeliculasCartel";
import "./VerTodasCartelera.css";

class VerTodasCartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtro: "", 
        };
    }

    filtroUpdate = (e) => {
        this.setState({ filtro: e.target.value }); 
    };

    render() {
        const  filtro  = this.state.filtro; 

        return (
            <React.Fragment>
                <Header />

                <div className="form-home">
                    <input
                        type="text"
                        placeholder="Filtrar..."
                        value={filtro}
                        onChange={this.filtroUpdate}
                    />
                </div>

                <div className="movie-container">
                    <PeliculasCartel filtro={filtro} />
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default VerTodasCartelera;