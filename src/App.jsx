import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useweather } from './context/Weather'

function App() {
  const weather = useweather();
  console.log(weather);
  const [count, setCount] = useState(0)
  useEffect(()=>{
    weather.fetchuserlocation()
  },[])

  return (
    <div className='App'>
      <h1>Weather Information</h1>
      <Input/>
      <Button onClick= {weather.fetchData} value= "Search"/>
      <Card/>
      <Button value = "Refresh"/>
    </div>
  )
}

export default App
