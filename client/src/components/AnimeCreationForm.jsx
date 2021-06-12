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
        console.log(`Attribute ${name} has changed its value to: ${value}`)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAnime(this.state);
        this.setState({
            trailer_url: "",
            title: "",
            status: "Finished Airing",
            image_url: ""
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3 className="text-primary text-center">Add New Anime</h3>
                </div>
                <div className="card-body">
                        <form method="post" onSubmit={ this.handleSubmit }>
                            {/* Anime Title */}
                            <div className="form-group">
                                <label htmlFor="url">
                                    Title:
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

                            {/* Anime Status */}
                            <div className="form-group">
                                <label htmlFor="status-select">
                                    Status:
                                </label>
                                <select 
                                        id="status-select" 
                                        className="form-control"
                                        name="status" 
                                        value={this.state.status}
                                        onChange={this.handleChange}
                                    >
                                    <option>Finished Airing</option>
                                    <option>Currently Airing</option>
                                </select>
                                
                            </div>

                            {/* Image URL */}
                            <div className="form-group">
                                <label htmlFor="url">
                                    Image URL:
                                </label>
                                <input 
                                    id="image_url"
                                    className="form-control"
                                    type="text"
                                    name="image_url"
                                    value={this.state.image_url}
                                    onChange={this.handleChange}
                                    placeholder="https://imgur.com/gallery/2xfG6"
                                />
                            </div>

                            {/* Trailer URL */}
                            <div className="form-group">
                                <label htmlFor="url">
                                    Trailer URL:
                                </label>
                                <input 
                                    id="trailer_url"
                                    className="form-control"
                                    type="text"
                                    name="trailer_url"
                                    value={this.state.trailer_url}
                                    onChange={this.handleChange}
                                    placeholder="https://www.youtube.com/watch?v=FD08hv-7QQo"
                                />
                            </div>

                            <input 
                                type="submit"
                                name="submit"
                                value="Create"
                                className="btn btn-primary btn-block" 
                            />
                        </form>
                </div>
            </div>
        );
    }
}

export default Search;
