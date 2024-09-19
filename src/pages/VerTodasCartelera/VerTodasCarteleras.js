import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasCartel from "../../components/PeliculasCartel/PeliculasCartel";

function VerTodasCartelera() {
    return (
        <React.Fragment>
            <Header />
            <div>
                <h1 className="title-font">Ver todas las peliculas en cartelera</h1>
                <PeliculasCartel/>
            </div>
            <Footer />
        </React.Fragment >
    );
}

export default VerTodasCartelera