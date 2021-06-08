import React, { Component } from 'react';

class Searchbar extends Component {
    
    constructor() {
        super();
        
        this.state = {
            searchQuery: "",
            value: ""
        }
    }

    searchAnime = (query) => {
        // Get the list of animes from the API


        // Filter list with animes containing the 'normalized substring'

        
        // Update the anime list acordingly
        // Posibly this update should be done in 'AnimeCardList' or 'App' component
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input 
                        className="form-control mr-sm-2 d-inline" 
                        style={{ width: '20rem' }} 
                        type="search" 
                        defaultValue={ this.state.searchQuery }
                        onChange={ this.handleChange }
                        placeholder="Search" 
                        aria-label="Search" 
                    />
                </form>
            </div>
        )
    }
}

export default Searchbar;
