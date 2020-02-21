console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: "Indecision App",
  subtitle: "Let the computer decide for you.",
  options: [],
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormApp();
  }
};

const removeAllOptions = () => {
  if (app.options.length > 0) {
    app.options = [];
    renderFormApp();
  }
};

const appRoot = document.getElementById("app");

const renderFormApp = () => {
  const template = (
    <div>
      <h1 id="templateHeader">{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0
          ? "Here are your options."
          : "No options available."}
      </p>
      <p>{app.options.length}</p>
      <button onClick={removeAllOptions}>Remove All Options</button>
      <ol>{app.options.length > 0 && <li>{app.options}</li>}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderFormApp();
