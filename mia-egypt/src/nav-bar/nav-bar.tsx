import React from 'react';
import './nav-bar.css';

/* reference: https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive */

function Navigation() {
  return (
    <header>
        <img className="logo" src="./assets/icon.png" alt="logo"/>
        <nav>
            <ul className="nav_links">
                <li><a href="collections.tsx">Collections</a></li>
                <li><a href="map.tsx">Map</a></li>
                <li><a href="map.tsx">History</a></li>
            </ul>
        </nav>
        <a className="contact" href="map.tsx"><button>Contact</button></a>
        <a className="lang" href="map.tsx"><button>🌐</button></a>
    </header>    
  );
}

export default Navigation;
