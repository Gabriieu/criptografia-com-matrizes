import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        background-color: rgba(0, 0, 0, .15);
        color: black;


        & ::-webkit-scrollbar{
            display: none;
        }

    }


`;
