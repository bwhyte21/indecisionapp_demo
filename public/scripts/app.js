"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision App",
  subtitle: "Let the computer decide for you."
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { id: "templateHeader" },
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
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

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { id: "name" },
    user.name
  ),
  React.createElement(
    "p",
    { id: "age" },
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    { id: "location" },
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
