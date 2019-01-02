# Creating Reusable React Components

## Key parts of development environment

- NPM
- Webpack
- Babel

## Setting up a React development environment

npm init -y:

- Initialize an NPM environment without the interactive interview.
- Create an initial package.json file.d

touch webpack.config.js:

- Create an empty webpack.config.js file.

npm install --save-dev webpack@1 webpack-dev-server

- install webpack version 1 and webpack-dev-server packages for development. Webpack automatically hot refresh the code running in browser to make manual refresh webpage unnecessary.

## Integrate ES2016 with Babel

npm install --save-dev babel-loader@7 babel-core babel-preset-es2015

Babel will translate es-2016 to es5 on the fly. Go to localhost:3000/index.js to see translated JavaScript.

## JSX

Integrate all DOM definition languages HTML (as XML), CSS, etc. into JavaScript so everything is in one file.
Babel will translate JSX to React JavaScript

npm install --save-dev babel-preset-react

## React

react: manages internal log
react-dom: manages browser rendering
babel-polyfill (or shim): help older browsers to fully support ES5

npm install --save react react-dom babel-polyfill

Pascal-case xml/html tags in JSX are treated as components in React.

## Thinking in React

React <Components /> can replace arbitrary sections of HTML.
To make components reusable, they need to be parameterized with properties and states.
JSX properties are component parameters that won't change.
JSX states are component parameters that could change dynamically at run-time.
We want invariant properties as much as possible and only use states when absolutely necessary.

Property example:

- img is a property passed in to Portfolio component

```jsx
<PortfolioItem img="cake" />
```

Components can have children

```jsx
// Portfolio component have several children
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

// Render in portfolio renders children components
render() {
  return (
    <div className="container">
      <div className="row">{this.props.children}</div>
    </div>
  )
}

```

## Explore ES6

Destructuring in ES6

```javascript
var obj = { from: "Ben2", to: "You" };
// Desstructuring pulls out properties from an object into variables.
var { from, to } = obj;
```

Importing and exporting in ES6 with destructuring

```javascript
// Import default export and non-default export with destructuring of the exported object from a JS file.
import { default as Portfolio, PortfolioItem } from "./components/portfolio";
```
