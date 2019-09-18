const feeds = [
  {
    serialize: ({ query: { site, allMdx } }) => {
      return allMdx.edges.map(edge => {
        return Object.assign({}, edge.node.frontmatter, {
          description: edge.node.frontmatter.description,
          date: edge.node.frontmatter.date,
          url: site.siteMetadata.siteUrl + '/blog/' + edge.node.fields.slug,
          guid: site.siteMetadata.siteUrl + '/blog/' + edge.node.fields.slug,
          custom_elements: [{ 'content:encoded': edge.node.html }],
        })
      })
    },
    query: `
      {
        allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                date
              }
              excerpt(truncate: true, pruneLength: 500, format: HTML)
            }
          }
        }
      }
    `,
    output: '/feed.xml',
    title: 'Lucas Bassetti - RSS Feed',
  },
]

module.exports = feeds
