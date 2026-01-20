export class FabLab {
    // Details
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: number;
    description: string;
    topics_ids: string[];
    active: boolean;

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
                topics_ids: string[],
                active: boolean,
                card_banner_url: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.description = description;
        this.topics_ids = topics_ids;
        this.active = active;
        this.card_banner_url = card_banner_url;
    }
}

export enum FabLabTag {
    TECH_INFO,
    TECH_NETWORKS,
    TECH_ELECTRONICS,
    TECH_MOBILE,
    TECH_WEB,
    TECH_DESIGN,
    TECH_MECHANICAL,

    ART_PAINT,
    ART_SCULPTURE,
    ART_WRITING,
    ART_MUSIC,

    TEXTILE_ECOPRINT,
    TEXTILE_TAILORING,
    TEXTILE_EMBROIDERY,
    TEXTILE_CROCHET,
    TEXTILE_PRINTING,

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