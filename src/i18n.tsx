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
                mission: "The mission of the Museum of Islamic Art (MIA) is to display, preserve and interpret Islamic artifacts, and to reach a maximum number of national and international visitors. MIA also aims to develop education programs, encourage scientific research and collaborations as well as foster a greater understanding and appreciation of the contributions made by the Islamic civilization to world heritage in the arts and sciences. MIA also hopes to encourage dialogue, thus increasing tolerance and mutual understanding among people.",
                f_times: "Mon-Thurs 9:00-5:00 | Fri 9:00-11:30 & 1:30-5:00",
                address: "Port Said, Ghayt Al Adah, | Al-Darb Al-Ahmar,Cairo | Governorate 11638, Egypt",
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
                copper_table: "Copper Table",
                /* origin of items */
                egypt: "Egypt",
                syria: "Syria",
                iran: "Iran",
                türkiye: "Türkiye",
                egypt_syria: "Egypt or Syria",
                /* timeline */
                1869: "The idea of establishing a museum for Islamic arts and antiquities first came up during the rule of Khedive Ismail. This was achieved during the rule of Khedive Tawfiq, his son.",
                1880: "Franz Pasha, the court architect to Khedive Ismail, collected 111 antiques and artifacts of the Islamic period in the eastern wing of al-Hakim Bi Amr illah’s Mosque.",

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
               mission: "يمتلك المتحف رسالة تهدف إلى الوصول إلى أكبر عدد من الزوار سواء من المصريين أو الأجانب, هذا إلى جانب حفظ التحف الإسلامية, مع الاهتمام بالتعليم والبحث والتعاون العلمي, مع تشجيع الفهم الجيد لإسهامات الحضارة الإسلامية وما قدمته للتراث العالمي في كل من الفنون والعلوم, في إطار من الحوار والتقارب بين الحضارات",
               f_times: "الاتنين-الاربعاء: 9:00ص-5:00م | الجمعة: 9:00ص-11:30ص & 1:30م-5:00م",
               address: "ميدان باب الخلق, شارع بورسعيد, أمام مديرية أمن القاهرة 11638",
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
               copper_table: "منضدة",
               /* origin of items */
               egypt: "مصر",
               syria: "سوريا",
               iran: "ايران",
               türkiye: "تركيا",
               egypt_syria: "مصر او سوريا",
               /* timeline 
               1869: "وقد بدأت فكرة إنشاء متحف للفنون والآثار الإسلامية في عصر الخديوي إسماعيل وبالتحديد في سنة 1869م.",
               1880: "عندما قام فرانتز باشا بجمع التحف الأثرية التي ترجع إلى العصر الإسلامي في الإيوان الشرقي لجامع الحاكم بأمر الله",
               1892: "وتم بعد ذلك بناء مبنى صغير في صحن جامع الحاكم أطلق عليه اسم المتحف العربي تحت إدارة فرانتزباشا الذي ترك الخدمة سنة 1892م."
               */
            }
        }
    }
})

export default i18n