import React from "react"
import { useEffect } from "react"
import { Form } from "react-bootstrap"
import { useTranslation } from "react-i18next"

function LanugageChanger(){
    const {i18n} = useTranslation()
    
    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value)
    }

    useEffect(() => {
        document.body.dir = i18n.dir()
    }, [i18n, i18n.language])

    return(
        <div className="btn-container">
            <Form.Select onChange={(e) => {changeLanguage(e.target.value)}}>
                <option value="placeholder" disabled> 🌐 </option>
                <option className={"en" === i18n.language ? "selected" : ""} key={"en"} value="en" >English</option>
                <option className={"ar" === i18n.language ? "selected" : ""} key={"ar"} value="ar">عربي</option>
                <option className={"fr" === i18n.language ? "selected" : ""} key={"fr"} value="fr">Français</option>
            </Form.Select>
        </div>
    );
}

export default LanugageChanger