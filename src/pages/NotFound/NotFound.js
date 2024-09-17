import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <Header/>
        <div className="notfound-menu">
        <h1 className='title-font'>404 - Página no encontrada</h1>
        <Link to="/" className='font notfound-link'>Volver al inicio</Link>
        </div>
      <Footer/>
    </div>
  )
}

export default NotFound;