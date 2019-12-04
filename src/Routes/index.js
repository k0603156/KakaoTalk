import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import User from "./User";
import Chat from "./Chat";
const AppRoute = () => (
  <Switch>
    <Route exact path="/" component={User}></Route>
    <Route exact path="/chat" component={Chat}></Route>
    <Route exact path="/content/:page" component={Chat}></Route>
    <Redirect from="*" to="/"></Redirect>
  </Switch>
);
export default AppRoute;
