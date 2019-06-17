import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
// import CenterWrapper from './Style/CenterWrapper'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            paddingLeft: `100px`,
            paddingRight: `100px`,
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <a href="https://github.com/mjdall/mjdall-ps">GitHub</a>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
