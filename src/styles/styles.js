import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Futura from './fonts/Futura Medium.otf';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    /*========== Colors ==========*/
    --white: #ffffff;
    --grey-hover: #b4b4b4;
    
    /*========== Font Weights ==========*/
    --thin: 100;
    --light: 300;
    --regular: 400;
    --medium: 500;
    --bold: 700;
    --bolder: 900;

    /*========== Font ==========*/
    font-family: 'Roboto', sans-serif;
    --biggest: 2rem;
    --h1: 1.5rem;
    --h2: 1.25rem;
    --h3: 1.125rem;
    --normal: .938rem;
    --small: .813rem;
    --smallest: .7rem;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    box-sizing:border-box;
  }
  input {
    all: unset;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  @font-face {
        font-family: "Futura";
        src: local("Futura"),
        url(${Futura}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;
