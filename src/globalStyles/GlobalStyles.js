import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fontFamillies.montserrat}
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

`;
