import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  html {

  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    &:before{
      content: "";
      background-color: ${({ theme }) => theme.colors.background};
      background-image: url('/images/egg/dmtrbg.png');
      background-size: cover;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
