import React from 'react';
import { BrowserRouter, Route, } from "react-router-dom";
import PackagesList from './components/Packages/PackagesList';


export default (
  <Route path="/" component={PackagesList}>
  </Route>
);
