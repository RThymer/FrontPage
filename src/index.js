import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route } from "react-router-dom";

import BasicLayout from "./layout/BasicLayout";

import "./index.css";

ReactDOM.render(
  <HashRouter>
    <Route path="/">
      <BasicLayout>
        <Route path="/about" component={() => "About"} />
        <Route path="/product" component={() => "Product"} />
      </BasicLayout>
    </Route>
  </HashRouter>,
  document.getElementById("root")
);
