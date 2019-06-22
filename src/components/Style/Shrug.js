import React from 'react'
import Text from './Text'
import HeaderText from './HeaderText'

const Shrug = ({ useText, fontSize }) => {
  return useText ? (
    <Text fontSize={fontSize && fontSize}>¯\_(ツ)_/¯</Text>
  ) : (
    <HeaderText fontSize={fontSize ? fontSize : '10em'} thin arial>
      ¯\_(ツ)_/¯
    </HeaderText>
  )
}

export default Shrug
