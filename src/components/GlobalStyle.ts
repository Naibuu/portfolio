import { createGlobalStyle } from 'styled-components'

/** A solution to prettifying this component. */
const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
    * {
        padding: 0;
        margin: 0;

        font-family: 'Satoshi', sans-serif;
        color: white;
    }

    body {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        -webkit-user-select: none !important;
        -khtml-user-select: none !important;
        -moz-user-select: none !important;
        -o-user-select: none !important;
        user-select: none !important;
    }

    :root {
        --ui-lightgray: #b3b7be;
        --ui-green: #2ed1c1;
        --ui-red: #e25272;
        --ui-lightblue: #79ccf4;
    }

    #root {
        position: relative;
        overflow: hidden;
        z-index: 1;

        height: 100%;
        width: 100%;

        background-image: linear-gradient(45deg, #030712, #071d3e);
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-VariableItalic.woff2') format('woff2');
        font-weight: 300 900;
        font-display: swap;
        font-style: italic;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-Light.woff2') format('woff2');
        font-weight: 300;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-LightItalic.woff2') format('woff2');
        font-weight: 300;
        font-display: swap;
        font-style: italic;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-Regular.woff2') format('woff2');
        font-weight: 400;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-Italic.woff2') format('woff2');
        font-weight: 400;
        font-display: swap;
        font-style: italic;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-Medium.woff2') format('woff2');
        font-weight: 500;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-MediumItalic.woff2') format('woff2');
        font-weight: 500;
        font-display: swap;
        font-style: italic;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-Bold.woff2') format('woff2');
        font-weight: 700;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-BoldItalic.woff2') format('woff2');
        font-weight: 700;
        font-display: swap;
        font-style: italic;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-Black.woff2') format('woff2');
        font-weight: 900;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
        font-family: 'Satoshi';
        src: url('/assets/fonts/Satoshi-BlackItalic.woff2') format('woff2');
        font-weight: 900;
        font-display: swap;
        font-style: italic;
    }
`

export default GlobalStyle