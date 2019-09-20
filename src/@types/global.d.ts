declare global {
  interface Window {
    DISQUS: any
    __theme: string
    __onThemeChange: () => void
    __setPreferredTheme: (theme: string) => void
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GATSBY_ALGOLIA_APP_ID: string
      GATSBY_ALGOLIA_SEARCH_KEY: string
      GATSBY_ALGOLIA_INDEX_NAME: string
    }
  }
}

export {}
