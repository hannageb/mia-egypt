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
            <ul className="socials">
              <li><a href="https://www.instagram.com/miainegypt/"><img alt="insta" src="public/logos/instagram-logo.png"></img></a></li>
              <li><a href="https://www.facebook.com/miaegypt/"><img alt="fb" src="public/logos/facebook-logo.png"></img></a></li>
              <li><a href="https://www.youtube.com/channel/UCSmBrnaDLCS4yncyAieG5rw"><img alt="yt" src="public/logos/youtube-logo.png"></img></a></li>
            </ul>
          </div>
          <div className='col'>
           <img src="public/logos/long-logo.jpg" alt="long logo"></img>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
