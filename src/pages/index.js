import React from 'react'

import SEO from '../components/SEO'
import PageLayout from '../components/PageLayout'
import FullPageContainer from '../components/Style/FullPageContainer'

import HeaderText from '../components/Style/HeaderText'
import Text from '../components/Style/Text'
import Emoji from '../components/Style/Emoji'

const firstPageTheme = {
  headerFontColour: '#292F36',
  backgroundColour: '#A1FCDF',
}

const FirstBlockContent = (
  <>
    <HeaderText fontSize="7em" inline thin>
      hi, i'm morgan
    </HeaderText>
    <Text>
      This site is a work in progress! Currently on the boilerplate stage of the
      site. Check back soon.
    </Text>
    <Text>
      To gauge the progress of my site, you can check out the{' '}
      {<a href="https://github.com/mjdall/mjdall-ps">github</a>}
    </Text>
    <Text fontSize="0.9em">
      <i>
        note: the page currently isn't being displayed properly in firefox, nor
        is it mobile optimised
      </i>
    </Text>
  </>
)

const secondBlockTheme = {
  backgroundColour: '#FE4A49',
  headerFontColour: '#E6E6EA',
  textFontColour: '#E6E6EA',
}

const SecondBlockContent = (
  <>
    <HeaderText fontSize="7em" inline thin>
      Wow another page!
    </HeaderText>
    <Text fontSize="2em">
      Still no content though <Emoji label="sweatFace" emoji="😅" />
    </Text>
  </>
)

const IndexPage = () => {
  return (
    <PageLayout theme={firstPageTheme}>
      <SEO title="mjdall" />
      <FullPageContainer content={FirstBlockContent} theme={firstPageTheme} />
      <FullPageContainer
        content={SecondBlockContent}
        theme={secondBlockTheme}
      />
    </PageLayout>
  )
}

export default IndexPage
