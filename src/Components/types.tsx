export type Project = {
    name: string,
    description: string,
    workers: Worker[],
    links: string[]
}

export type Worker = {
    name: string,
    position: string
}