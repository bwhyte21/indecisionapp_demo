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

let count = 0;
const plusOne = () => {
  console.log("addOne");
};
const minusOne = () => {
  console.log("minusOne");
};
const reset = () => {
  console.log("reset done");
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={plusOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
