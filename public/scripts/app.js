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

var count = 0;
var plusOne = function plusOne() {
  console.log("addOne");
};
var minusOne = function minusOne() {
  console.log("minusOne");
};
var reset = function reset() {
  console.log("reset done");
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: plusOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "Reset"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
