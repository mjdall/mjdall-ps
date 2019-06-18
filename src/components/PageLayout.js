import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import PaddedMainContainer from './Style/PaddedMainContainer'
import VerticalAlignContainer from './Style/VerticalAlignContainer'
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
      <ThemeProvider theme={theme}>
        <PaddedMainContainer>
          <Header siteTitle={data.site.siteMetadata.title} theme={theme} />
          <VerticalAlignContainer>{children}</VerticalAlignContainer>
        </PaddedMainContainer>
      </ThemeProvider>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
