import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        background-color: rgba(0, 0, 0, .15);
        color: black;

        textarea{
            border-radius: 8px;
        }


        & ::-webkit-scrollbar{
            display: none;
        }

    }


`;
