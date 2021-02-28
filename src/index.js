import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Switch, Route } from "react-router-dom";

import BasicLayout from "./layout/BasicLayout";

import "./index.css";
import router from "./config/router";

const renderRoutes = (route) => {
  const { component, path } = route;

  return <Route component={component} path={path} />;
};

ReactDOM.render(
  <HashRouter>
    <BasicLayout>
      <Switch>{router.map(renderRoutes)}</Switch>
    </BasicLayout>
  </HashRouter>,
  document.getElementById("root")
);
