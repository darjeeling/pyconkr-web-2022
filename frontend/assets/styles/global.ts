import { createGlobalStyle } from 'styled-components'
import Theme from './theme'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :lang(ko) {
        word-break: keep-all;
    }
    
    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    body {
        background-color: ${Theme.colors.primary0};
        color: ${Theme.colors.grey0};
        font-family: "Noto Sans KR", sans-serif;
        line-height: 1.45;
    }
`

export default GlobalStyle
