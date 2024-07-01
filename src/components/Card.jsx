import React from 'react';
import { useweather } from '../context/Weather';

const Card = () => {
  const { data } = useweather();

  if (!data) {
    return <div className='card'>No weather data available</div>;
  }

  const { current, location } = data;
  const { temp_c, condition } = current;

  return (
    <div className='card'>
      <img src={condition?.icon} alt={condition?.text} />
      <h2>{temp_c} °C</h2>
      <h5>{location?.name}, {location?.region}, {location?.country}</h5>
    </div>
  );
}

export default Card;
