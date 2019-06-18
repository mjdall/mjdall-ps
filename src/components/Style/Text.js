import styled from 'styled-components'

export default styled.p`
  font-size: ${props => props.fontSize};

  color: ${props => props.theme.textFontColour && props.theme.textFontColour};
`
