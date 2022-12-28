import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="manchester" />

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
          <a
            href="https://rad-stardust-3ab6b7.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          {""} and coded by Emma H 😍
        </footer>
      </div>
    </div>
  );
}

export default App;
