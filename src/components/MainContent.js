import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledWeatherForecast from "./WeatherForecast";

function MainContent({ className, children }) {
  const [cities, setCities] = useState([]);
  const [stringValue, setStringVal] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    getCityList(stringValue)
  }, [stringValue])

  const getCityList = async (name) => {
    const request = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&language=ru`)
    const response = await request.json();
    setCities(response.results ? response.results : []);
  }

  const cityList = <ul>
    {selectedCity ? null : cities.map(city => 
      <li 
        key={city.id}
        onClick={(e) => {
          setStringVal(e.target.textContent);
          setSelectedCity(city);
        }}>
        {city.name}
      </li>)}
  </ul>

  return <div className={className}>
    <form>
      <label htmlFor="cityName"> Введите название города</label>
      <div>
        <input 
          id="cityName"
          list="cityList" 
          placeholder="Новокузнецк" 
          value={stringValue} 
          onChange={(e) => {
            setSelectedCity(null);
            setStringVal(e.target.value)
          }} 
          style={{width: "100%", boxSizing: "border-box"}}
        />

        {cityList}
      </div>
    </form>

    {!selectedCity ? null : <StyledWeatherForecast city={selectedCity} />}
  </div>
}

const StyledMainContent = styled(MainContent)`
  min-height: 500px;
  margin-left: 50px;

  form {
    div {
      position: relative; 
      width: 200px;

      input {
        padding: 4px;
      }
    }

    ul {
      position: absolute;
      width: 100%; 
      background: white;
      background: #282C33;

      li {
        cursor: pointer;
        color: white;
        padding: 6px;

        &:hover {
          background: rgba(255, 252, 127, 0.5);
        }
      }
    }
  }
`

export default StyledMainContent;