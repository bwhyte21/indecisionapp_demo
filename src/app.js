console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: "Indecision App",
  subtitle: "Let the computer decide for you.",
  options: ["One", "Two", "Three"],
};

var template = (
  <div>
    <h1 id="templateHeader">{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>
      {app.options.length > 0
        ? "Here are your options."
        : "No options available."}
    </p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ol>
  </div>
);

const user = {
  name: "Revan",
  age: 352,
  location: "Dantooine",
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1 id="name">{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p id="age">Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
