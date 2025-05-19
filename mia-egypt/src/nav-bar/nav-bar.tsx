import React, { useState }  from 'react';
import './nav-bar.css';
import { Form } from 'react-bootstrap';

/* reference for navigation bar: 
* https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive
*/

function Navigation() {
  const [language, setLanguage] = useState<string>("English")
  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value)
  }
  
  return (
    <><header>
      <a href="/"><img className="logo" src="./assets/icon.png" alt="logo" /></a>
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
          <option value="french">French</option>
        </Form.Select>
      </Form.Group>
    </header>
    <footer>
      <div className="row">
          <div className='col'>
            <p className="hours">Hours:<br/>Mon-Thurs 9:00-5:00<br/>Fri 9:00-11:30 & 1:30-5:00</p>
          </div>
          <div className='col'>
            <ul className="socials">
              <li><a href="https://www.instagram.com/miainegypt/"><img className="insta" src='./assets/instagram-logo.png' alt="instagram"/></a></li>
              <li><a href="https://www.facebook.com/miaegypt/"><img className="facebook" src='./assets/facebook-logo.png' alt="facebook"/></a></li>
            </ul>
          </div>
          <div className='col'>
            <p className="address">Port Said, Ghayt Al Adah,<br/>Al-Darb Al-Ahmar,Cairo<br/>Governorate 11638, Egypt</p>
          </div>
      </div>
    </footer></>
  );
}

export default Navigation;
