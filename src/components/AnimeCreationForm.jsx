import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            trailer_url: "",
            title: "",
            status: "Finished Airing",
            image_url: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log("Cambio!")
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAnime(this.state);
        console.log("Iniciando");
        this.setState({
            trailer_url: "",
            title: "",
            status: "Finished Airing",
            image_url: ""
        });
        console.log("OK")
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3 className="text-success text-center">Adicionar Anime</h3>
                </div>
                <div className="card-body">
                        <form method="post" onSubmit={ this.handleSubmit }>
                            {/* Titulo del Anime */}
                            <div className="form-group">
                                <label htmlFor="url">
                                    Titulo:
                                </label>
                                <input 
                                    id="title"
                                    className="form-control"
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    placeholder="Ej: Dragon Ball"
                                />
                            </div>

                            {/* Estado actual del anime */}
                            <div className="form-group">
                                <label htmlFor="status-select">
                                    Estado Actual:
                                </label>
                                <select 
                                        id="status-select" 
                                        className="form-control"
                                        name="status" 
                                        value={this.state.status}
                                        onChange={this.handleChange}
                                    >
                                    <option>Finished Airing</option>
                                    <option>In Broadcast</option>
                                </select>
                                
                            </div>

                            {/* URL de la imagen*/}
                            <div className="form-group">
                                <label htmlFor="url">
                                    Url de la imagen:
                                </label>
                                <input 
                                    id="image_url"
                                    className="form-control"
                                    type="text"
                                    name="image_url"
                                    value={this.state.image_url}
                                    onChange={this.handleChange}
                                    placeholder="Ej: https://website.com/myimage.png"
                                />
                            </div>

                            {/* Trailer URL */}
                            <div className="form-group">
                                <label htmlFor="url">
                                    Url del trailer:
                                </label>
                                <input 
                                    id="trailer_url"
                                    className="form-control"
                                    type="text"
                                    name="trailer_url"
                                    value={this.state.trailer_url}
                                    onChange={this.handleChange}
                                    placeholder="Ej: https://www.youtube.com/watch?v=FD08hv-7QQo"
                                />
                            </div>

                            <input 
                                type="submit"
                                name="submit"
                                value="Crear"
                                className="btn btn-primary btn-block" 
                            />
                        </form>
                </div>
            </div>
        );
    }
}

export default Search;