import React from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}℃`
    );
  }
  let apiKey = "a5be15fa2442f2b4c1577f76e6747958";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);
  return <Circles color="#00BFFF" height={80} width={80} />;
}
