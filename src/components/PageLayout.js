import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import GlobalStyle from '../components/Style/GlobalStyle'
import Header from './Header'
import { ThemeProvider } from 'styled-components'

const PageLayout = ({ children, theme }) => (
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
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <main>
            <Header siteTitle={data.site.siteMetadata.title} theme={theme} />
            {children}
          </main>
        </ThemeProvider>
      </>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
