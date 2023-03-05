import React from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-7 py-5 px-32 bg-gradient-to-br from-green-400 to-blue-500 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="Hourly Forecast" />
      <br />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/johanna-sanchez-27a0491b1/"
          target="_blank"
        >
          {" "}
          Johanna Sanchez
        </a>{" "}
        and is open-sourced on{" "}
        <a href="https://github.com/Vegasaga/weather-react" target="_blank">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://aquamarine-cobbler-3f8040.netlify.app/"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
