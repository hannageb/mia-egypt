import './collections.css'
import Navigation from '../nav-bar/nav-bar'
import Footer from '../nav-bar/footer';
import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {Item, entireCollection} from './item-card'
import "../i18n"

/**
 * 
 * all images are width: 245px, height: 300px 
 */
 
function ItemCard({item}: {item: Item}){
    const {t} = useTranslation();
    const [visible, setVisiblity] = useState<boolean>(false);
    const popup = visible ? <div className="popup">
            <h2 className="itm-title">{t(item.name.toLowerCase().split(" ").join("_"))}</h2>
            <p>{t(item.origin === "Egypt/Syria" ? "egypt_syria" : item.origin.toLowerCase())}</p>
            <p>{t("century")}{item.centuryAD}{t("ad")} / {item.centuryAH}{t("ah")}</p>
            <p>{t("Hall")} {item.hall}</p>
        </div> : <div></div>
        
        
        return(
        <div className="item-container">
                {item.tags.map((tag: string) => (
                    <p className="itm-tag" style={{marginRight: '7px', padding: '10px', borderRadius: '30px', backgroundColor: item.tagColor, display: 'inline-block'}}>{t(tag === "Mamluk-Ottoman" ? "mamlukOttoman_tag" : tag === "Ottoman-Muhammad Ali" ? "ottomanMuhammadAliـtag" : tag.toLowerCase())}</p>
                ))}
                <img className="itm-img" src={item.img} alt={item.name} onMouseEnter={() => setVisiblity(true)} onMouseLeave={() => setVisiblity(false)}></img>
                {popup}
            </div>
    )
}
/* Search bar from
 * https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js
 */

function Collections(){
    const {t} = useTranslation();
    const location = useLocation();
    const [visibleItems, setVisibleItems] = useState<Item[]>(entireCollection)
    const [searchInput, setSearchInput] = useState<string>("");
    const [filters, setFilters] = useState<string[]>([]);

    useEffect(() => {
        if (location.state?.filters) {
            setFilters(location.state.filters);
        }
    }, [location.state]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        if (event.target.value === ""){
            setSearchInput("")
        }
    }

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!searchInput){
            setVisibleItems(entireCollection)
        }
        if (e.key === 'Enter') {
            let filteredCollection = entireCollection.filter((item: Item) => item.visible = (item.tags.some(tag => tag.toLowerCase().includes(searchInput.toLowerCase())) || item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.desc.toLowerCase().includes(searchInput.toLowerCase())))
            setVisibleItems(filteredCollection)
        }
    }

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters((prevFilters) => {
            const newFilters = event.target.checked ? [...prevFilters, event.target.value] : prevFilters.filter((f) => f !== event.target.value);
            return newFilters;
        })
    }

    useEffect(() => {
        let filtered: Item[] = entireCollection
        if (filters){
            filtered = entireCollection.filter((i:Item) => filters.some((f) => i.tags.some((tag) => tag.toLowerCase().includes(f.toLowerCase()))))
        }
        if (searchInput.trim() !== ""){
            filtered = entireCollection.filter((item: Item) => item.visible = (item.tags.some(tag => tag.toLowerCase().includes(searchInput.toLowerCase())) || item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.desc.toLowerCase().includes(searchInput.toLowerCase())))
        } 
        if (!searchInput.trim() || !filters){
            filtered = entireCollection;
        }
        setVisibleItems(filtered);
    }, [filters, searchInput])

    return(
        <>
        <Navigation />
        <div className="search">
            <div className="container" style={{justifyContent: 'center'}}>
                <input type="text" placeholder={t("search")} onChange={handleChange} onKeyDown={handleSearch} value={searchInput} className='search-bar'/>
            </div>
        </div>
        <div className="container">
            <div className="column">
                <div>
                    <h4>{t("time_period")}</h4>
                    <Form.Group className="time-periods">
                        <Form.Check label={t("umayyad_abbasid")} type="checkbox" value="Umayyad-Ayyubid"  onChange={handleFilter}/>
                        <Form.Check label={t("fatimid")} type="checkbox" value="Fatimid"  onChange={handleFilter}/>
                        <Form.Check label={t("mamluk")} type="checkbox" value="Mamluk"  onChange={handleFilter}/>
                        <Form.Check label={t("mamlukOttoman_tag")} type="checkbox" value="Mamluk-Ottoman"  onChange={handleFilter}/>
                        <Form.Check label={t("ottoman")} type="checkbox" value="Ottoman" onChange={handleFilter}/>
                        <Form.Check label={("ottomanMuhammadAliـtag")} type="checkbox" value="Ottoman-Muhammad Ali" onChange={handleFilter}/>
                    </Form.Group>
                    <h4>---</h4>
                    <Form.Group className="types">
                        <Form.Check label={t("ceramics")} type="checkbox" value="Ceramics"   onChange={handleFilter}/>
                        <Form.Check label={t("coins")} type="checkbox" value="Coins"  onChange={handleFilter}/>
                        <Form.Check label={t("glass")} type="checkbox" value="Glass"  onChange={handleFilter}/>
                        <Form.Check label={t("ivory")} type="checkbox" value="Ivory"  onChange={handleFilter}/>
                        <Form.Check label={t("jewelry")} type="checkbox" value="Jewelry"  onChange={handleFilter}/>
                        <Form.Check label={t("manuscripts")} type="checkbox" value="Manuscripts"  onChange={handleFilter}/>
                        <Form.Check label={t("metals")} type="checkbox" value="Metals"  onChange={handleFilter}/>
                        <Form.Check label={t("stones")} type="checkbox" value="Stones"  onChange={handleFilter}/>
                        <Form.Check label={t("textiles" )}type="checkbox" value="Textiles"  onChange={handleFilter}/>
                        <Form.Check label={t("weapons")} type="checkbox" value="Weapons"  onChange={handleFilter}/>
                        <Form.Check label={t("wood")} type="checkbox" value="Wood"  onChange={handleFilter}/>
                    </Form.Group>
                 </div>
            </div>
            <div className="column2">
                <div className="item-grid">
                    {visibleItems.map((item) => (
                            <ItemCard key={item.id} item={item}/>
                    ))}
                    
                </div>
            </div>
        </div>
        <Footer/></>
    );
}

export default Collections
