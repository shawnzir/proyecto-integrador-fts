import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";

function VerTodasPopulares () {
    return  (
        <React.Fragment>
            <Header/>
            <div>
                <h1 className="title-font">Ver todas las peliculas populares</h1>
                <PeliculasPopulares/>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default VerTodasPopulares