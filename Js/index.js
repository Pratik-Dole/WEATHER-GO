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
    // console.log(result);
    cloud_pct.innerHTML = result.cloud_pct;
    cloud_pct1.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    feels_like1.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity1.innerHTML = result.humidity; 
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed1.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    wind_degrees1.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
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