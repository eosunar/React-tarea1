import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 2rem;
    line-height: 1.6;
    transition: all 0.25s linear;
  }

  #root {
    max-width: 800px;
    margin: 0 auto;
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 0.5em;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;