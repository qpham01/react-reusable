import React, { Component } from "react";
import PropTypes from "prop-types";

class Element extends Component {
  render() {
    return (
      <div className="footer-col col-md-4">
        <h3>{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}

class TextFooter extends Component {
  // Using static property propTypes and PropTypes from "prop-types"
  // to validate property types.
  static get propTypes() {
    return {
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.string
    };
  }

  render() {
    return (
      <Element title={this.props.title}>
        <p>{this.props.content}</p>
      </Element>
    );
  }
}

class ComplexFooter extends Component {
  render() {
    return (
      <Element title={this.props.title}>
        <ul className="list-inline">
          <li>
            <a href="#" className="btn-social btn-outline">
              <i className="fa fa-fw fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="btn-social btn-outline">
              <i className="fa fa-fw fa-google-plus" />
            </a>
          </li>
          <li>
            <a href="#" className="btn-social btn-outline">
              <i className="fa fa-fw fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="btn-social btn-outline">
              <i className="fa fa-fw fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="#" className="btn-social btn-outline">
              <i className="fa fa-fw fa-dribbble" />
            </a>
          </li>
        </ul>
      </Element>
    );
  }
}

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <TextFooter {...this.props.data[0]} />
              <TextFooter {...this.props.data[1]} />
              <TextFooter {...this.props.data[2]} />
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Copyright &copy; Your Website 2014
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
