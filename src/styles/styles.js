import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Futura from './fonts/Futura Medium.otf';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    /*========== Colors ==========*/
    --white: #ffffff;
    --black: #000000;
    --black-header: #1c1c1e;
    --black-title: #1C1C1E;
    --grey-hover: #b4b4b4;
    --grey-hover-2: #f3f3f3;
    --grey-subtitle: #636366;
    --grey3: #e5e5ea; 
    --grey-link: #636366;
    --grey-subsubtitle: #8E8E93;
    --grey-footer: #f2f2f7;
    
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
    --minimize: .4rem;
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
    background-color:inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }
  @font-face {
        font-family: "Futura";
        src: local("Futura"),
        url(${Futura}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;

export const gitUrl = '/GIK-client';
