import React, { Component } from "react";


class Favoritos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: null,
            showMore: false,
            favs: null,
            loading: true
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`
            }
        };
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US`, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    datos: data,
                    loading: false,
                }, () => {
                    let item = JSON.parse(localStorage.getItem("favoritos"))
                    if (item) {
                        let isFav = item.find(elem => {
                            return elem.id == this.state.datos.id ? true : false;
                        })
                        if (isFav) {
                            this.setState({
                                favs: true
                            })
                        } else {
                            this.setState({
                                favs: false
                            })
                        }
                    }
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({ loading: false });
            });
    }

    handleClick = () => {
        let datos = this.state.datos;
        let obj = {
            id: datos.id,
            image: `https://image.tmdb.org/t/p/original${datos.poster_path}`
        }

        let item = JSON.parse(localStorage.getItem("favoritos"))

        if (this.state.favs) {
            let filtered = item.filter(elem => {
                return elem.id != datos.id
            })
            localStorage.setItem("favoritos", JSON.stringify(filtered))
            this.setState({
                favs: false
            })
        } else {
            if (localStorage.getItem("favoritos")) {
                let array = JSON.parse(localStorage.getItem("favoritos"))
                array.push(obj)
                localStorage.setItem("favoritos", JSON.stringify(array))
                this.setState({
                    favs: true
                })
            } else {
                localStorage.setItem("favoritos", JSON.stringify([obj]))
                this.setState({
                    favs: true
                })
            }
        }
        console.log(this.state.favs);
    }
}

export default Favoritos;