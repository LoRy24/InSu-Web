import {Resource, ResourceType} from "@/lib/insu/resources/Resource";

export const ResourcesDB: Resource[] = [

];

export function collectByType(type: ResourceType): Resource[] {
    return ResourcesDB.filter(resource => resource.type === type);
}