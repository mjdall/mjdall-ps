import styled from 'styled-components'

export default styled.div`
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  padding: 4vh 7vw 4vh 7vw;

  text-align: ${props => props.centerElements && 'center'};
  vertical-align: 'middle';
  display: table;

  background-color: ${props =>
    props.theme.backgroundColour ? props.theme.backgroundColour : '#FFF'};
`
