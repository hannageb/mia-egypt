import './App.css';
import Footer from './nav-bar/footer';
import "./i18n"
import {useTranslation} from "react-i18next";

function App() {
  const{t} = useTranslation();
  return (
    <>
      <div className="h-container">
        <div className="top-content">
          <img className="home-bkgd" src="/home-bkgd.jpg"/>
          <div className="text-container">
            <span style={{color: '#4B2C0F', fontSize: '20px', fontWeight: 'bold'}}>Our Mission:<br/></span><span style={{color: '#4B2C0F', fontSize: '20px', wordWrap: 'break-word'}}>{t('mission')}</span>
          </div>
          <div className="logo-container">
            <div className="logo-bkgd"></div>
            <img className="full-logo" src="/logos/full-logo.png" />
          </div>
        </div>
        <div className="placeholder">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
        {/* carousel of some featured items */}
        {/* carousel of exhibits and workshops */}
      </div>
      <Footer /></>
  );
}
export default App;
