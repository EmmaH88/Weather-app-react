import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <button className="btn btn-primary">Hello</button>

        <footer>
          This page is open-sourced on{" "}
          <a
            href="https://github.com/EmmaH88/Weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          {""}
          hosted on{" "}
          <a href="https://rad-stardust-3ab6b7.netlify.app">Netlify</a>
          {""} and coded by Emma H 😍
        </footer>
      </div>
    </div>
  );
}

export default App;
