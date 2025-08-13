import Footer from '../nav-bar/footer';
import './visit.css' 
//import "./i18n"
//import {useTranslation} from "react-i18next";

/* TICKET INFO ----------------
 *  FOREIGNER:
Adult: EGP 340\ Student: EGP 170
* EGYPTIANS\ ARABS:
Adult: EGP 20 \ Student: EGP 10

TRANSPORTATION ------------------
* Metro: Nearest Metro Station = Mohammed Naguib
* Busses: ###, Stop at Port Said St. 
* Cars: Nearest Parking Lot 
 */

function Visit() {
    
    //const{t} = useTranslation();
    return(
        <><div className="container">
            <div className="ticket-container">
                <h2>TICKETS</h2>
                <div id="a-ticket" className="entry-arab">
                    <div className="no-scale"></div>
                </div>
                <div id="f-ticket" className="entry-foreign">
                    <div className="no-scale"></div>
                </div>
            </div>
            <div className="vehicle-container">
                <div className="metro"></div>
                <div className="bus"></div>
                <div className="car"></div>
            </div>
        </div><Footer /></>
    );
}

export default Visit;
