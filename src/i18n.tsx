import i18n from "i18next";
import {initReactI18next} from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: 'en',
    resources:{
        en: {
            translation: {
                header: "Welcome to the Museum of Islamic Art"
            }
        },
        ar: {
            translation: {
                header:  "مرحباً بكم في متحف الفن الإسلامي بالقاهرة"
            }
        },
        fr: {
            translation: {
                header: "Bienvenue au Musée d'art islamique"
            }
        }
    }
})

export default i18n