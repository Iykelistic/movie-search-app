import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
export default function Header() {

    
    return(
        <header className="badge">
            <p>Movies</p>
            <nav>
            
            <Link to='/movies' className="film">Movies</Link>
                   
            </nav>
        </header>
    
    
        
    )
}


