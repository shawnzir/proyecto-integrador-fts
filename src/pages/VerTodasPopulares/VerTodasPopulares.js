import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";

class VerTodasPopulares extends Component {
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
        const { filtro } = this.state; 

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
                    <PeliculasPopulares filtro={filtro} />
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default VerTodasPopulares;
