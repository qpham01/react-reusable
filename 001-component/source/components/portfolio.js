import React from "react"; // Use react to work with virtual DOM.  Don't need react-dom which renders to real DOM.

// Components need to start with upper-case to distinguish from being standard HTML tags.
export class PortfolioItem extends React.Component {
  render() {
    var path = `img/portfolio/${this.props.img}.png`;
    console.log(path);
    return (
      <div className="col-sm-4 portfolio-item">
        <a
          href="#portfolioModal1"
          className="portfolio-link"
          data-toggle="modal"
        >
          <div className="caption">
            <div className="caption-content">
              <i className="fa fa-search-plus fa-3x" />
            </div>
          </div>
          <img src={path} className="img-responsive" alt="" />
        </a>
      </div>
    );
  }
}

export default class Portfolio extends React.Component {
  render() {
    // don't need 'function' prefix from before ES6
    return (
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Portfolio</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">{this.props.children}</div>
        </div>
      </section>
    );
  }
}
