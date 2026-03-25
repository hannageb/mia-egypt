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
import {ItemCard} from './pages/collections';
import { useState } from 'react';


function App() {
  const{t} = useTranslation();
  const [page, setPage] = useState<number>(1)
  const featured = entireCollection.filter((i: Item) => i.id === 4297 || i.id === 139 || i.id === 1508 || i.id === 3907 || i.id === 7203 || i.id === 15858 || i.id===12027)
  const nextPage = () => { if (page < 2) setPage(page +1);}
  const prevPage = () => { if (page > 1) setPage(page -1);}
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
        <div className="item-carousel">
            <div className="carousel-main-wrapper">
              <button onClick={prevPage} disabled={page === 1}>⬅️</button>
              <div className="carousel-container">
                {page === 1 && featured.slice(0, 5).map((i: Item) => (
                  <ItemCard key={i.id} item={i}/>
                ))}
                {page === 2 && featured.slice(5, 10).map((i: Item) => (
                  <ItemCard key={i.id} item={i}/>
                ))}
              </div>
              <button onClick={nextPage} disabled={page === 5}>➡️</button>
            </div>
        </div>
        {/* carousel of exhibits and workshops */}
         <div className="exhibit-carousel">
          <h1 style={{textAlign: 'center', fontStyle: 'oblique'}}>Upcoming Exhibits & Workshops</h1>
          <div className="carousel-container">
          </div>
          <div className="page-btn">
            <button>⬅️</button>
            <button>➡️</button>
          </div>
        </div>
        </div>
      <Footer /></>
  )
}
export default App;
