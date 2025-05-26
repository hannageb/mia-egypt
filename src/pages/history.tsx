import 'i18next';
import {useTranslation} from "react-i18next"
import Footer from '../nav-bar/footer';
import Navigation from '../nav-bar/nav-bar'
import './history.css' 

/**
 * formatting doesnt work in arabic
 * include photos
 * instead of right and left, make it just a straight line
 */


function History() {
    const {t} = useTranslation();
    return(
    <><Navigation/>
    <div className='container'>
        <div className="timeline">
            <div className="hist-container left">
                <div className="content">
                <h2>1869</h2>
                <p>{t("1869")}</p>
                </div>
            </div>
            <div className="hist-container right">
                <div className="content">
                <h2>1880</h2>
                <p>{t("1880")}</p>
                </div>
            </div>
            <div className="hist-container left">
                <div className="content">
                <h2>1892</h2>
                <p>A small building was erected in the courtyard and was named the Arab Museum or the House of Arab Antiquities with Franz Pasha as its director.</p>
                </div>
            </div>
            <div className="hist-container right">
                <div className="content">
                <h2>1903</h2>
                <p>The current building in Bab al-Khalek square was officially inaugurated by Khedive Abbas Helmi.</p>
                </div>
            </div>
            <div className="hist-container left">
                <div className="content">
                <h2>1951</h2>
                <p>The name was changed from House of Arab Antiquities to the Museum of Islamic Art. The artifacts were displayed in 23 halls classified on the basis of their historical period and the material of which they were made.</p>
                </div>
            </div>
            <div className="hist-container right">
                <div className="content">
                <h2>1983-84</h2>
                <p>The Museum went through an important period of expansion that saw the annexation of the piece of land adjacent to the Museum that was previously occupied by a gas station. The two extra halls were used to house the Museum's textile and carpet collection besides an internal storage area on the top floor, and a section for numismatics on the bottom one. The annexed plot of land was turned into a museum garden and a cafeteria.</p>
                </div>
            </div>
            <div className="hist-container left">
                <div className="content">
                <h2>2003</h2>
                <p>A new phase of comprehensive development was undertaken in 2003 which involved the construction of a new administrative building rising three stories high to house the staff offices, a library, a restoration department and a lecture hall. The display layout was completely modified. </p>
                </div>
            </div>
            <div className="hist-container right">
                <div className="content">
                <h2>2014</h2>
                <p>Unfortunately, on 24th January of 2014, the Museum was the victim of a vicious terrorist attack which has targeted the Cairo Police Headquarters that stands across the street from it. </p>
                </div>
            </div>
        </div>
        </div>
    <Footer /></>
    );
}

export default History;
