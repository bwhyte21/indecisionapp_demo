"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { id: "templateHeader" },
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info."
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

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { id: "name" },
    "Bryan"
  ),
  React.createElement(
    "p",
    { id: "age" },
    "Age: 29"
  ),
  React.createElement(
    "p",
    { id: "location" },
    "Location: Maryland"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
