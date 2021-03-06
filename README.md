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

Note that any snippet of JSX XML must be valid XML, meaning all XML must be encapsulated in a single root node.

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

## States

States are values in components that expect to change and expect components to be aware of change and react to the change.

State changes must be made with the setState method of the React component to broadcast the state change to all interested consumers.

## React DOM manipulation

All UI definition and changes are applied to a virtual DOM that React manages, and it determines which virtual DOM changes need to be made to the real DOM, so no rendering logic is needed in the application except for props and states.

Separating rendering and logic also allow React to work on different platforms than just inside a browser.

Props are invariant, while states are changed through the component's setState() method, with React managing all resulting DOM changes.

React components are intended to be as simple as possible to build and understand. They enscapsulate the minimum data needed to support their operations. The smaller the components the better.

React make only the minimum necessary DOM changes to optimize and speed up rendering operations.

If a component don't have states, then visually it would never change.

## ES6 arrow functions

```javascript
var dup = (a, b) => {
  // (a, b) => is equivalent to function(a * b)
  return a * b;
};

var dup2 = (a, b) => a * b; // One-line function don't need curly braces.

// Even better, arrow functions (also known as lambdas) preserve scope, so
// in the function below the same function scope is also in effect inside the
// arrow function so we can call this.setState() like we do in the outer method.
onUpdateImageState(event);
{
  this.setState({ hasImage: false });
  setTimeout(() => {
    this.setState({ hasImage: true });
  }, 1000);
}
```

## Composition instead of inheritance

## Var, let, and const in ES6

var: has function scope
let/const: bounded by surrounding {} scope, with let for variable and const for constant

## ES6 strings

strings now have startsWith(), endsWith(), includes(), and repeat() methods.

```javascript
let title = "Master Ninja";
console.log(title.startsWith("Master")); // string also has endsWith() and includes()
let name = "Ben ** ";
console.log(name.repeat(10));
```

## JSX spread features

The ... operator on an array spreads out its elements
...[a, b, c] is same as a,b,c

## Static properties in ES6

Here's one way of creating static properties for a class.

```javascript
// First create class
class Foo {}

// Then define static variables.
Foo.version = "1.2";
console.log(Foo.version);
```

Second way of creating static properties is through static setters and getters inside of class.

```javascript
class Bah {
  // static readonly properties via static getter
  static get propTypes() {
    return {};
  }
}
```

## Validating properties in components

static property propTypes is used for property type validation with PropTypes from "prop-types" module.

For example:

```javascript
class TextFooter extends Component {
  // Using static property propTypes and PropTypes from "prop-types"
  // to validate property types.
  static get propTypes() {
    return {
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.string
    };
  }
}
```

or alternately:

```javascript
class TextFooter extends Component {}

TextFooter.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.string
};
```

## Parameterizing model-view

```javascript
let modelView = {
  header: { model: headerModel, view: Header },
  portfolio: { model: portfolioModel, view: Portfolio },
  about: { view: About },
  contact: { view: Contact }
};

// Example of using JSX to override the rendering inside a particular div.
ReactDOM.render(<App data={modelView} />, document.getElementById("page-top"));
```

## ES6 map API

Maps are hashtables that can have complex values as keys.
Using this map to create default classes like classes have default properties.

```javascript
this.map = new Map();
this.map.set("footer", Footer);
```
