// goofy ass source code </3 | trolling#8151
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "searching", () => {
      // set the localstorage to nil when we process it
      localStorage.setItem("thermite!!search",btoa(document.getElementsByName("searchBar")[0].value))
      document.getElementById('access-frame').style.display = 'block';
      document.getElementById('access-frame').src='load.html'
    });
    _defineProperty(this, "browseGames", () => {
      Materialize.toast('work in progress', 5000);
    });
    const currentYear = new Date().getFullYear();
    this.state = { currentYear };
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        {
          className:
            "flex-align-center-justify-center-direction-column view-height p-all",
        },
        React.createElement("img", {
          className: "foresight-logo m-bottom",
          src: "icon.png",
        }),
        React.createElement(
          "div",
          { className: "foresight-search-bar fill-space m-bottom" },
          React.createElement("input", {
            type: "text",
            id: "searchBar",
            name: "searchBar",
            placeholder: "Search",
          }),
          React.createElement("i", { className: "material-icons" }, "search")
        ),

        React.createElement(
          "div",
          { className: "m-bottom" },
          React.createElement(
            "button",
            { className: "btn primary m-right", onClick: this.searching },
            "Search"
          ),
          React.createElement(
            "button",
            { className: "btn dark-grey", onClick: this.browseGames },
            "Browse Games"
          )
        ),

        React.createElement(
          "div",
          { className: "text-center transparent text-grey font-lighter" },
          React.createElement(
            "div",
            null,
            React.createElement("small", null, "use thermite against spyware")
          )
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));