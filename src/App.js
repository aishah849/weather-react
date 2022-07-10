import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Everyone!</h1>
        <Weather city="Tokyo" />
        <p>
          This project is hosted on{" "}
          <a href="https://comfy-sopapillas-508d31.netlify.app">Netlify</a> and
          is {""}
          <a href="https://github.com/aishah849/weather-react">open-sourced</a>.
        </p>
      </header>
    </div>
  );
}

export default App;
