import React from 'react'

import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'
import HeaderText from '../components/Style/HeaderText'
import Text from '../components/Style/Text'

const notFoundTheme = {
  backgroundColour: '#FE4A49',
  headerFontColour: '#E6E6EA',
  textFontColour: '#E6E6EA',
}

const NotFoundPage = () => (
  <PageLayout theme={notFoundTheme}>
    <SEO title="404: Not found" />
    <HeaderText>NOT FOUND</HeaderText>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </PageLayout>
)

export default NotFoundPage
