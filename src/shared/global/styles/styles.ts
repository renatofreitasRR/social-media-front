import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    body{
        background-color: ${props => props.theme.color900};
    }
`;

