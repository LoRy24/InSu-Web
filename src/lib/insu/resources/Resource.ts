import {FileReference} from "@/lib/insu/File";

export enum ResourceType {
    IDEA,
    IN_DEVELOPMENT_PROJECT,
    SCHOOL_BANK,
}

export type Resource = {
    id: number
    name: string
    brief: string
    description: string
    type: ResourceType
    lastUpdate: Date
    banner: string
    files: FileReference[]
};