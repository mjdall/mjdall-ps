import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styled, { ThemeProvider } from 'styled-components'
import HeaderText from './Style/HeaderText'

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 10vh;
  top: 3vh;
  left: 5vw;
  right: 0;
  bottom: 0;
  z-index: 1;
`

const Header = ({ siteTitle, theme }) => (
  <ThemeProvider theme={theme}>
    <StyledHeader>
      <>
        <HeaderText inline removeLink padRight>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: theme.headerFontColour
                ? theme.headerFontColour
                : '#292F36',
            }}
          >
            {siteTitle}
          </Link>
        </HeaderText>
        <HeaderText inline removeLink padRight thin fontSize="1.25rem">
          <Link
            to="/about-me"
            style={{
              textDecoration: 'none',
              color: theme.headerFontColour
                ? theme.headerFontColour
                : '#292F36',
            }}
          >
            about me
          </Link>
        </HeaderText>
      </>
    </StyledHeader>
  </ThemeProvider>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
