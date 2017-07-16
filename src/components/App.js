import React, { Component, PropTypes } from "react";
import Header from "../components/common/Header";

/**
 * Handles the application template used on every page.
 */
export default class App extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Header />
        {/* Passing down the component, recieved as props.children, from the router */}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
