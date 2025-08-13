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
        <div className="item-carousel">
          <h1 style={{textAlign: 'center', fontStyle: 'oblique'}}>Featured Items</h1>
          {page === 1 && ( 
            <>
            <div className="carousel-container">
              {featured.splice(0, 5).map((i: Item) => (
                <ItemCard key={i.id} item={i}/>
              ))}
            </div></>
          )}
          {page === 2 && (
             <div className="carousel-container">
              {featured.splice(5, 10).map((i: Item) => (
                <ItemCard key={i.id} item={i}/>
              ))}</div>
          )}
          <div className="page-btn">
            <button onClick={prevPage} disabled={page === 1}>⬅️</button>
            <button onClick={nextPage} disabled={page === 5}>➡️</button>
          </div>
        </div>
        {/* carousel of exhibits and workshops */}
        </div>
      <Footer /></>
  )
}
export default App;
