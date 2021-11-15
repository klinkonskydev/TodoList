import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root
    {
        --font-family: 'Space Grotesk', sans-serif;

        --shadow: #00000020;
        --black: #000;
        --white: #FFF;
        --white-smooth: #F1F1F120;
        --dark-gray: #313131;
        --purple: #a3f;
    }

    * 
    {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    *:active,
    *:focus
    {
        outline: none;
    }

    HTML,
    body
    {
        width: 100%;
        height: 100%;

        overflow: hidden;
        background: #3a3f49;
    }

    a
    {
        text-decoration: none;
    }

    ul,
    li
    {
        list-style-type: none;
        list-style: none;
    }
`;

export { GlobalStyle }