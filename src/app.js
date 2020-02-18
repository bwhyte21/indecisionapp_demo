console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision App",
  subtitle: "Let the computer decide for you.",
};

var template = (
  <div>
    <h1 id="templateHeader">{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ol>
  </div>
);

var user = {
  name: "Revan",
  age: 352,
  location: "Dantooine",
};

var templateTwo = (
  <div>
    <h1 id="name">{user.name}</h1>
    <p id="age">Age: {user.age}</p>
    <p id="location">Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
