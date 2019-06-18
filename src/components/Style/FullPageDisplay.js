import styled from 'styled-components'

export default styled.div`
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  margin: 0 !important;
  padding: 0 !important;
  align-content: ${props => props.centerContents && 'center'};
`
