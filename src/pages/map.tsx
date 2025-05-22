import Navigation from '../nav-bar/nav-bar';
import Footer from '../nav-bar/footer';
import './map.css';
import { Link } from 'react-router-dom';


function Map() {
  
  return (
    <><Navigation /><div className="container">
      <img src="/mia-egypt/map.jpg" alt="map"></img>
      <span className="umayyad-abbasid"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '11px' }} state={{ filters: ["Umayyad-Abbasid"] }}>Umayyad-Abbasid</Link></span>
      <span className="fatimid"><Link to="/collections" state={{ filters: ["Fatimid"] }}>Fatimids</Link></span>
      <span className="ayyubid"><Link to="/collections"state={{ filters: ["Ayyubid"] }}>Ayyubids</Link></span>
      <span className="mamluk"><Link to="/collections"state={{ filters: ["Mamluk"] }}>Mamluks</Link></span>
      <span className="mamluk-ottoman"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '12px' }}state={{ filters: ["Mamluk-Ottoman"] }}>Mamluk-Ottoman</Link></span>
      <span className="ottoman"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '11px' }}state={{ filters: ["Ottoman"] }}>Ottomans</Link></span>
      <span className="ottoman2"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '11px' }}state={{ filters: ["Ottoman"] }}>Ottomans</Link></span>
      <span className="medicine"><Link to="/collections" style={{ fontSize: '12px' }}>Medicine</Link></span>
      <span className="nature"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '12px' }}>Water & Gardens</Link></span>
      <span className="calligraphy"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '12px', color: 'black' }}>Calligraphy</Link></span>
    </div><Footer /></>
  );
}

export default Map;