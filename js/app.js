const API_KEY = `b30b5aac4fa860190e1790c342638cdf`;

const searchTemperature = () => {
  const city = document.getElementById('city-name').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (temperature) => {
  console.log(temperature);
};
