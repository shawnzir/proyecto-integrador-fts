import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import "./NotFound.css"

const NotFound = () => {
  return (
    <React.Fragment>
      <Header/>
        <h1>404 - Página no encontrada</h1>
        <Link to="/" className='link'>Volver al inicio</Link>
    </React.Fragment>
  )
}

export default NotFound;