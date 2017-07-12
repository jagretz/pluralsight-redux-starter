import React, { Component } from "react";
import { Link } from "react-router";

export default class HomePage extends Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>Raact, Redux, and React Router in ES6 configured with Webpack</p>
        <Link to="about" className="btn btn-primary btn-lg">Lean More</Link>
      </div>
    );
  }
}
