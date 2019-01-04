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
    let children = [];
    for (let key in this.props.data) {
      let View = this.props.data[key].view;
      if (View) {
        children.push(<View key={key} data={this.props.data[key].model} />);
      }
    }
    return <div>{children}</div>;
  }

  /*
  <Nav onClick={this.onLinkClick} data={this.props.data.nav} />
  <Header {...this.props.data.header} />
  <Portfolio data={this.props.data.portfolio} />
  <About />
  <Contact />
  <Footer data={this.props.data.footer} />
  */
}
