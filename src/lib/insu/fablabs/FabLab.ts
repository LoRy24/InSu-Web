import {FileReference} from "@/lib/insu/File";

export class FabLab {
    // Details
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: number;
    description: string;
    complete_description: string;
    tags: FabLabTag[];
    active: boolean;
    photos_urls: string[];
    files: FileReference[];
    latitude: number;
    longitude: number;

    // Images
    card_banner_url: string;

    // Default Constructor
    constructor(id: number,
                name: string,
                address: string,
                city: string,
                state: string,
                zipcode: number,
                description: string,
                complete_description: string,
                tags: FabLabTag[],
                active: boolean,
                card_banner_url: string,
                photos_urls: string[],
                files: FileReference[],
                latitude: number,
                longitude: number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.description = description;
        this.complete_description = complete_description;
        this.tags = tags;
        this.active = active;
        this.card_banner_url = card_banner_url;
        this.photos_urls = photos_urls;
        this.files = files;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export enum FabLabTag {
    TECH_INFO, // Informatica
    TECH_NETWORKS, // Reti
    TECH_ELECTRONICS,
    TECH_MOBILE,
    TECH_WEB,
    TECH_DESIGN,
    TECH_MECHANICAL,

    ART_PAINT,
    ART_SCULPTURE,
    ART_WRITING,
    ART_MUSIC,

    TEXTILE_ECOPRINT, // EcoPrint
    TEXTILE_TAILORING, // Rammendo
    TEXTILE_EMBROIDERY, // Ricamato
    TEXTILE_CROCHET, // Maglia
    TEXTILE_PRINTING, // Serigrafia

    AGRICOLTURE_VEGETABLE_GARDENS,
    AGRICOLTURE_HYDROPONIC_GREENHOUSES,
    AGRICOLTURE_BEEHIVES,
    AGRICOLTURE_COMPOSTING,
    AGRICOLTURE_FLORICOLTURE,
    AGRICOLTURE_OFFICINAL,

    CRAFTSMANSHIP_WOOD,
    CRAFTSMANSHIP_METAL,
    CRAFTSMANSHIP_LEATHER,
    CRAFTSMANSHIP_GLASS,
    CRAFTSMANSHIP_MECHANICS,
    CRAFTSMANSHIP_REPAIR,
    CRAFTSMANSHIP_SOAPS,
}

export const FabLabTagsColors: string[] = [
    "#6B7280",
    "#9CA3AF",
    "#8B5CF6",
    "#A78BFA",
    "#93C5FD",
    "#7DA2C8",
    "#7DD3FC",
    "#5EEAD4",
    "#6FBFB3",
    "#6EE7B7",
    "#86EFAC",
    "#A7C7A1",
    "#D1FAE5",
    "#FDE68A",
    "#E8D5A9",
    "#F3C892",
    "#E6B8A2",
    "#D6A2AD",
    "#E5B4C7",
    "#F2C6DE",
    "#E9D5FF",
    "#D8B4FE",
    "#C4B5FD",
    "#BDB2A7",
    "#CFCFC4",
    "#E5E7EB",
    "#CBD5E1",
    "#B6C2CC",
    "#A3B3C2",
];

export const FabLabTagsTextColors = [
    "#FFFFFF",
    "#0A0A0A",
    "#FFFFFF",
    "#0A0A0A",
    "#0A0A0A",
    "#FFFFFF",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
    "#0A0A0A",
];

export const FabLabTagsNames = [
    "Informatica",
    "Reti",
    "Elettronica",
    "Cellulare",
    "Web",
    "Design",
    "Meccanica",
    "Pittura",
    "Scultura",
    "Scrittura",
    "Musica",
    "EcoPrint",
    "Rammendo",
    "Ricamo",
    "Maglia",
    "Serigrafia",
    "Orti",
    "Serre Idroponiche",
    "Arnie",
    "Compostaggio",
    "Floricoltura",
    "Officinal",
    "Legno",
    "Metallo",
    "Pelle",
    "Vetro",
    "Meccanica",
    "Aggiustaggio",
    "Saponi"
];

export const FabLabIcons: string[] = [
    // Tecnologie
    "cpu",               // TECH_INFO
    "diagram-3",         // TECH_NETWORKS
    "plug",              // TECH_ELECTRONICS
    "phone",             // TECH_MOBILE
    "globe",             // TECH_WEB
    "vector-pen",        // TECH_DESIGN
    "gear",              // TECH_MECHANICAL

    // Arti
    "palette",           // ART_PAINT
    "image",             // ART_SCULPTURE (sostituito image-alt con image)
    "pencil",            // ART_WRITING
    "music-note",        // ART_MUSIC

    // Tessile
    "flower1",            // TEXTILE_ECOPRINT (sostituito flower1 con flower)
    "scissors",          // TEXTILE_TAILORING
    "patch-check",             // TEXTILE_EMBROIDERY (sostituito patch-check con patch)
    "braces",            // TEXTILE_CROCHET (simbolo generico artigianale)
    "printer",           // TEXTILE_PRINTING

    // Agricoltura
    "leaf-fill",          // AGRICOLTURE_VEGETABLE_GARDENS
    "droplet",           // AGRICOLTURE_HYDROPONIC_GREENHOUSES
    "hexagon",           // AGRICOLTURE_BEEHIVES
    "recycle",           // AGRICOLTURE_COMPOSTING
    "flower2",            // AGRICOLTURE_FLORICOLTURE
    "bandaid",           // AGRICOLTURE_OFFICINAL (sostituito medkit con healing)

    // Artigianato
    "tree",              // CRAFTSMANSHIP_WOOD
    "hammer",            // CRAFTSMANSHIP_METAL
    "bag",               // CRAFTSMANSHIP_LEATHER
    "droplet",           // CRAFTSMANSHIP_GLASS (sostituito droplet-fill con droplet)
    "wrench",            // CRAFTSMANSHIP_MECHANICS
    "tools",             // CRAFTSMANSHIP_REPAIR
    "cup-straw",         // CRAFTSMANSHIP_SOAPS (simbolo generico, cup-straw come alternativa)
];

export enum FabLabState {
    ALL,
    ACTIVE,
    INACTIVE
}

export type FabLabFiltersObject = {
    state: FabLabState
    tags: FabLabTag[];
}