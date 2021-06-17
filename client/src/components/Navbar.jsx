import React from 'react';
import Searchbar from './Searchbar';
import logo from '../assets/images/ryu.png';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img 
                            src={ logo }
                            className="mr-2"
                            width="40px"
                            alt="ryu.png"
                        />
                        Jigth's Anime List App
                    </a>
                    <div className="navbar">
                        <Searchbar 
                            className="nav-item" 
                            updateAnimeCollection={ props.updateAnimeCollection } 
                        />
                        <a href="/" className="text-light ml-5">
                            Animes 
                            <span className="badge badge-pill badge-warning ml-2">
                                { props.animeList.length }         
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
