import React from 'react';
import './footer.css';

/**
 * 
 *  FOREIGNER:
Adult: EGP 340\ Student: EGP 170

EGYPTIANS\ ARABS:
Adult: EGP 20 \ Student: EGP 10
 */

function Footer() {
  return (
    <footer>
      <div className="row">
          <div className='col'>
            <p className="hours">Mon-Thurs 9:00-5:00<br/>Fri 9:00-11:30 & 1:30-5:00</p>
          </div>
          <div className='col'>
            <p className="address">Port Said, Ghayt Al Adah,<br/>Al-Darb Al-Ahmar,Cairo<br/>Governorate 11638, Egypt</p>
          </div>
          <div className='col'>
           <img src="/mia-egypt/logos/long-logo.jpg" alt="long logo"></img>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
