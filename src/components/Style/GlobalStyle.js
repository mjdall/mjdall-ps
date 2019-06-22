import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    /* @import url('https://fonts.googleapis.com/css?family=Roboto'); */
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    font-size: calc(12px + (18px - 12px) * ((100vw - 300px) / (1500px - 300px)));
    /* line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300))); */
}
`
