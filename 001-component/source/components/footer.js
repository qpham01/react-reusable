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
      // children: PropTypes.element.isRequired
    };
  }
  static get defaultProps() {
    return {
      title: "Ben you forgot a title",
      content: "Ben, you still rock!"
    };
  }
  render() {
    return <Element title={this.props.title}>{this.props.content}</Element>;
  }
}

class SocialLink extends Component {
  render() {
    let className = "fa fa-fw fa-" + this.props.name;
    return (
      <li>
        <a href={this.props.link} className="btn-social btn-outline">
          <i className={className} />
        </a>
      </li>
    );
  }
}

class ComplexFooter extends Component {
  render() {
    let children = [];
    for (let sl of this.props.content) {
      children.push(<SocialLink key={sl.name} {...sl} />);
    }

    return (
      <Element title={this.props.title}>
        <ul className="list-inline">{children}</ul>
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
              <TextFooter />
              <ComplexFooter {...this.props.data[1]} />
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
