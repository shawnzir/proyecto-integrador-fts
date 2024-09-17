import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./NotFound.css"

const NotFound = () => {
  return (
    <React.Fragment className="not-found">
      <Header/>
        <h1 className='title-font'>404 - Página no encontrada</h1>
        <Link to="/" className='font'>Volver al inicio</Link>
      <Footer/>
    </React.Fragment>
  )
}

export default NotFound;