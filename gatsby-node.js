const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// to add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)

  // Ensures we are processing only markdown files
  if (['MarkdownRemark', 'Mdx'].includes(node.internal.type)) {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    })

    // Creates new query'able field with name of 'slug'
    if (node.fileAbsolutePath.includes('content/posts')) {
      createNodeField({
        node,
        name: 'slug',
        value: slug.slice(12, slug.length),
      })

      createNodeField({
        node,
        name: 'type',
        value: 'blog',
      })
    }

    if (node.fileAbsolutePath.includes('content/portfolio')) {
      createNodeField({
        node,
        name: 'slug',
        value: slug.slice(1, slug.length),
      })

      createNodeField({
        node,
        name: 'type',
        value: 'portfolio',
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  const portfolioPostTemplate = path.resolve(`src/templates/portfolio-post.tsx`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      {
        posts: allMdx(
          filter: { fields: { type: { eq: "blog" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        portfolio: allMdx(
          filter: { fields: { type: { eq: "portfolio" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `blog/${node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // Create portfolio post pages.
    result.data.portfolio.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `portfolio/${node.fields.slug}`,
        component: portfolioPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
