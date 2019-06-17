import React from 'react'

import Layout from '../components/MainLayout'
import SEO from '../components/SEO'
import CenterWrapper from '../components/Style/CenterWrapper'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <CenterWrapper>
        <p style={{ fontSize: '7rem', marginBottom: '0px' }}>hi, i'm morgan</p>
        <p>
          This site is a work in progress! Currently on the boilerplate stage of
          the site. Check back soon.
        </p>
      </CenterWrapper>
    </Layout>
  )
}

export default IndexPage
