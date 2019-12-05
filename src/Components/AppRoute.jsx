import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RouteData from "Routes";
const AppRoute = () => (
  <Switch>
    {RouteData.map(({ path, component }, index) => (
      <Route exact path={path} component={component} key={index}></Route>
    ))}
    <Redirect from="*" to="/"></Redirect>
  </Switch>
);
export default AppRoute;
