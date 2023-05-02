import React, { useState, useEffect } from "react";
import styled from "styled-components";

function WeatherForecast({ city, className, children }) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getForecast()
  }, [])

  const getForecast = async () => {
    const request = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max&current_weather=true&timezone=auto`)
    const response = await request.json();
    setForecast(response);
  }

  return <div className={className}>
    {!forecast 
    ? null 
    : forecast.daily.time.map((day, id) => {
      return <div style={{border: "solid black 1px", padding: "2px", margin: "2px"}}>
        <p>Дата: {new Date(day).toLocaleString('ru-RU', {
          month: "long",
          day: "numeric"
        })}</p>
        <p>Температура: {forecast.daily.temperature_2m_max[id]}</p>
      </div>
    })
  }
  </div>
}

const StyledWeatherForecast = styled(WeatherForecast)`
  display: flex;
`

export default StyledWeatherForecast;