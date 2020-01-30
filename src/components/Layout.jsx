import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

function Layout(props) {
  return (
    <ContainerStyle>
      <GlobalStyle />
      <Header />
      {props.children}
    </ContainerStyle>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --textLight: hsl(0, 0%, 98%);
    --brandRed: #ec0000;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%; /* 10px/16px = 62.5% => 1rem = 10px */
  }

  body {
    font-family: 'Playfair Display', sans-serif;
    color: var(--textLight);
    background-image: url('https://images.unsplash.com/photo-1533331639-74f1863c7b3c');
    background-repeat: no-repeat;
    background-size: cover;
    
    &::before {
      content: '';
      position: absolute;
      top: 0%; right: 0%; bottom: 0%; left: 0%;
      background: linear-gradient(
        180deg,
      rgba(17,17,17,1) 0%,
      rgba(255,255,255,0) 100%
      );
      opacity: 0.4;
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;
      background: hsl(0, 0%, 0%);
      top: 0%; right: 0%; bottom: 0%; left: 0%;
      opacity: 0.86;
      z-index: -1;
    }
  }

  a {
    color: var(--textLight);
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes slide-in {
    100% { transform: translateY(0%); }
  }
`;

const ContainerStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default Layout;
