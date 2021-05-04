function call() {
  return (async () => {
    const city = 'montreal';
    console.log(city);
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`, { mode: 'cors' });
    console.log(response);
    console.log('hello');
    const data = await response.json();
    console.log(data);
  })
}

call();

console.log('hello?');