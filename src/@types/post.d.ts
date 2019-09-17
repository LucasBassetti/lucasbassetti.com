declare global {
  interface IPost {
    readonly category: 'TS' | 'JS' | 'CSS' | 'MISC'
    readonly date: string
    readonly date_timestamp: number
    readonly description: string
    readonly excerpt: string
    readonly objectID: string
    readonly slug: string
    readonly title: string
  }
}

export {}
