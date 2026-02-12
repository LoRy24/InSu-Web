import {FileReference} from "@/lib/insu/File";

export enum ResourceType {
    IDEA,
    IN_DEVELOPMENT_PROJECT,
    SCHOOL_BANK,
}

export class Resource {
    id: number
    resourceName: string
    brief: string
    description: string
    type: ResourceType
    lastUpdate: Date
    banner: string
    files: FileReference[]

    constructor(id: number, resourceName: string, brief: string, description: string, type: ResourceType, lastUpdate: Date, banner: string, files: FileReference[]) {
        this.id = id;
        this.resourceName = resourceName;
        this.brief = brief;
        this.description = description;
        this.type = type;
        this.lastUpdate = lastUpdate;
        this.banner = banner;
        this.files = files;
    }
}