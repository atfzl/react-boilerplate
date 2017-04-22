import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Antic');

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5rem;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --webkit-font-smoothing: anti-aliased;
    cursor: auto;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
`;
