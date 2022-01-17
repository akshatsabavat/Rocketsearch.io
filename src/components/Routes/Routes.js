import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Results from "../Results/Results";

export default function Routes() {
  return (
    <div className="RoutingComponent">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route path={["/search", "/images", "/news", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
}
