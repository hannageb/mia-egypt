import React, { useState }  from 'react';
import './nav-bar.css';
import { Form } from 'react-bootstrap';

/* reference: https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive */

function Navigation() {
  const [language, setLanguage] = useState<string>("English")
  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value)
  }
  
  return (
    <header>
      <img className="logo" src="./assets/icon.png" alt="logo" />
      <nav>
        <ul className="nav_links">
          <li><a href="collections.tsx">Collections</a></li>
          <li><a href="map.tsx">Map</a></li>
          <li><a href="history.tsx">History</a></li>
        </ul>
      </nav>
      <a className="contact" href="contact.tsx"><button>Contact</button></a>
      <Form.Group>
        <Form.Select value={language} onChange={changeLanguage}>
          <option value="placeholder" disabled> 🌐 </option>
          <option value="english">English</option>
          <option value="arabic">عربي</option>
          <option value="french">French</option>
        </Form.Select>
      </Form.Group>
    </header>
  );
}

export default Navigation;
