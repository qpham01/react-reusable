import React, { Component } from "react";
import { default as Portfolio, version } from "./portfolio";
import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";
import Nav from "./nav";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(e) {
    e.preventDefault();
    console.log("hello");
  }

  render() {
    return (
      <div>
        <Nav onClick={this.onLinkClick} data={this.props.data.nav} />
        <Header
          title="Master React Components"
          subtitle="React - Components - JSX - ES6"
        />
        <Portfolio data={this.props.data.portfolio} />
        <About />
        <Contact />
        <Footer data={this.props.data.footer} />
      </div>
    );
  }
}
