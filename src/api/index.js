// api.js
const baseurl = 'https://api.weatherapi.com/v1/current.json?key=5555ea4e5cc84581a8b132703240107&q=';

export const getWeatherData = async (city) => {
  const url = `${baseurl}${city}&aqi=no`; // Construct the full URL dynamically
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};
export const getWeatherDataForLocation = async(lat, lon)=>{
    const response = await fetch(`${baseurl}&q=${lat}, ${lon}&aqi=no`)
    return await response.json()
}