var accessCityForm = document.getElementById("search-cities");
var inputCity = document.getElementById("city");
var dateEl = document.querySelector(".card-title");
var tempaturEl = document.getElementById("tempature");
var humidityEl = document.getElementById("humidity");
var uvEl = document.getElementById("uv-index");
var windEl = document.getElementById("wind");
var futureForecastEl = document.getElementById("future");
var getData = document.getElementById("card-weather");
var containerEl = document.getElementById("container");
var clearEl = document.getElementById("clear-history");
var searchEl = JSON.parse(localStorage.getItem("search-history")) || [];
var key = "e455bdb356fcd48f121b0ef69b8f0030";


fetch("https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=" + key).then(function(response){
    return response.json().then(function(data){
        var lat = [0].lat;
        var lon = [0].lon;
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat  + "&lon=" + lon + "&appid=" + key).then(function(outcome){
            
        })
    })
})
