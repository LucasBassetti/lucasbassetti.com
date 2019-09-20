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
              excerpt(pruneLength: 500)
            }
          }
        }
      }
    `,
    output: '/feed.xml',
    title: 'Lucas Bassetti',
  },
]

module.exports = feeds
