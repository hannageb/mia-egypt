import './collections.css'
import Footer from '../nav-bar/footer';
import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
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
    let popup = <div></div>
    if (visible){
        popup = (
        <div className="popup">
            <h2 className="itm-title">{t(item.name.toLowerCase().split(" ").join("_"))}</h2>
            <p>{t(item.origin === "Egypt/Syria" ? "egypt_syria" : item.origin.toLowerCase())}</p>
            <p>{t("century")}{item.centuryAD}{t("ad")} / {item.centuryAH}{t("ah")}</p>
            <p>{t("Hall")} {item.hall}</p>
        </div>)
    }      
        
        return(
            <div className="item-container">
                {item.tags.map((tag: string) => (
                    <p key={tag} className="itm-tag" style={{ marginRight: '7px', padding: '10px', borderRadius: '30px', backgroundColor: item.tagColor, display: 'inline-block' }}>{tag === "Mamluk-Ottoman" ? t("mamlukOttoman_tag") : tag === "Ottoman-Muhammad Ali" ? t("ottomanMuhammadAli_tag") : t(tag.toLowerCase())}</p>))}
                    <img className="itm-img" src={item.img} alt={item.name} onMouseEnter={() => setVisiblity(true)} onMouseLeave={() => setVisiblity(false)}></img>
                {popup}
            </div>
    );
}
/* Search bar from
 * https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js
 */

/**
 * search bar only works in English
 */

function Collections(){
    console.log("Collections rendered!")
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

    /**
     * filters based on the search 
     */
    const handleSearch = () => {
        if (!searchInput){
            setVisibleItems(entireCollection)
        }
        const filteredCollection = entireCollection.filter((item: Item) => item.visible = (item.tags.some(tag => tag.toLowerCase().includes(searchInput.toLowerCase())) || item.name.toLowerCase().includes(searchInput.toLowerCase())|| item.origin.toLowerCase().includes(searchInput.toLowerCase())));
        setVisibleItems(filteredCollection)
    }

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`Searching for... ${event.target.value}`)
        setFilters((prevFilters) => 
            event.target.checked ? [...prevFilters, event.target.value] : prevFilters.filter((f) => f !== event.target.value));
    }

    useEffect(() => {
        let filtered: Item[] = entireCollection

        if (!searchInput && !filters.length){
            setVisibleItems(entireCollection)
            return;
        }
        if (filters.length){
            filtered = entireCollection.filter((i:Item) => filters.some((f) => i.tags.some((tag) => tag.toLowerCase() === (f.toLowerCase()))))
        }
        if (searchInput.trim() !== ""){
            filtered = entireCollection.filter((item: Item) => item.visible = (item.tags.some(tag => tag.toLowerCase().startsWith(searchInput.toLowerCase())) || item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.origin.toLowerCase().includes(searchInput.toLowerCase())))
        } 
        setVisibleItems(filtered);
    }, [filters, searchInput])

    return(
        <>
        <div className="search">
            <div className="container" style={{justifyContent: 'center'}}>
                <input type="text" placeholder={t("search")} onChange={handleChange} onKeyDown={handleSearch} value={searchInput} className='search-bar'/>
                <div className="dropdown">
                <button className="dropbtn">Filter by Time Period</button>
                <div className="dropdown-content">
                    <Form.Group className="time-periods">
                        <Form.Check label={t("umayyad_abbasid")} type="checkbox" value="Umayyad-Ayyubid"  onChange={handleFilter}/>
                        <Form.Check label={t("fatimid")} type="checkbox" value="Fatimid"  onChange={handleFilter}/>
                        <Form.Check label={t("mamluk")} type="checkbox" value="Mamluk"  onChange={handleFilter}/>
                        <Form.Check label={t("mamlukOttoman_tag")} type="checkbox" value="Mamluk-Ottoman"  onChange={handleFilter}/>
                        <Form.Check label={t("ottoman")} type="checkbox" value="Ottoman" onChange={handleFilter}/>
                        <Form.Check label={t("ottomanMuhammadAli_tag")} type="checkbox" value="Ottoman-Muhammad Ali" onChange={handleFilter}/>
                    </Form.Group>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Filter by Type</button>
                <div className="dropdown-content">
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
            </div>
        </div>
        <div className="container">
            <div className="item-grid">
                {visibleItems.map((item) => (
                        <ItemCard key={item.id} item={item}/>
                ))}
            </div>
        </div>
        <Footer/></>
    );
}

export default Collections
