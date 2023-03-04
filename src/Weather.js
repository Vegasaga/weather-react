import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather ${response.data.name} is ${response.data.main.temp}°C`);
  }
  let apiKey = "411b46a40d891e724d16000543f2b66d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h1></h1>;
}
