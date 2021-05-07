const fetch = require("node-fetch");
require('dotenv').config();

async function call() {
  const city = 'montreal';

  const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`, { mode: 'cors' })
    // ${process.env.API_KEY}
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

  // console.log(process.env.API_KEY);
}
call();
