console.log("App.js is running!");

// JSX - JavaScript XML
var template = (
  <div>
    <h1 id="templateHeader">Indecision App</h1>
    <p>This is some info.</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1 id="name">Bryan</h1>
    <p id="age">Age: 29</p>
    <p id="location">Location: Maryland</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
