import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar{
        background: #282C34;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #ffffff;
        border-radius: 20px;
    }
    ::-webkit-scrollbar-track{
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        min-height: 100vh;
        background-color: #282C34;
        font-family: "Inter", sans-serif;
    }
`;
