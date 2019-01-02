// Import things in ES6
import React from "react"; // React is any name you want for local use
import ReactDOM from "react-dom";
// Import using destructuring
import { default as Portfolio, PortfolioItem } from "./components/portfolio";

var obj = { from: "Ben2" };
// var { from, to } = obj;
// console.log(from, to);

function hey({ from = "Ben", to = "you" }) {
  return `Hello from ${from} , to ${to}`;
}

console.log(hey(obj));

// Example of using JSX to override the rendering inside a particular div.
ReactDOM.render(
  <Portfolio>
    <PortfolioItem img="cake" />
    <PortfolioItem img="circus" />
    <PortfolioItem img="game" />
    <PortfolioItem img="safe" />
    <PortfolioItem img="submarine" />
    <PortfolioItem img="cabin" />
  </Portfolio>,
  document.getElementById("react-app")
);
