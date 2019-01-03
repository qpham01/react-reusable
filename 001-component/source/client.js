// Import things in ES6
import React from "react"; // React is any name you want for local use
import ReactDOM from "react-dom";
// Import using destructuring
import { default as Portfolio, PortfolioItem } from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";

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

// Example of using JSX to override the rendering inside a particular div.
ReactDOM.render(
  <div>
    <Portfolio>
      <PortfolioItem img="cake" />
      <PortfolioItem img="circus" />
      <PortfolioItem img="game" />
      <PortfolioItem img="safe" />
      <PortfolioItem img="submarine" />
      <PortfolioItem img="cabin" />
    </Portfolio>
    <About />
    <Contact />
  </div>,
  document.getElementById("page-top")
);
