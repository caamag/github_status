import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }

    body {
        background-color: rgb(3, 7, 18);
    }

    html {
        scroll-behavior: smooth;
        font-family: "Bebas Neue", sans-serif;
        font-weight: 200;
        font-style: normal;
    }

    input, select {
        border: none;
        background: none;
    }

    button {
        cursor: pointer;
    }
`;
