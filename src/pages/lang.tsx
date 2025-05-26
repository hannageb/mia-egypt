import React, { useState } from "react"
import { useEffect } from "react"
import { Form } from "react-bootstrap"
import i18n from "../i18n";

function LanugageChanger(){
    const [language, setLanguage] = useState(i18n.language);
    
    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
        setLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
        window.location.reload();
    }

    useEffect(() => {
        document.body.dir = i18n.dir();
       
    }, [])

    return(
        <div className="btn-container">
            <Form.Select defaultValue={language} onChange={changeLanguage}>
                <option  value="placeholder" disabled> 🌐 </option>
                <option key={"en"} value="en" >English</option>
                <option key={"ar"} value="ar">عربي</option>
                {/*<option key={"fr"} value="fr">Français</option>*/}
            </Form.Select>
        </div>
    );
}

export default LanugageChanger