import React from 'react';
import "./Favoritos.css";
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

export default function Favoritos() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos"))
  return (
    <div>
      <Header />
      <div className='favoritos'>
        <h1 className='title-font'>Mi lista</h1>
        <div className='wrapper'>
          {favoritos ?
            favoritos.map(item => (
              <div className='movie-card-favs' key={item.id}>
                <Link to={`/pelicula/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original${item.image}`} alt="" />
                </Link>
              </div>
            ))
            :
            <p>No tienes ninguna película en favoritos</p>
          }
        </div>
      </div>
    </div>
  )
}
