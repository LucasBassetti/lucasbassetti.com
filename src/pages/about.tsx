import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/layout/SEO'
import About from '../components/data_display/About'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
