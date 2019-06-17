import styled from 'styled-components'

const defaults = {
  fontSize: '2.5rem',
}

export default styled.h1`
  font-size: ${props => (props.fontSize ? props.fontSize : defaults.fontSize)};
  padding-right: 1.5rem;
  display: ${props => props.inline && 'inline-block'};
`
