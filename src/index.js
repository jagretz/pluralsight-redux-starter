import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import {Router, browserHistory } from "react-router";
import routes from "./routes";
import "./css/styles.css"; // Webpack can import CSS files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router";

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById("app")
);
