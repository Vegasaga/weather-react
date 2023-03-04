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
    </div>
  );
}

export default App;
