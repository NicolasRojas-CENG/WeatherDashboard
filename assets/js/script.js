var searchHistoryId = 0;
var cityName = "Mississauga";
var key = '37acb59a15c51a8110db7c90bdf97dbf';
var url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',ca&units=metric&APPID=' + key;


function loadSearchHistory() {
    var size = JSON.parse(localStorage.getItem("size"));
    for (var i = 0; i < size; i++) {
        var key = "search" + i;
        var text = JSON.parse(localStorage.getItem(key));
        var historyButton = $("<button>");
        historyButton.addClass("col-12 my-2 btn btn-secondary");
        historyButton.attr("id", key);
        historyButton.text(text);
        $(".searchHistory").append(historyButton);
        searchHistoryId++;
    }
}

loadSearchHistory();

function getInitialData(cityName) {
    var url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',ca&units=metric&APPID=' + key;
    fetch(url1).then(function(response) {
        // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                showCityData(data);
                var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat + "&lon=" + data.coord.lon + "&units=metric&appid=" + key;
                fetch(url2 ).then(function(response) {
                    // request was successful
                    if (response.ok) {
                        response.json().then(function(data) {
                            showWeatherData(data);
                            forcastData(data);
                        });
                    }
                });
            });
        } else {
            alert("Error: " + response.statusText);
        }
    });
}

getInitialData(cityName);

function updateSearchHistory() {
    var historyButton = $("<button>");
    var text = $("#searchInfo").val();
    historyButton.addClass("col-12 my-2 btn btn-secondary");
    if (searchHistoryId > 7){
        $("#search0").remove();
        for (var i = 0; i < 8;i++) {
            $("#search" + (i+1)).attr("id", "search" + i);
            saveSearchHistory("search" + i, $("#search" + i).text());
        }
        searchHistoryId = 7;
    }
    idValue = "search" + searchHistoryId
    historyButton.attr("id", idValue);
    historyButton.text(text);
    $(".searchHistory").append(historyButton);
    searchHistoryId++;
    saveSearchHistory(idValue, text); 
}

function saveSearchHistory(id, text) {
    localStorage.setItem(id, JSON.stringify(text));
    localStorage.setItem("size", JSON.stringify(searchHistoryId));
}

function getData(cityName) {
    var url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',ca&units=metric&APPID=' + key;
    fetch(url1).then(function(response) {
        // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                showCityData(data);
                var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat + "&lon=" + data.coord.lon + "&units=metric&appid=" + key;
                fetch(url2 ).then(function(response) {
                    // request was successful
                    if (response.ok) {
                        response.json().then(function(data) {
                            console.log(data);
                            showWeatherData(data);
                            forcastData(data);
                            updateSearchHistory();
                    });
                    } else {
                        alert("Error: " + response.statusText);
                    }
                });
            });
        } else {
            alert("Error: " + response.statusText);
        }
    });
}

function showCityData(data) {
    var text = data.name + ", " + data.sys.country + moment().format(" DD/MM/YYYY");
    $("#city").text(text);
    $("#icon").attr("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
}

function showWeatherData(data) {
    $("#temp").text("Temp: " + data.current.temp + "C");
    $("#wind").text("Wind: " + data.current.wind_speed + " Km/h");
    $("#humidity").text("Humidity: " + data.current.humidity + "%");
    $("#index").text("UV index: " + data.current.uvi);
    if (data.current.uvi < 3){
        $("#index").addClass("bg-favourable");
    } else if (data.current.uvi < 6) {
        $("#index").addClass("bg-moderate");
    }
    else {
        $("#index").addClass("bg-severe");
    }

}

function forcastData(data) {
    for (var i = 0; i < 5; i++){
        $("#date" + i).text(moment().add(i + 1, 'd').format(" DD/MM/YYYY"));
        $("#img" + i).attr("src", "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
        $("#temp" + i).text("Temp: " + data.daily[i].temp.day + "C");
        $("#wind" + i).text("Wind: " + data.daily[i].wind_speed + "Km/h");
        $("#hum" + i).text("Hum: " + data.daily[i].humidity + "%");
    }
}

setInterval(function () {
    getData(cityName);
}, (1000 * 60)* 60);

$("#searchBtn").on("click", function(){
    var search = $("#searchInfo").val();
    if (!search){
        alert("Please enter the name of a city.");
    } else {
        getData(search);
        cityName = search;
    }
});

$(".searchHistory").on("click", "button", function(){
    getInitialData($(this).text());
});