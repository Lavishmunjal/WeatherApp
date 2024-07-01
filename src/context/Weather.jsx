// context/Weather.js
import { createContext, useContext, useState } from "react";
import { getWeatherData, getWeatherDataForLocation } from "../api"; // Ensure this is the correct path

const WeatherContext = createContext(null);

export const useweather = () => {
  return useContext(WeatherContext);
};


export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchData = async () => {
    try {
      const response = await getWeatherData(searchCity);
      setData(response);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  const fetchuserlocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then((data)=> setData(data));
    });

  }
  return (
    <WeatherContext.Provider value={{ searchCity, setSearchCity, data, fetchData, fetchuserlocation }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
