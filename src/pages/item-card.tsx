export class Item{
    name: string = "";
    origin: string = "";
    centuryAD: number = 0;
    centuryAH: number = 0;
    hall: number = 0;
    tags: string[] = [];
    tagColor: string = ""; // colour of 'item type'
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
        "public/items/mamluk-candlestick.jpg",
        'candlestick_desc',
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
        "public/items/fatimid-shard.jpg",
        'shard_desc',
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
        "public/items/ayyubid-stucco.jpg",
        'stucco_frame_desc',
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
        "public/items/ottoman-saddle.jpg",
        'horse_saddle_desc',
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
        "public/items/mamluk-ottoman-kohl.jpg",
        'kohl_container_desc',
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
        "public/items/ayyubid-panel.jpg",
        'panel_desc',
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
        "public/items/ottoman-hilya.jpg",
        'hilya_desc',
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
        "public/items/fatimid-necklace.jpg",
        'necklace_desc',
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
        "public/items/mamluk-lamp.jpg",
        'mosque_lamp_desc',
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
        "public/items/umayyad-dinar.jpg",
        'umayyad_dinar_desc',
        26078
    ),
    new Item(
        "Copper Table",
        "Egypt",
        14, 8, 8,
        ["Mamluk", "Metals"],
        "#a08f76",
        "public/items/mamluk-table.jpeg",
        'copper_table_desc',
        139
    ),
    new Item(
        "Dish",
        "Türkiye",
        16, 10, 12,
        ["Ottoman", "Ceramics"],
        "#4395a4",
        "public/items/turkish-dish.jpg",
        'dish_desc',
        15858
    ),
    new Item(
        "Glass Vessel",
        "Egypt/Syria",
         7, 2, 25,
         ["Umayyad", "Glass"],
        "#c9ab73",
        "public/items/glass-vessel.jpg",
        'glass_vessel_desc',
        7203
    ),
    new Item(
        "Manuscript",
        "Türkiye",
        16, 10, 25,
        ["Ottoman", "Manuscripts"],
        "#c7bdbd",
        "public/items/ottoman-book.jpg",
        'manuscript_desc',
        3907
    ),
    new Item(
        "Tombstone",
        "Egypt",
        7, 11, 19,
        ["Rashidun", "Stones"],
        "#663e1d",
        "public/items/tombstone.jpg",
        'tombstone_desc',
        1508
    )
]
