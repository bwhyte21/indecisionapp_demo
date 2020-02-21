"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision App",
  subtitle: "Let the computer decide for you.",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormApp();
  }
};

var removeAllOptions = function removeAllOptions() {
  if (app.options.length > 0) {
    app.options = [];
    renderFormApp();
  }
};

var appRoot = document.getElementById("app");

var renderFormApp = function renderFormApp() {
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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAllOptions },
      "Remove All Options"
    ),
    React.createElement(
      "ol",
      null,
      app.options.length > 0 && React.createElement(
        "li",
        null,
        app.options
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderFormApp();
