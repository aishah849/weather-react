import React from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}℃`
    );
  }
  let apiKey = "f617fc313f1abac3b9f67f0a1a41e6c4";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);
  return <Circles color="#00BFFF" height={80} width={80} />;
}
