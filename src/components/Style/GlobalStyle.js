import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    /* @import url('https://fonts.googleapis.com/css?family=Roboto'); */
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  @media (min-width: 750) {
    body {
      font-size: 10px;
    }
  }
`
