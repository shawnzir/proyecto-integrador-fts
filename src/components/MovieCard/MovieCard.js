import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Favs from '../Favs/Favs';
import './MovieCard.css';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        }
    }
    toggleShowMore = () => {
        if (this.state.showMore === false) {
            this.setState({
                showMore: true
            })
        } else {
            this.setState({
                showMore: false
            })
        }
    }

    render() {
        const { title, image, description, movieId } = this.props
        return (
            <div className='movie-card'>
                <Link to={`/pelicula/${movieId}`}>
                    <img src={`https://image.tmdb.org/t/p/w200${image}`} alt="img" />
                </Link>
                <h2 className='title-font'>{title}</h2>
                <span>
                    <p onClick={() => this.toggleShowMore()}>
                        {this.state.showMore ? "Ocultar descripción" : "Ver descripción"}
                    </p>
                    {this.state.showMore && <p>{description}</p>}
                    <Favs movie={{ id: movieId, title, poster_path: image }} />
                </span>
            </div>
        )
    }
}

export default MovieCard;