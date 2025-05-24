import Footer from '../nav-bar/footer';
import Navigation from '../nav-bar/nav-bar'
import './visit.css' 
//import "./i18n"
//import {useTranslation} from "react-i18next";

/* TICKET INFO ----------------
 *  FOREIGNER:
Adult: EGP 340\ Student: EGP 170
* EGYPTIANS\ ARABS:
Adult: EGP 20 \ Student: EGP 10
 */

function Visit() {
    //const{t} = useTranslation();
    return(
        <><Navigation />
        <div className="v-container">
            <div className="bus"></div>
            <div className="car"></div>
            <div className="metro"></div>
        </div>
        <Footer /></>
    );
}

export default Visit;
