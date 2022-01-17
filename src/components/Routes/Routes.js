import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export default function Routes() {
  return (
    <div className="RoutingComponent">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route path={["/search", "/images", "/news", "/videos"]}></Route>
      </Switch>
    </div>
  );
}
