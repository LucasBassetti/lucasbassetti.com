import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/layout/SEO'
import Search from '../components/data_entry/Search'

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Search />
    </Layout>
  )
}

export default BlogPage
