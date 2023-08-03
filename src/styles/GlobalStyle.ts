import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 20px;
    background-clip: padding-box;
    border: 5px solid transparent;
    padding-right: 4px;
  }

  body {
    margin: 0;
    font-family: 'Comic Sans MS', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    font-family: 'Comic Sans MS';
  }

  body > #root > div {
    height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
