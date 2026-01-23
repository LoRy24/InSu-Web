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

export enum FabLabState {
    ALL,
    ACTIVE,
    INACTIVE
}

export type FabLabFiltersObject = {
    state: FabLabState
    tags: FabLabTag[];
}