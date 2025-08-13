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
                rashidun: "Rashidun",
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
                dish: "Dish",
                glass_vessel: "Glass Vessel",
                manuscript: "Manuscript",
                tombstone: "Tombstone",
                /* origin of items */
                egypt: "Egypt",
                syria: "Syria",
                iran: "Iran",
                türkiye: "Türkiye",
                egypt_syria: "Egypt or Syria",
                /* items themselves */
                candlestick_desc: "This candlestick bears inscriptions referring to the mamluk sultan Qāytbāy 872-901AH/1467-1495AD, and was made for the holy shrine of the prophet Muḥammad (pbuh) in Medina. It is one of those candlesticks characterized by a tapering cylindrical base, a long neck and a conical candle groove. The body and neck are decorated with an epigraphic band mentioning the name and titles of sultan Qāytbāy. It should be noticed that the first letters of the words take the shape of rising criss-crossing flames, providing them with a sense of livelihood and mobility. Groups of epigraphic blazons of sultan Qāytbāy intermingle with the text. The central disk in the body bears an inscription which says :“this was endowed to the holly shrine by our lord, the sultan al-Malik al-Ashraf Abul-Nasr Qāytbāy in the year 880AH in the holy month of Ramadan",
                horse_saddle_desc: "This saddle is a living proof of the importance of compassion in Islam. In this vein, Islamic Art has produced numerous other artifacts designed to protect and take care of different animals. So, despite of its being a horse saddle made merely to cover a horse's back, the artisan who made it toiled at decorating it with velvet, silk and silver threads. This demonstrates, beyond any doubt, the philosophy of beauty, mercy and compassion to living creatures of the Islamic Civilization.", 
                stucco_frame_desc: "This unique example was brought from the Madrasah of Ayyubid Sultan al-Kāmil (622AH/1225AD), that was overlooking al-Mu’izz street at that time. The window has a border frame decorated with Kufic writings and interlaced vegetal motifs.",
                shard_desc: "This fragment depicts what is believed by some to be the portrait of Jesus Christ, with a beard and long hair, carrying a book ,thought to be the Bible, bestowing his blessings with his right hand. His two fingers symbolize the dual nature of Jesus, and some researchers believe that his other three fingers symbolize the two letters Alpha and Omega, as mentioned in the Apocalypse of St.John. This scene is repeated in Coptic Art in the wall paintings of the monastery of Bawīt, in Upper Egypt, 5th century AD, which reflects the religious tolerance towards non-Muslims in the Fatimid period.",
                kohl_container_desc: "Islam considers cleanliness, proper demeanor and good looks as signs of faith. This led to the popularity of cosmetic tools in Islamic Art, such as perfume sprinklers, kohl containers, combs and mirrors.",
                panel_desc: "The object reflects an assembly of wood panels forming a star pattern decorated with foliate designs, in addition to a frieze of naskkhi writing applied on floral background. Those panels were brought to the Museum from the dome of Imam al-Shafi’i",
                hilya_desc: "This honored hilya is giving a description for the prophet Muhammad (PBUH) starting with the Basmalla and a rounded medallion bears the description of the Prophet Muhammad (PBUH) for his features and appearance. The names of the four rightly-guided caliphs are written then a verse from Quran (Surat al-Anbiya’ “We sent thee not, but as a Mercy for all creatures”. The conclusion covers the description of the manners of the prophet Muhammad (PBUH) and carrying the name of the writer and the date “ released and revised by Mahmud known as Galal al-Din in 1223AH.",
                necklace_desc:"This necklace consists of twenty-four elongated pieces. Suspended from the center is a crescent-shaped pendant decorated in enamel and inscribed with ‘al-‘Izz al-Da’im’ (perpetual glory)",
                mosque_lamp_desc:"This mosque lamp, made in the name of Amir Safy al-Din Shayku, is adorned with various decorations depicting Quranic verses from Ṣūrat al-Nῡr and phrases of invocation, the decoration is executed in multi-colored enamel.",
                umayyad_dinar_desc:"This dinar is the final stage of the process of the arabization of the coinage in Islam. It is the first model that has pure Arabic writings. The Dinar is dated to 77 AH.",
                copper_table_desc:"This kind of table was commonly called a dinner chair by some scholars of Islamic Art, whereas it was most probably used as a Quran holder in the mosques or for carrying the candlesticks during prayer time on both sides of the Miḥrāb. It could have also been used for holding personal accessories. The table takes the shape of a hexagonal prism decorated with vegetal, geometric, animal, and epigraphic motifs quoting Quranic and invocational phrases. A small double-leafed door opens up on one of its sides and is decorated with vegetal elements. The legs of the table are connected with six supports bearing the name of the artisan who made it “Muḥammad ibn Sunqur al Bughdādi al Sankari and the date of manufacturing 728 AH/327-1328 AD. The inscriptions on the table refer to the name of the mamluk sultan al-Nāṣir Muḥammad ibn Qalāwūn who reigned Egypt for three periods; the last one was from 709-741AD/1309-1340AD.",
                dish_desc: "Ottoman ceramic products ranged from dishes, bowls, ewers and goblets, to perfume bottles, vases, pilgrimage flasks, and lamp suspension eggs. Ottoman ceramics reached high levels of precision and perfection. They became very popular on the European markets. The group from which this specimen derives is attributed to several Turkish cities such as Iznik, Kütahya, and Gallipoli (Canakkale). The artifacts in this group are decorated with under glaze polychromic motifs on white slip depicting tulips, cloves, and lancelet leaves. The vegetal motifs have played a vital role in the Ottoman Arts, and were frequently utilized on the Ottoman artistic products. Some of these decorations had a symbolic significance to the Ottomans. European influences are also clear in the decoration of these items such as some Roman influence which is a mixture of stylized Islamic foliate ornaments applied on an European pattern",
                glass_vessel_desc:"Glass vessel surrounded by a polychrome glass net, resting on a camel- shaped base. It is a remarkable example of small vessels fixed on the back of an animal or bird",
                manuscript_desc: "Manuscript of 'Kitab fil-adwiya al-mufrada' by Abu Ja’far al-Ghāfiqi. Al-Ġāfiqi was a physician who lived in Andalusia in 6th c. AH/12th c. AD. This is a scientific manuscript copied in Turkey and ornamented with scenes of plants, explaining their medical benefits, and their usage in curing. Given that it is a scientific manuscript, the copier didn’t give sufficient care to make borders to its pages; but rather focused on drawing the herbs and specify their medical usage.",
                tombstone_desc:"It is from the master pieces in Islamic art because it is the oldest dated tombstone in Islam and it housed the first model of inscriptions in Islamic art. The tombstone has eight lines inscribed in primitive Kufic. The writings contained the name of the deceased ‘Abd al-Rahman ibn Khayr al-Hagari or al-Hijazi, and some supplications given to him as well as the date of his death in Gumada II 31AH/ Jan-Feb 652AD",
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
               /* items themselves */
               candlestick_desc: "يحمل هذا الشمعدان كتابات تُشير إلي اسم السلطان المملوكي قايتباي872-901هـ/ 1467- 1495م، وقد صُنع برسم الحجرة النبوية الشريفة بمسجد النبي صلى الله عليه وسلم بالمدينة المنورة، وهو من جملة الشماعد التى تميزت بالقاعدة الاسطوانية المخروطية الشكل والرقبة المرتفعة وبيت الشمعة المخروطية الشكل, ويُزخرف بدن ورقبة الشمعدان شريط من الزخارف الكتابية تُشير إلي اسم وألقاب السلطان قايتباي، ويلاحظ أن طوالع الحروف تنتهي بأشكال ألسنة اللهب المتقاطعة وقد أضفت على الكتابة حياة وحركة, يقطع هذا النص الكتابى رنوك كتابية خاصة بالسلطان قايتباى، أما القرص المستدير بالبدن فعليه كتابة نصها ”هذا ما اوقف على الحجرة النبوية مولانا السلطان الملك الاشرف ابو النصر قايتباى عز نصره بتاريخ سنة سبع وثمانين وثمانمائه فى شهر رمضان المعظم قدره",
               horse_saddle_desc: "تبرهن هذه التحفة الفنية على قيمة الرحمة عند المسلمين، حيث انتج الفن الإسلامي العديد من التحف الفنية لحماية الحيوانات والاهتمام بها، وعلى الرغم من أنها غطاء سرج كان يوضع على ظهر الحصان، إلا أننا نجد أن الفنان قد اعتنى بزخرفته وصنعه من القطيفة والحرير وأسلاك الفضة، وذلك يؤكد بما لا يدع مجالا للشك على فلسفة الجمال والرحمة والعطف على الكائنات الحية في الحضارة الإسلامية."
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