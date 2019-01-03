// Import things in ES6
import React from "react"; // React is any name you want for local use
import ReactDOM from "react-dom";
// Import using destructuring
import { default as Portfolio, version } from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";

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

var portfolioModel = [
  { img: "cake", link: "http://02geek.com" },
  { img: "circus", link: "http://02skills.com" },
  { img: "game", link: "http://packtpub.com" },
  { img: "safe", link: "http://02geek.com" },
  { img: "submarine", link: "http://02geek.com" },
  { img: "cabin", link: "http://anxpl.com" }
];

function hey({ from = "Ben", to = "you" }) {
  return `Hello from ${from} , to ${to}`;
}

console.log(hey(obj));

// version = "1.2.3";
console.log(version);

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
  </div>,
  document.getElementById("page-top")
);
