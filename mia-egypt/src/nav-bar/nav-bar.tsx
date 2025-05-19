import React, { useState }  from 'react';
import './nav-bar.css';
import { Form } from 'react-bootstrap';
import icon from '/Users/hannageb/passion-projects/mia-egypt/src/assets/icon.png';

/* reference for navigation bar: 
* https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive
*/

function Navigation() {
  const [language, setLanguage] = useState<string>("English")
  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value)
  }
  
  return (
    <header>
      <a href="/"><img src={icon} alt="icon" className="icon"/></a>
      <nav>
        <ul className="nav_links">
          <li><a href="collections.tsx">Collections</a></li>
          <li><a href="map.tsx">Map</a></li>
          <li><a href="history.tsx">History</a></li>
          <li><a href="contact.tsx">Contact</a></li>
        </ul>
      </nav>
      <Form.Group>
        <Form.Select value={language} onChange={changeLanguage}>
          <option value="placeholder" disabled> 🌐 </option>
          <option value="english">English</option>
          <option value="arabic">عربي</option>
          <option value="french">Français</option>
        </Form.Select>
      </Form.Group>
    </header>
  );
}

export default Navigation;
