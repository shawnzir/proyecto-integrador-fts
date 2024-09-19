import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as heartFull } from '@fortawesome/free-solid-svg-icons'; 
import { faPlay as play } from '@fortawesome/free-solid-svg-icons';
import { faImdb as IMDB} from '@fortawesome/free-brands-svg-icons';
import "./DetallePelicula.css"

class DetallePelicula extends Component {
  constructor(){
    super();
    this.state={
      datos: null,
      favs: null,
      loading: true
    }
  }

  componentDidMount() {
    let id = parseInt(this.props.match.params.id);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`
      }
    };
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          datos: data,
          loading: false,
        },()=>{
          let item = JSON.parse(localStorage.getItem("favoritos"))
          if(item){
            let isFav = item.find(elem=>{
              return elem.id === this.state.datos.id?true:false;
            })
            if(isFav){
              this.setState({
                favs: true
              })
            }else{
              this.setState({
                favs: false
              })
            }
          }
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({loading: false});
      });
  }

  handleClick=()=>{
    let datos = this.state.datos;
    let obj = {
      id: datos.id,
      image: `https://image.tmdb.org/t/p/original${datos.poster_path}`
    }

    let item = JSON.parse(localStorage.getItem("favoritos"))

    if(this.state.favs){
      let filtered = item.filter(elem=>{
         return elem.id !== datos.id
      })
      localStorage.setItem("favoritos", JSON.stringify(filtered))
      this.setState({
        favs: false
      })
    }else{
      if(localStorage.getItem("favoritos")){
        let array = JSON.parse(localStorage.getItem("favoritos"))
        array.push(obj)
        localStorage.setItem("favoritos", JSON.stringify(array))
        this.setState({
          favs: true
        })
      }else{
        localStorage.setItem("favoritos", JSON.stringify([obj]))
        this.setState({
          favs: true
        })
      }
    }
    console.log(this.state.favs);
  }
  
  render() {
    let datos = this.state.datos;
    console.log(JSON.parse(localStorage.getItem("favoritos")));
    
    if (this.state.loading) {
      return (
        <Loader/>
      )
    }

    return (
      <div className='main-banner-p'>
        <Header />
        <div className='main-banner' style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${datos?datos.backdrop_path:null}")`}}>
          <div className='wrapper'>
            <h1 className='title-font'>{datos.original_title}</h1>
            <span className='info'>
              <p>{datos?datos.origin_country[0]:"..."}</p>
              <p>{datos?datos.runtime:"..."}min</p>
              <p>{datos?datos.release_date:"..."}</p>
              <p><FontAwesomeIcon icon={IMDB} size='lg' style={{color: "#FFD43B",}} /> {datos?datos.vote_average.toFixed(1):"..."} </p>
            </span>
            <button className='watch'><FontAwesomeIcon icon={play} /> Ver ahora </button>
            <button className='fav ' onClick={this.handleClick}>
              {this.state.favs ?
                <FontAwesomeIcon icon={heartFull} style={{ color: "#550dcf"}}/>
                :
                <FontAwesomeIcon icon={heartEmpty} style={{ color: "#550dcf"}}/>
              }
            </button>
            <p className='description'>{datos?datos.overview:""}</p>
            <span className='genres'>
              {datos?
                datos.genres.map(item=>(
                  <p key={item.id} className='font'>{item.name}</p>
                ))
                :""
              }
            </span>
          </div>
        </div>
      </div>
    )
  }
}
export default DetallePelicula;