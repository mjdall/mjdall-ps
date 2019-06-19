import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import PageLayout from '../components/PageLayout'
import FullPageContainer from '../components/Style/FullPageContainer'

import HeaderText from '../components/Style/HeaderText'
import Shrug from '../components/Style/Shrug'

const aboutMeTheme = {
  backgroundColour: '#FE4A49',
  headerFontColour: '#E6E6EA',
  textFontColour: '#E6E6EA',
}

const FirstBlockContent = (
  <>
    <HeaderText>Sorry this isn't quite implemented yet!</HeaderText>
    <Shrug />
    <Link to="/" style={{ color: '#E6E6EA' }}>
      Heres a link back to the home page with "All of the content"
    </Link>
  </>
)

const AboutMe = () => (
  <PageLayout theme={aboutMeTheme}>
    <SEO title="about me" />
    <FullPageContainer content={FirstBlockContent} theme={aboutMeTheme} />
  </PageLayout>
)

export default AboutMe
