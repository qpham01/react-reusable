import React from "react"; // Use react to work with virtual DOM.  Don't need react-dom which renders to real DOM.
import Section from "./section";

export const version = "1.0.1";

{
  const boo = "Ben Foo";
  var name2 = "Ben 2";
  {
    console.log(boo);
  }
}
// console.log(boo);
console.log(name2);

// Components need to start with upper-case to distinguish from being standard HTML tags.
class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);

    // Initial states defined in constructor.
    // Properties are invariant, but states can change.
    this.state = { hasImage: true };
    this.onUpdateImageState = this.onUpdateImageState.bind(this);
  }

  onUpdateImageState(event) {
    // When change state, need to broadcast the state change to react
    // with the component's setState method.
    this.setState({ hasImage: false });
    setTimeout(() => {
      this.setState({ hasImage: true });
    }, 1000);
  }

  render() {
    // Cannot just change states by direct assignment like below:
    // this.state.hasImage = false;
    // React wouldn't know when this state is changed.
    var path = `img/portfolio/${this.props.data.img}.png`;
    // console.log(path);
    return (
      <div
        onClick={this.onUpdateImageState}
        className="col-sm-4 portfolio-item"
      >
        <a
          href={this.props.data.link}
          className="portfolio-link"
          data-toggle="modal"
        >
          <div className="caption">
            <div className="caption-content">
              <i className="fa fa-search-plus fa-3x" />
            </div>
          </div>
          {this.state.hasImage ? (
            <img src={path} className="img-responsive" alt="" />
          ) : null}
        </a>
      </div>
    );
  }
}

export default class Portfolio extends React.Component {
  render() {
    let children = [];
    for (let item of this.props.data) {
      children.push(<PortfolioItem data={item} key={children.length} />);
    }
    // don't need 'function' prefix from before ES6
    return (
      <Section id="portfolio" title="Portfolio">
        {children}
      </Section>
    );
  }
}
