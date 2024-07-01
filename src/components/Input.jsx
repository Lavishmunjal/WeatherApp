import React from 'react'
import { useweather } from '../context/Weather'


const Input = () => {
    const weather = useweather();
    // console.log(weather);

  return (
    <input className = "input-field"  placeholder= "search here" value={weather.searchcity} onChange={(e)=>
        weather.setSearchCity(e.target.value)
    }/>

  )
}

export default Input
