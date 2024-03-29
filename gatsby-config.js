require('dotenv').config({ path: '.env' })

const queries = require('./src/utils/algolia_queries')
const githubQueryOptions = require('./src/utils/github_query_options')
const feeds = require('./src/utils/feeds')

const plugins = [
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/assets`,
      name: 'uploads',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/content/posts`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `portfolio`,
      path: `${__dirname}/content/portfolio`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-relative-images',
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 800,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
        `gatsby-plugin-catch-links`,
        `gatsby-remark-external-links`,
      ],
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 800,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
        `gatsby-plugin-catch-links`,
        `gatsby-remark-external-links`,
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Lucas Bassetti`,
      short_name: `Lucas Bassetti`,
      start_url: `/`,
      background_color: `#1d1d1d`,
      theme_color: `#ffffff`,
      display: `minimal-ui`,
      icon: `static/icon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-source-github-api`,
    options: {
      token: process.env.GITHUB_ACCESS_TOKEN,
      ...githubQueryOptions,
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds,
    },
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@src': 'src',
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@layout': 'src/layout',
        '@templates': 'src/templates',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
      },
      extensions: ['js'],
    },
  },
  `gatsby-plugin-netlify-cms`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-preact`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-tslint`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-offline`,
]

if (process.env.NODE_ENV === 'production') {
  const algolia = {
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries,
      chunkSize: 10000, // default: 1000
      enablePartialUpdates: true,
    },
  }

  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false,
    },
  }

  plugins.push(algolia)
  plugins.push(analytics)
}

module.exports = {
  siteMetadata: {
    title: `Lucas Bassetti`,
    description:
      'I am a Software Engineer with 8+ years experience in remote work and 12+ years with web technologies. I am fast-learner that loves working with open source and discovering new technologies.',
    position: 'Senior Frontend Developer',
    author: `@lucasbassetti`,
    siteUrl: `https://lucasbassetti.com/`,
  },
  plugins,
}
