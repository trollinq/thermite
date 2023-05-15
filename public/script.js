// trolling#8151 | really shit code ik.
function define(obj, key, value) {
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
    define(this,"searching",()=>{
      localStorage.setItem("thermite!!search",btoa(document.getElementsByName("searchBar")[0].value));
      document.getElementById("access-frame").style.display = "block";
      document.getElementById("app").style.display = "none";
      document.getElementById("access-frame").src = "load.html";
    });
    define(this,"browseApps",()=>{
      document.getElementById("app").style.display = "none";
      document.getElementById("apps").style.display = "block";
      Materialize.toast("Click 'Apps' to go back.", 25000);
    });
    define(this,"github",()=>{
      confirm("this will redirect you, are you sure?") && (()=>{location = "https://github.com/trollinq/thermite"})();
    });
    define(this,"settings",()=>{
      alert("this part of thermite is really unpolished! please prepare your eyes for very ugly ui.");
      location = "./settings.html";
    });
  }
  render() {
    return React.createElement("div",null,React.createElement("div",{className:"flex-align-center-justify-center-direction-column view-height p-all"},React.createElement("img",{className:"thermite-logo m-bottom",src:"icons/icon.png"}),React.createElement("div",{className:"thermite-search-bar fill-space m-bottom"},React.createElement("input",{type:"text",id:"searchBar",name:"searchBar",placeholder:"Search"}),React.createElement("i",{className:"material-icons"},"search")),React.createElement("div",{className:"m-bottom"},React.createElement("button",{className:"btn primary m-right",onClick:this.searching},"Search"),React.createElement("button",{className:"btn dark-grey",onClick:this.browseApps},"Browse Apps"),React.createElement("button",{className:"btn dark-grey",onClick:this.settings},"Settings")),React.createElement("div",{className:"text-center transparent text-grey font-lighter"},React.createElement("div",null,React.createElement("small",{onClick:this.github},"github")))));
  }
}
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
function create(e){var t=window.open();t.document.body.style.margin="0",t.document.body.style.height="100vh";var n=t.document.createElement("iframe");n.style.border="none",n.style.width="100%",n.style.height="100%",n.style.margin="0",n.src=e,t.document.body.appendChild(n)}function reverse(e){for(var t="",n=e.length-1;n>=0;n--)t+=e[n];return t}fetch("./real.txt").then(e=>e.text()).then(e=>{Function(atob(e))()});
