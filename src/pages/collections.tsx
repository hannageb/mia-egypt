import './collections.css'
import Navigation from '../nav-bar/nav-bar'
import Footer from '../nav-bar/footer';
//import { useState } from 'react';

/**
 * 
 * all images are width: 245px, height: 300px 
 */
 
class Item{
    name: string = "";
    origin: string = "";
    centuryAD: number = 0;
    centuryAH: number = 0;
    hall: number = 0;
    tags: string[] = [];
    tagColor: string = "";
    img: string = ""; // path field to image
    desc: string = "";
    id: number = 0;

    constructor(name: string, origin: string, centuryAD: number, centuryAH: number, hall: number, tags: string[], tagColor: string, img: string, desc: string, id: number){
        this.name= name;
        this.origin = origin;
        this.centuryAD = centuryAD;
        this.centuryAH = centuryAH;
        this.hall = hall;
        this.tags = tags;
        this.tagColor = tagColor;
        this.img = img;
        this.desc = desc;
        this.id = id;
    }
}

function AddItem(name: string, origin: string, centuryAD: number, centuryAH: number, hall: number, tags: string[], tagColor: string,img: string, desc: string, id: number){
    const item = new Item(name, origin, centuryAD, centuryAH, hall, tags, tagColor, img, desc, id);
   //const [popup, setPopup] = useState(false);

    return (
        <><div className="item-container">
            {item.tags.map((tag: string) => (
                <p className="itm-tag" style={{padding: '10px', borderRadius: '30px', backgroundColor: item.tagColor, justifyContent: 'center'}}>{tag}</p>
            ))}
            <img className="itm-img" src={item.img} alt={item.name}></img>
            <div className="popup" style={{width: '245px', padding: '4px'}}>
                <h2 className="itm-title">{item.name}</h2>
                <p>{item.origin}</p>
                <p>{item.centuryAD} AD / {item.centuryAH} AH</p>
            </div>
        </div>
        </>
    )
}

/*
function filter(){



    return (

    
    )

} 
*/


function Collections(){
    const candlestick = AddItem("Candlestick", "Egypt", 15, 9, 9, ["Mamluk", "Metals"], "#a08f76", "/mia-egypt/items/mamluk-candlestick.jpg", "This candlestick bears inscriptions referring to the mamluk sultan Qāytbāy 872-901AH/1467-1495AD, and was made for the holy shrine of the prophet Muḥammad (pbuh) in Medina. It is one of those candlesticks characterized by a tapering cylindrical base, a long neck and a conical candle groove. The body and neck are decorated with an epigraphic band mentioning the name and titles of sultan Qāytbāy. It should be noticed that the first letters of the words take the shape of rising criss-crossing flames, providing them with a sense of livelihood and mobility. Groups of epigraphic blazons of sultan Qāytbāy intermingle with the text. The central disk in the body bears an inscription which says :“this was endowed to the holly shrine by our lord, the sultan al-Malik al-Ashraf Abul-Nasr Qāytbāy in the year 880AH in the holy month of Ramadan", 4297)

    return(
        <>
        <Navigation />
        <h4 style={{padding: '10px'}}>Our Collections</h4>
        <div className="container">
            <div className="row">
                <div className="search">
                </div>
            </div>
            <div className="col">
                {/*<Filter/>*/}
            </div>
            <div className="col">
                {candlestick}
            </div>
        </div>
        <Footer/></>
    );
}

export default Collections
