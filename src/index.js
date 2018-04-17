import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, injectGlobal } from "styled-components";
import AppRouter from "./router/AppRouter";
import { configureStore } from "./services";
import { theme } from "./theme/theme";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700');
  @import url('https://fonts.googleapis.com/css?family=PT+Serif:400,700');

  html {
    font-size: 16px;
  }

  body {
    font-family: 'PT Sans', sans-serif;
  }
`;

const store = configureStore();

const ComposedApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

render(<ComposedApp />, document.getElementById("root"));

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log(`${user.displayName} is logged in!`);
//     store.dispatch(login(user));
//   } else {
//     console.log(`logged out!`);
//   }
// });
