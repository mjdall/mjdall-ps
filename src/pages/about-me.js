import React from 'react'
import { Link } from 'gatsby'

import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'
import HeaderText from '../components/Style/HeaderText'
import Shrug from '../components/Style/Shrug'

const aboutMeTheme = {
  backgroundColour: '#FE4A49',
  headerFontColour: '#E6E6EA',
  textFontColour: '#E6E6EA',
}

const AboutMe = () => (
  <PageLayout theme={aboutMeTheme}>
    <SEO title="about me" />
    <HeaderText>Sorry this isn't quite implemented yet!</HeaderText>
    <Shrug />
    <Link to="/" style={{ color: '#65CEB9' }}>
      Heres a link back to the home page with "All of the content"
    </Link>
  </PageLayout>
)

export default AboutMe
