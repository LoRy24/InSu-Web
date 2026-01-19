class FabLab {
    // Details
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    description: string;
    topics_ids: string[];
    active: boolean;

    // Images
    card_banner_url: string;

    // Default Constructor
    constructor(id: string,
                name: string,
                address: string,
                city: string,
                state: string,
                zipcode: string,
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