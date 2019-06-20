import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const FullPageDiv = styled.div`
  display: table;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  /* padding: 4vh 7vw 4vh 7vw; */

  text-align: ${props => props.centerElements && 'center'};
  vertical-align: ${props => props.centerElements && 'middle'};

  background-color: ${props =>
    props.theme.backgroundColour ? props.theme.backgroundColour : '#FFF'};
`

const VerticalCenterDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: table-cell;
  vertical-align: ${props => (props.noVerticalAlign ? '' : 'middle')};
  text-align: center;
`

const FullPageContainer = ({
  content,
  theme,
  dontCenterElements,
  noVerticalAlign,
}) => {
  const noVertAlign =
    typeof noVerticalAlign === 'boolean' ? noVerticalAlign : false
  return (
    <ThemeProvider theme={theme}>
      <FullPageDiv>
        {dontCenterElements ? (
          content
        ) : (
          <VerticalCenterDiv noVerticalAlign={noVertAlign}>
            {content}
          </VerticalCenterDiv>
        )}
      </FullPageDiv>
    </ThemeProvider>
  )
}

export default FullPageContainer
