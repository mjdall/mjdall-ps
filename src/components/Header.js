import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import HeaderText from './Style/HeaderText'

const Header = ({ siteTitle }) => (
  <header style={{ paddingTop: '20px' }}>
    <>
      <HeaderText inline removeLink>
        <Link to="/" style={{ textDecoration: 'none', color: '#F78A80' }}>
          {siteTitle}
        </Link>
      </HeaderText>
      <HeaderText inline removeLink fontSize="1.25rem">
        <Link to="/" style={{ textDecoration: 'none', color: '#F78A80' }}>
          about me
        </Link>
      </HeaderText>
    </>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
