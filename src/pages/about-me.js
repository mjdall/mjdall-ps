import React from 'react'
// import { Link } from 'gatsby'

import SEO from '../components/SEO'
import PageLayout from '../components/PageLayout'
import FullPageContainer from '../components/Style/FullPageContainer'

import Text from '../components/Style/Text'
import HeaderText from '../components/Style/HeaderText'
import PicOfMe from '../components/PicOfMe'
import DefaultPaddingContainer from '../components/Style/DefaultPaddingContainer'
import Emoji from '../components/Style/Emoji'

const aboutMeTheme = {
  backgroundColour: '#C4F5FC',
  headerFontColour: '#39393A',
  textFontColour: '#39393A',
}

const FirstBlockContent = (
  <DefaultPaddingContainer>
    <PicOfMe width="500px" height="500px" />
    <HeaderText padBottom>About Me</HeaderText>
    <Text>
      I am a software developer from New Zealand. Still currently finishing off
      my univeristy degree but will be graduating this November! I have a keen
      interest in web development but am looking to get more experience with
      machine learning / AI development.
    </Text>
    <Text>
      In my spare time I like to snowboard, do a bit of motorsports, explore
      some cool frameworks and enjoy some Netflix{' '}
      <Emoji label="sunGlasses" emoji="😎" />.
    </Text>
    <Text fontSize="0.9em">
      <i>More content coming soon.</i>
    </Text>
    {/* <Link to="/" style={{ color: aboutMeTheme.textFontColour }}>
      Heres a link back to the home page with "All of the content"
    </Link> */}
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
