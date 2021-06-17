import React, { Component } from 'react';
import axios from 'axios';

class Searchbar extends Component {
    
    constructor() {
        super();
        
        this.state = {
            searchQuery: ""
        }
    }

    searchAnime = async (query) => {
        const animeEndpoint = process.env.REACT_APP_API_URL + '/animes';
        const { data: animes } = await axios.get(animeEndpoint);

        // Load all animes if query is empty.
        if ( query.trim() === '' || this.state.searchQuery.trim() === '') {
            this.props.updateAnimeCollection( animes );
            return;
        }

        // Load animes that match the query
        const filteredAnimes = animes.filter( anime => 
            anime.title.toLowerCase() .includes( query.toLowerCase() )
        );
        this.props.updateAnimeCollection( filteredAnimes );
    }

    handleSearch = (event) => {
        const { value } = event.target;
        this.setState({ searchQuery: value })
        this.searchAnime(value);
    }

    render() {
        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input 
                        id="search-input"
                        className="form-control mr-sm-2 d-inline" 
                        style={{ width: '20rem' }} 
                        type="search" 
                        defaultValue={ this.state.searchQuery }
                        onChange={ this.handleSearch }
                        placeholder="Search" 
                        aria-label="Search" 
                    />
                </form>
            </div>
        )
    }
}

export default Searchbar;
