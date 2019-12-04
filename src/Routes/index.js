import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import List from "./List";
const AppRoute = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/list" component={List}></Route>
    <Route exact path="/content/:page" component={List}></Route>
    <Redirect from="*" to="/"></Redirect>
  </Switch>
);
export default AppRoute;
