"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision App",
  subtitle: "Let the computer decide for you.",
  options: ["One", "Two", "Three"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { id: "templateHeader" },
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options." : "No options available."
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    ),
    React.createElement(
      "li",
      null,
      "Item Three"
    )
  )
);

var user = {
  name: "Revan",
  age: 352,
  location: "Dantooine"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { id: "name" },
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    { id: "age" },
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
