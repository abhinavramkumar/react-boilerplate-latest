import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { Home, PageNotFound, Login } from "../screens";
import { Header } from "../components";

const history = createHistory();

const AppRouter = props => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
