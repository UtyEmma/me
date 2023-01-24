export interface IPosts {
    feed: {
        author: "",
        url: string
        link: string
        image: string
        description: string
    }   
    items: IPostItem[]
}   

export interface IPostItem {
    title: string
    pubDate: string
    description: string
    content: string
    categories: string[]
    thumbnail: string
    author: string
    enclosure: {}
    guid: string
    link: string
}