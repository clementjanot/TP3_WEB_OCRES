
// Fonction appelée lors du click du bouton
function start(nameCity) {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(nameCity);
  const apiWeatherOtherDays = new API_WEATHER(nameCity);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
  


  apiWeatherOtherDays
    .getThreeDayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data.list;

        // On récupère l'information principal
        const main1 = data[1].weather[0].main;
        const description1 = data[1].weather[0].description;
        const temp1 = data[1].temp.day;
        const icon1 = apiWeather.getHTMLElementFromIcon(data[1].weather[0].icon);

        // Modifier le DOM
        document.getElementById(`day1-forecast-main`).innerHTML = main1;
        document.getElementById(`day1-forecast-more-info`).innerHTML = description1;
        document.getElementById(`day1-icon-weather-container`).innerHTML = icon1;
        document.getElementById(`day1-forecast-temp`).innerHTML = `${temp1}°C`;
    
        // On récupère l'information principal
        const main2 = data[2].weather[0].main;
        const description2 = data[2].weather[0].description;
        const temp2 = data[2].temp.day;
        const icon2 = apiWeather.getHTMLElementFromIcon(data[2].weather[0].icon);
  
        // Modifier le DOM
        document.getElementById(`day2-forecast-main`).innerHTML = main2;
        document.getElementById(`day2-forecast-more-info`).innerHTML = description2;
        document.getElementById(`day2-icon-weather-container`).innerHTML = icon2;
        document.getElementById(`day2-forecast-temp`).innerHTML = `${temp2}°C`;
      
      // On récupère l'information principal
        const main3 = data[3].weather[0].main;
        const description3 = data[3].weather[0].description;
        const temp3 = data[3].temp.day;
        const icon3 = apiWeather.getHTMLElementFromIcon(data[3].weather[0].icon);
  
        // Modifier le DOM
        document.getElementById(`day3-forecast-main`).innerHTML = main3;
        document.getElementById(`day3-forecast-more-info`).innerHTML = description3;
        document.getElementById(`day3-icon-weather-container`).innerHTML = icon3;
        document.getElementById(`day3-forecast-temp`).innerHTML = `${temp3}°C`;
      
    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}
