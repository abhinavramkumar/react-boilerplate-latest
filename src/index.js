import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, injectGlobal } from "styled-components";
import AppRouter from "./router/AppRouter";
import { theme } from "./theme/theme";
import "typeface-roboto";
//import { LOGIN_USER, LOGOUT_USER } from "./services/constants";
import store from "./services/store";

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.428em;
  }

  h1,h2,h3,h4,h5,h6 {
    line-height: 1.428em;
    word-spacing: 2px;
  }

  h1 {
    font-size: 2.75rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.25rem
  }

  h4 {
    font-size: 1.75rem;
  }

  h5 {
    font-size: 1.25rem
  }
  
  h6 {
    font-size: 0.85rem;
  }
`;

const ComposedApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

const appRoot = document.getElementById("root");

render(<ComposedApp />, appRoot);

// render(
//   <div>
//     <h1>App Loaded</h1>
//   </div>,
//   appRoot
// );

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//    console.log(`${user.displayName} is logged in!`);
// store.dispatch({
//   type: `ASYNC_${LOGIN_USER}`,
//   payload: {
//     user
//   }
// });
//   } else {
//     console.log(`logged out!`);
// store.dispatch({
//   type: `ASYNC_${LOGOUT_USER}`
// });
//   }
// });
