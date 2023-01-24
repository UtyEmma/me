export interface IProject {
    id: number
    title: string
    type: string
    description: string
    tech: string[]
    image: string
    status: 'active' | 'inactive'
    link: string
    github: null | string
}