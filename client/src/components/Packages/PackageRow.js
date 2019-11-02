import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const PackageRow = ({ value }) => {
  return (
    <li>
      Dependecy package name: {value[0]}, version: {value[1]}
    </li>
  );
};

export default PackageRow;
