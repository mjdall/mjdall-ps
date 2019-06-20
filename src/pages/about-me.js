import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import PageLayout from '../components/PageLayout'
import FullPageContainer from '../components/Style/FullPageContainer'

import Text from '../components/Style/Text'
import HeaderText from '../components/Style/HeaderText'
import PicOfMe from '../components/PicOfMe'
import DefaultPaddingContainer from '../components/Style/DefaultPaddingContainer'

const aboutMeTheme = {
  backgroundColour: '#FF8552',
  headerFontColour: '#39393A',
  textFontColour: '#39393A',
}

const FirstBlockContent = (
  <DefaultPaddingContainer>
    <PicOfMe width="300px" height="300px" />
    <HeaderText padBottom>About Me</HeaderText>
    <Text>
      Still needing to write a little blurb about myself! Should be up soon.
    </Text>
    <Link to="/" style={{ color: aboutMeTheme.textFontColour }}>
      Heres a link back to the home page with "All of the content"
    </Link>
  </DefaultPaddingContainer>
)

const AboutMe = () => (
  <PageLayout theme={aboutMeTheme}>
    <SEO title="about me" />
    <FullPageContainer
      content={FirstBlockContent}
      theme={aboutMeTheme}
      noVerticalAlign
    />
  </PageLayout>
)

export default AboutMe
