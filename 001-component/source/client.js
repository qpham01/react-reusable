// Import things in ES6
import React from "react"; // React is any name you want for local use
import ReactDOM from "react-dom";
// Import using destructuring
import { default as Portfolio, version } from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import PropTypes from "prop-types";

var obj = { from: "Ben2" };
// var { from, to } = obj;
// console.log(from, to);

var dup = (a, b) => {
  // (a, b) => is equivalent to function(a * b)
  return a * b;
};

var dup2 = (a, b) => a * b; // One-line function don't need curly braces.

console.log(dup(10, 30));
console.log(dup2(20, 50));

function hey({ from = "Ben", to = "you" }) {
  return `Hello from ${from} , to ${to}`;
}

console.log(hey(obj));

// version = "1.2.3";
console.log(version);

// ... as aggregator of arbitrary number of values
function addNumbers(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

function dupFirstByTotalOfRest(a, ...args) {
  return a * addNumbers(...args);
}

// First create class
class Foo {}

// Then define static variables.
Foo.version = "1.2";
console.log("Foo.version is " + Foo.version);

class Bah extends React.Component {
  // static readonly properties via static getter
  static get propTypes() {
    return {
      title: PropTypes.oneOftype([
        React.PropTypes.string,
        React.PropTypes.numbers
      ])
    };
  }
}
Bah.title = "2.3";
console.log("Bah.title is " + Bah.title);

console.log(
  ">>>> " + dupFirstByTotalOfRest(10, 10, 4, 22, 2, -5, 7, 9, 34, 17)
); // outputs 10 * 100 = 1000

var portfolioModel = [
  { img: "cake", link: "http://02geek.com" },
  { img: "circus", link: "http://02skills.com" },
  { img: "game", link: "http://packtpub.com" },
  { img: "safe", link: "http://02geek.com" },
  { img: "submarine", link: "http://02geek.com" },
  { img: "cabin", link: "http://anxpl.com" }
];

let footerModel = [
  {
    title: "Location",
    content: "3481 Melrose Place<br />Beverly Hills, CA 90210"
  },
  {
    title: "Around the Web",
    content: [
      { link: "#", name: "facebook" },
      { link: "#", name: "twitter" },
      { link: "#", name: "linkedin" },
      { link: "#", name: "youtube" },
      { link: "#", name: "instagram" }
    ]
  },
  {
    title: "About Freelancer",
    content:
      'Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>'
  }
];

// Example of using JSX to override the rendering inside a particular div.
ReactDOM.render(
  <div>
    <Header
      title="Master React Components"
      subtitle="React - Components - JSX - ES6"
    />
    <Portfolio data={portfolioModel} />
    <About />
    <Contact />
    <Footer data={footerModel} />
  </div>,
  document.getElementById("page-top")
);
