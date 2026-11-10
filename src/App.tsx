/**
 * Home page:
 * [X] Mission
 * [] Carousel of workshops/exhibits 
 * [] Carousel of featured items 
 */


import './App.css';
import Footer from './nav-bar/footer';
import "./i18n"
import {useTranslation} from "react-i18next";
import { entireCollection, Item } from './pages/item-card';
import Carousel from 'react-bootstrap/Carousel';
import {ItemCard} from './pages/collections';
import coloring from '/workshops/coloring-motifs.jpg';
import ceramics from '/workshops/ceramics-exhibit.jpg';
import photography from '/workshops/photography-course.jpg';


function App() {
  const{t} = useTranslation();
  const featured = entireCollection.filter((i: Item) => i.id === 4297 || i.id === 139 || i.id === 1508 || i.id === 3907 || i.id === 7203 || i.id === 15858 || i.id===12027)
  return (
    <>
      <div className="h-container">
        <div className="top-content">
          <img className="home-bkgd" src="home-bkgd.jpg"/>
          <div className="text-container">
            <span style={{color: '#4B2C0F', fontSize: '20px', fontWeight: 'bold'}}>Our Mission:<br/></span><span style={{color: '#4B2C0F', fontSize: '20px', wordWrap: 'break-word'}}>{t('mission')}</span>
          </div>
          <div className="logo-container">
            <div className="logo-bkgd"></div>
            <img className="full-logo" src="logos/full-logo.png" />
          </div>
        </div>
        <div className="about-MIA">
          <p>The Museum of Islamic Art in Cairo is considered to be the largest Islamic Art museum in the world, housing over 100,000 artifacts covering all branches of Islamic Art from the different periods of Islamic history. Its collection is characterized by both breadth and depth in quantity and quality of coverage, which made it a beacon of Islamic art and civilization throughout its history. It also made it a fountain of knowledge for researchers, historians and visitors from all walks of life, who are interested in delving into the intricacies of Islamic sciences such as Medicine, Engineering and Astronomy. What made this possible is the museum's rich collection of manuscripts and artifacts associated with such fields as Medicine, Surgery, Horticulture and Astronomical instruments like astrolabs, compasses and geographical globes. In the domain of daily life, the collection includes metallic, glass and porcelain utensils, as well as jewelry, weapons, wood and ivory objects, textiles, carpets, etc. The Museum also holds some very rare and unique pieces which demonstrate vividly the level of excellence and exactitude attained by Muslim artisans in their workmanship. Since it's rennovation and expansion in 2014, the Museum has markedly increased the number of displayed artifacts in order to serve its raison d'être while using the state-of-the-Art in interpretive technologies to maximize the visitors' enjoyment experience and their appreciation of the Museum's mission and vision.</p>
        </div>
        {/* carousel of some featured items */}
        <h1 style={{textAlign: 'center', fontStyle: 'oblique'}}>Featured Items</h1>
        <Carousel style={{display:'flex'}}>
            <Carousel.Item>
              <div className="featured-items">
                {featured.slice(0, 5).map((i: Item) => (
                  <ItemCard key={i.id} item={i}/>
                ))}
              </div>
            </Carousel.Item>
            {/*<Carousel.Item>
              <div className="featured-items">
                {featured.slice(5, 10).map((i: Item) => (
                  <ItemCard key={i.id} item={i}/>
                ))}
              </div>
            </Carousel.Item> */}
        </Carousel>
        {/* carousel of exhibits and workshops */}
        <h1 style={{textAlign: 'center', fontStyle: 'oblique'}}>Exhibits & Workshops</h1>
         <Carousel>
            <Carousel.Item>
              <div className="exhibits">
                <img className="d-block mx-auto" src={coloring} alt="coloring-workshop" style={{ width: '335px', height: '335px' }} />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="exhibits">
                <img className="d-block mx-auto" src={photography} alt="photography-workshop" style={{ width: '335px', height: '335px' }}/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="exhibits">
                <img className="d-block mx-auto" src={ceramics} alt="ceramics-exhibit" style={{ width: '335px', height: '335px' }}/>
              </div>
            </Carousel.Item>
        </Carousel>
        </div>
      <Footer /></>
  )
}
export default App;
