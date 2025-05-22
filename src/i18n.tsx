import i18n from "i18next";
import {initReactI18next} from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'

/* sources
* https://www.youtube.com/watch?v=dltHi9GWMIo&ab_channel=RoadsideCoder
* https://blog.openreplay.com/multilingual-sites-in-react/
*/


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: localStorage.getItem("lang") || 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                header: "Welcome to the Museum of Islamic Art",
                visit: "Visit",
                collections: "Collections",
                map: "Map",
                history: "History",
                contact: "Contact Us",
                search: "🔎 Search...",
                Hall: "Hall",
                century: "",
                ah: " AH",
                ad:" AD",
                /* time periods */
                time_period: "Time Periods",
                umayyad: "Umayyad",
                abbasid: "Abbasid",
                ayyubid: "Ayyubid",
                umayyad_abbasid: "Umayyad-Abbasid",
                fatimid: "Fatimid",
                mamluk: "Mamluk",
                mamlukOttoman_map: "Mamluk-Ottoman",
                mamlukOttoman_tag: "Mamluk-Ottoman",
                ottoman: "Ottoman",
                ottomanMuhammadAliـmap: "Ottoman-Muhammad Ali",
                ottomanMuhammadAli_tag: "Ottoman-Muhammad Ali",
                safavid: "Safavid",
                /* types of items */
                metals: "Metals",
                stones: "Stones",
                ivory: "Ivory",
                ceramics: "Ceramics",
                manuscripts: "Manuscripts",
                glass: "Glass",
                textiles: "Textiles",
                wood: "Wood",
                weapons: "Weapons",
                jewelry: "Jewelry",
                coins: "Coins",
                kohl_container: "Kohl Container",
                candlestick:"Candlestick",
                mosque_lamp:"Mosque Lamp",
                umayyad_dinar: "Umayyad Dinar",
                horse_saddle: "Horse Saddle",
                stucco_frame: "Stucco Frame",
                shard: "Shard",
                necklace: "Necklace",
                hilya: "Hilya",
                panel: "Panel",
                /* origin of items */
                egypt: "Egypt",
                syria: "Syria",
                iran: "Iran",
                türkiye: "Türkiye",
                egypt_syria: "Egypt or Syria"
            }
            
        },
        fr: {
            translation: {
                header: "Bienvenue au Musée d'art islamique",
                history: "L'histoire"
            }
             
        },
        ar: {
            translation: {
               header: "مرحباً بكم في متحف الفن الإسلامي بالقاهرة",
               visit: "الزيارة",
               collections: "المقتنيات",
               map: "خاريطة المتحف",
               history: "تاريخ المتحف",
               contact: "تواصل معنا",
               search: "🔎 ابحث...",
               Hall: "قاعة",
               century: "القرن ",
               ah: "هـ",
               ad: "م",
               /* time periods */
               time_period: "العصور",
               umayyad: "الأموي",
               abbasid: "العباسي",
               ayyubid: "الايوبي",
               umayyad_abbasid: "الأموي-العباسي",
               fatimid: "الفاطمي",
               mamluk: "المماوكي",
               mamlukOttoman_map: "من المملوكي إلى العثماني",
               mamlukOttoman_tag: "مملوكي-عثماني",
               ottoman: "العثماني",
               ottomanMuhammadAliـmap: "من العثماني إلى محمد علي",
               ottomanMuhammadAliـtag: "العثماني-محمد علي",
               safavid: "الصفوي",
               /* types of items */
               metals: "المعادن",
               stones: "الأحجار",
               ivory: "العاج",
               ceramics: "الخزف",
               manuscripts: "المخطوطات",
               glass: "الزجاج",
               textiles: "النسيج",
               wood: "الأخشاب",
               weapons: "السلاح",
               jewelry: "الحلى",
               coins: "المسكوكات",
               kohl_container: "مكحلة",
               candlestick:"شمعدان",
               mosque_lamp:"مشكاه",
               umayyad_dinar: "دينار اموي",
               horse_saddle: "سرج حصان",
               stucco_frame: "اطار لنافذة",
               shard: "كسرة",
               necklace: "عقد",
               hilya: "الحلية",
               panel: "لوح",
               /* origin of items */
               egypt: "مصر",
               syria: "سوريا",
               iran: "ايران",
               türkiye: "تركيا",
               egypt_syria: "مصر او سوريا"
            }
        }
    }
})

export default i18n