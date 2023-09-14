// This Is Our API Code For The Weather-Go App ::

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fb7aa38541msh8f6858bb263afcap121447jsn0a945f669d03",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = async (city) =>{
  cityName.innerHTML = city;
  const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct.innerHTML = response.cloud_pc;
    cloud_pct1.innerHTML = response.cloud_pc;
    temp.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    feels_like1.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity1.innerHTML = response.humidity; 
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed1.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_degrees1.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  } 
  catch (error) {
    console.error(error);
  }
}

// Creating A Click Event For Getting City Names From Search Box ::
  submiting.addEventListener("click", (e)=>{
      e.preventDefault();
      getWeather(city.value);
})

// By Default We Getting Weather For "Amravati" ::
getWeather("Amravati");

// .................................................................... //