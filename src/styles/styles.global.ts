import { createGlobalStyle }  from 'styled-components'
export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

body {
  background-color: #1e192c;
  color: #ffffff;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
}

`