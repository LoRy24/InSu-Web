export class FileReference {
    name: string;
    url: string;
    type: FileType

    constructor(name: string, url: string, type: FileType) {
        this.name = name;
        this.url = url;
        this.type = type;
    }
}

export enum FileType {
    DOCUMENT,
    LINK,
    VIDEO
}