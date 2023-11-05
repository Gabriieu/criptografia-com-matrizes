import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        background-color: whitesmoke;
        color: black;

        textarea{
            border-radius: 8px;
        }


        & ::-webkit-scrollbar{
            display: none;
        }

    }


`;
