import styled from 'styled-components'

const defaults = {
  fontSize: '2.5rem',
}

export default styled.h1`
  font-size: ${props => (props.fontSize ? props.fontSize : defaults.fontSize)};
  padding-right: ${props => props.padRight && '1.5rem'};
  display: ${props => props.inline && 'inline-block'};
  margin: ${props => props.removeMargins && '0'};
  padding-bottom: ${props => props.padBottom && '0.25rem'};

  font-weight: ${props => props.thin && '300'};
  font-family: ${props =>
    props.arial ? 'Arial' : props.theme.fontFamily && props.theme.fontFamily};
  color: ${props =>
    props.theme.headerFontColour && props.theme.headerFontColour};
`
