import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    --container-xsmall: 425px;
    --container-small: 576px;
    --container-medium: 768px;
    --container-large: 992px;
    --color-primary: #141f27;
    --color-secondary: #1b384a;
    --color-white: #f4f4f4;
    --color-styles: #ff2052;
  }

  * {
    padding: 0px;
    margin: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: var(--color-primary);
    color: var(--color-white);
  }
`;