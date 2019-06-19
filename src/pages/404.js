import React from 'react'

import SEO from '../components/SEO'
import PageLayout from '../components/PageLayout'
import FullPageContainer from '../components/Style/FullPageContainer'

import HeaderText from '../components/Style/HeaderText'
import Text from '../components/Style/Text'

const notFoundTheme = {
  backgroundColour: '#FE4A49',
  headerFontColour: '#E6E6EA',
  textFontColour: '#E6E6EA',
}

const notFoundContent = (
  <>
    <HeaderText>NOT FOUND</HeaderText>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </>
)

const NotFoundPage = () => (
  <PageLayout theme={notFoundTheme}>
    <SEO title="404: Not found" />
    <FullPageContainer theme={notFoundTheme} content={notFoundContent} />
  </PageLayout>
)

export default NotFoundPage
