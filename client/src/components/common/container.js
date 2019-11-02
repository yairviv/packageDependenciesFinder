import React from "react";
import { Switch, Route } from "react-router-dom";


import PackagesList from '../Packages/PackagesList'

function Container() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={PackagesList} />
      </Switch>
    </div>
  );
}


export default Container;