import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
// A higher-order component that attaches the store to react container components.
import { Provider } from "react-redux";
import {Router, browserHistory } from "react-router";
import routes from "./routes";
import "./css/styles.css"; // Webpack can import CSS files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router";

/**
 * Passing an initial state here will override the default values specified
 * in the reducers. That isn't wrong in any way. The question you should ask yourself is "when" you
 * would want to pass in an initial state to your application?
 * The answer is whether you want to hydrate your store using a separate state passed down from the
 * server or stored in local storage. This is where you can set that state.
 */
const store = configureStore(/* Initial State */);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
