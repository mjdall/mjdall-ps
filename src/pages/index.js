import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../style/style.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="main-text-header">hi, i'm morgan (classic)</p>
    <p>
      This site is a work in progress! Currently on the boilerplate stage of the site. Check back soon.
    </p>
  </Layout>
)

export default IndexPage
