import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
}
body {
    width: 100vw;
    height: 100vh;
    padding: 1% 0 0;
    background-image: radial-gradient(circle at 52% 94%, #eef4f5, #27c8ee 92%);
    }
`;