import React from 'react';
import './footer.css';
import {useTranslation} from "react-i18next";


function Footer() {
  const{t} = useTranslation();
  const add = t('address').split("|")
  return (
    <footer>
      <div className="row">
          <div className='col'>
            <p className="hours">{t('f_times').split("|")[0]}<br/>{t('f_times').split("|")[1]}</p>
          </div>
          <div className='col'>
            <p className="address">{add[0]}<br/>{add[1]}<br/>{add[2]}</p>
          </div>
          <div className='col'>
           <img src="/mia-egypt/logos/long-logo.jpg" alt="long logo"></img>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
