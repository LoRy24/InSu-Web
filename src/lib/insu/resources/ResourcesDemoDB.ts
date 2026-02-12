import {Resource, ResourceType} from "@/lib/insu/resources/Resource";

export const ResourcesDB: Resource[] = [
    new Resource(
        0,
        "Prova",
        "Risorsa di prova",
        "Descrizione lunga",
        ResourceType.SCHOOL_BANK,
        new Date(),
        "/app_data/images/cat.png",
        []
    )
];

export function collectByType(type: ResourceType): Resource[] {
    return ResourcesDB.filter(resource => resource.type === type);
}