import React from 'react';
import './footer.css';
import facebook from '/Users/hannageb/passion-projects/mia-egypt/src/assets/facebook-logo.png';
import insta from '/Users/hannageb/passion-projects/mia-egypt/src/assets/instagram-logo.png';



function Footer() {
  return (
    <footer>
      <div className="row">
          <div className='col'>
            <p className="hours">Hours:<br/>Mon-Thurs 9:00-5:00<br/>Fri 9:00-11:30 & 1:30-5:00</p>
          </div>
          <div className='col'>
            <ul className="socials">
              <li><a href="https://www.instagram.com/miainegypt/"><img className="insta" src={insta} alt="instagram"/></a></li>
              <li><a href="https://www.facebook.com/miaegypt/"><img className="facebook" src={facebook} alt="facebook"/></a></li>
            </ul>
          </div>
          <div className='col'>
            <p className="address">Port Said, Ghayt Al Adah,<br/>Al-Darb Al-Ahmar,Cairo<br/>Governorate 11638, Egypt</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
