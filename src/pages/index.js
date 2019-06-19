import React from 'react'

import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'
import HeaderText from '../components/Style/HeaderText'
import Text from '../components/Style/Text'

const landingTheme = {
  headerFontColour: '#292F36',
  backgroundColour: '#A1FCDF',
}

const IndexPage = () => {
  return (
    <PageLayout theme={landingTheme}>
      <SEO title="mjdall" />
      <HeaderText fontSize="7em" inline thin>
        hi, i'm morgan
      </HeaderText>
      <Text>
        This site is a work in progress! Currently on the boilerplate stage of
        the site. Check back soon.
      </Text>
      <Text>
        To gauge the progress of my site, you can check out the{' '}
        {<a href="https://github.com/mjdall/mjdall-ps">github</a>}
      </Text>
      <Text fontSize="0.9em">
        <i>note: the page currently isn't being displayed properly in firefox</i>
      </Text>
    </PageLayout>
  )
}

export default IndexPage
