import Navigation from '../nav-bar/nav-bar';
import Footer from '../nav-bar/footer';
import map from "../assets/map.jpg";

function Map() {
  console.log("map page!")
  return (
    <>
      <Navigation />
      <img src={map} alt="map"/>
      <Footer />
    </>
  );
}

export default Map;