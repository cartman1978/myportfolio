import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background: #6bb9dd;
        font-family: 'Poppins', sans-serif;
        overflow: hidden;
    }

    html {
        overflow-x: hidden;
        @media (max-width: 1700px) {
            font-size: 75%;
        }
    }



    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        border: 3px solid #f2c994;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: #f2c994;
            color: white;
        }
        
    }

        h2 {
            font-weight: lighter;
            font-size: 4rem;
        }
        h3 {
            color: white;
        }
        h4 {
            font-weight: bold;
            font-size: 2rem;
        }

        a {
            font-size: 1.1rem;
        }

        span {
            
            color:black;
           
        }
        #span {
            font-weight: bold;
            color: #f2c994;
        }
        p {
            padding: 3rem 0rem;
            color: #fff;
            font-size: 1.4rem;
            line-height: 150%;
        }



`;

export default GlobalStyle;