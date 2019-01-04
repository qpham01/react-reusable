// Import things in ES6
import React from "react"; // React is any name you want for local use
import ReactDOM from "react-dom";
import App from "./components/app";
import Portfolio from "./components/portfolio";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";

let headerModel = {
  title: "Master React Components",
  subtitle: "React - Components - JSX - ES6"
};

let portfolioModel = [
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

let navModel = [
  { link: "#page-top" },
  { link: "#portfolio" },
  { link: "#about" },
  { link: "#contact" }
];

let modelView = {
  header: { model: headerModel, view: Header, label: "React Components" },
  portfolio: { model: portfolioModel, view: Portfolio, label: "Portfolio" },
  about: { view: About, label: "About" },
  contact: { view: Contact, label: "Contact" },
  footer: { model: footerModel }
};

// Example of using JSX to override the rendering inside a particular div.
ReactDOM.render(<App data={modelView} />, document.getElementById("page-top"));
