import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function VerTodasPopulares () {
    return  (
        <React.Fragment>
            <Header/>
            <div>
                <h1>Ver todas las peliculas populares</h1>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default VerTodasPopulares