
export class Item{
    name: string = "";
    origin: string = "";
    centuryAD: number = 0;
    centuryAH: number = 0;
    hall: number = 0;
    tags: string[] = [];
    tagColor: string = "";
    img: string = ""; // path field to image
    desc: string = "";
    id: number = 0;
    visible: boolean = true;

    constructor(name: string, origin: string, centuryAD: number, centuryAH: number, hall: number, tags: string[], tagColor: string, img: string, desc: string, id: number){
        this.name= name;
        this.origin = origin;
        this.centuryAD = centuryAD;
        this.centuryAH = centuryAH;
        this.hall = hall;
        this.tags = tags;
        this.tagColor = tagColor;
        this.img = img;
        this.desc = desc;
        this.id = id;
    }
}

export const entireCollection: Item[] = [
    new Item(
        "Candlestick",
        "Egypt",
        15,
        9,
        9,
        ["Mamluk","Metals"],
        "#a08f76",
        "/mia-egypt/items/mamluk-candlestick.jpg",
        "This candlestick bears inscriptions referring to the mamluk sultan Qāytbāy 872-901AH/1467-1495AD, and was made for the holy shrine of the prophet Muḥammad (pbuh) in Medina. It is one of those candlesticks characterized by a tapering cylindrical base, a long neck and a conical candle groove. The body and neck are decorated with an epigraphic band mentioning the name and titles of sultan Qāytbāy. It should be noticed that the first letters of the words take the shape of rising criss-crossing flames, providing them with a sense of livelihood and mobility. Groups of epigraphic blazons of sultan Qāytbāy intermingle with the text. The central disk in the body bears an inscription which says :“this was endowed to the holly shrine by our lord, the sultan al-Malik al-Ashraf Abul-Nasr Qāytbāy in the year 880AH in the holy month of Ramadan",
        4297
    ),
    new Item(
        "Shard",
        "Egypt",
        4,
        10,
        2,
        ["Fatimid", "Ceramics"],
        "#4395a4",
        "/mia-egypt/items/fatimid-shard.jpg",
        "This fragment depicts what is believed by some to be the portrait of Jesus Christ, with a beard and long hair, carrying a book ,thought to be the Bible, bestowing his blessings with his right hand. His two fingers symbolize the dual nature of Jesus, and some researchers believe that his other three fingers symbolize the two letters Alpha and Omega, as mentioned in the Apocalypse of St.John. This scene is repeated in Coptic Art in the wall paintings of the monastery of Bawīt, in Upper Egypt, 5th century AD, which reflects the religious tolerance towards non Moslems in the Fatimid period.",
        5397
    ),
    new Item(
        "Stucco Frame",
        "Egypt",
        13,
        7,
        6,
        ["Ayyubid","Stones"],
        "#663e1d",
        "/mia-egypt/items/ayyubid-stucco.jpg",
        "This unique example was brought from the Madrasah of sultan al-Kāmil 622AH/1225AD, that was overlooking al-Mu’izz street at that time. The window has a border frame decorated with Kufic writings and interlaced vegetal motifs.",
        1403
    ),
    new Item(
        "Horse Saddle",
        "Türkiye",
        16,
        10,
        20,
        ["Ottoman","Textiles"],
        "#9d7742",
        "/mia-egypt/items/ottoman-saddle.jpg",
        "This saddle is a living proof of the importance of compassion in Islam. In this vein, Islamic Art has produced numerous other artifacts designed to protect and take care of different animals. So, despite of its being a horse saddle made merely to cover a horse’s back, the artisan who made it toiled at decorating it with velvet, silk and silver threads. This demonstrates, beyond any doubt, the philosophy of beauty, mercy and compassion to living creatures of the Islamic Civilization.",
        12027
    ),
    new Item(
        "Kohl Container",
        "Egypt",
        15,
        9,
        9,
        ["Mamluk-Ottoman", "Ivory"],
        "#361706",
        "/mia-egypt/items/mamluk-ottoman-kohl.jpg",
        "Islam considers cleanliness, proper demeanor and good looks as signs of faith. This led to the popularity of cosmetic tools in Islamic Art, such as perfume sprinklers, kohl containers, combs and mirrors.",
        4050
    ),
    new Item(
        "Panel",
        "Egypt",
        13,
        7,
        5,
        ["Ayyubid","Wood"],
        "#3b3423",
        "/mia-egypt/items/ayyubid-panel.jpg",
        "The object reflects an assembly of wood panels forming a star pattern decorated with foliate designs, in addition to a frieze of naskkhi writing applied on floral background. Those panels were brought to the Museum from the dome of Imam al-Shafi’i",
        408
    ),
    new Item(
        "Hilya",
        "Egypt",
        19,
        13,
        17,
        ["Ottoman", "Manuscripts"],
        "#c7bdbd",
        "/mia-egypt/items/ottoman-hilya.jpg",
        "This honored hilya is giving a description for the prophet Muhammad (PBUH) starting with the Basmalla and a rounded medallion bears the description of the Prophet Muhammad (PBUH) for his features and appearance. The names of the four rightly-guided caliphs are written then a verse from Quran (Surat al-Anbiya’ “We sent thee not, but as a Mercy for all creatures”. The conclusion covers the description of the manners of the prophet Muhammad (PBUH) and carrying the name of the writer and the date “ released and revised by Mahmud known as Galal al-Din in 1223AH.",
        18209
    ),
    new Item(
        "Necklace",
        "Egypt",
        12,
        6,
        22,
        ["Fatimid","Jewelry"],
        "#4395a4",
        "/mia-egypt/items/fatimid-necklace.jpg",
        "This necklace consists of twenty-four elongated pieces. Suspended from the center is a crescent-shaped pendant decorated in enamel and inscribed with ‘al-‘Izz al-Da’im’ (perpetual glory)",
        13749
    ),
    new Item(
        "Mosque Lamp",
        "Egypt",
        12,
        6,
        22,
        ["Mamluk", "Glass"],
        "#c9ab73",
        "/mia-egypt/items/mamluk-lamp.jpg",
        "This mosque lamp, made in the name of Amir Safy al-Din Shayku, is adorned with various decorations depicting Quranic verses from Ṣūrat al-Nῡr and phrases of invocation, the decoration is executed in multi-colored enamel.",
        328
    ),
    new Item(
        "Umayyad Dinar",
        "Egypt/Syria",
        7,
        1,
        14, 
        ["Umayyad","Coins"],
        "#1f1b1c",
        "/mia-egypt/items/umayyad-dinar.jpg",
        "This dinar is the final stage of the process of the arabization of the coinage in Islam. It is the first model that has pure Arabic writings. The Dinar is dated to 77 AH.",
        26078
    )
]
