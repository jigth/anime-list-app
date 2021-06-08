import React from 'react';
import Searchbar from './Searchbar';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">Super Anime List!</a>
                        <div className="navbar">
                            <Searchbar className="nav-item" />
                            <a href="/" className="text-light ml-5">
                                Animes 
                                <span className="badge badge-pill badge-warning ml-2">
                                    { props.listaAnimes.length }         
                                </span>
                            </a>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
