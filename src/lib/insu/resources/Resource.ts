enum ResourceType {
    IDEA,
    IN_DEVELOPMENT_PROJECT,
    SCHOOL_BANK,
}

type Resource = {
    id: number
    name: string
    brief: string
    type: ResourceType
    lastUpdate: Date

};