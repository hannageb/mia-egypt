import Navigation from '../nav-bar/nav-bar';
import Footer from '../nav-bar/footer';

function Map() {
  return (
    <div className="container">
      <Navigation />
      <img src="./map.jpg" alt="map"></img>
      <Footer/>
    </div>
  );
}

export default Map;