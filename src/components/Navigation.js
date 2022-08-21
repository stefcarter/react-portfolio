import React from 'react';

function Navigation(){
    return(
        <nav className="navbar">
            <ul className="nav-links">
            <a 
                href="#intro-top"
                onClick={() => handlePageChange('Header')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                > About Me </a>
            </ul>
        </nav>
    )
}