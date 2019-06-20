import styled from 'styled-components'

const defaults = {
  fontSize: '2.5em',
}

export default styled.h1`
  font-size: ${props => (props.fontSize ? props.fontSize : defaults.fontSize)};
  display: ${props => props.inline && 'inline-block'};
  margin: 0 !important;

  padding-right: ${props => props.padRight && '0.5em'};
  padding-bottom: ${props => props.padBottom && '0.5em'};

  font-weight: ${props => (props.thin ? '300' : '400')};
  font-family: ${props =>
    props.arial ? 'Arial' : props.theme.fontFamily && props.theme.fontFamily};
  color: ${props =>
    props.theme.headerFontColour && props.theme.headerFontColour};
`
