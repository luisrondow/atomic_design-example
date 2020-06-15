import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: ${lighten(0.02, '#151515')} no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  #root {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
`;
