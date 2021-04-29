import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background: #5959f2;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        border: 3px solid #f7c456;
        color: white;
        transition: all 0.5s ease;
        &:hover {
            background-color: #f7c456;
            color: white;
        }
    }

`;

export default GlobalStyle;