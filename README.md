# WeatherDashboard
```
Sixth Callenge. Due date: 6th of Febuary 2022.
```

## Goal of the Project
***
```
To create an application that displays the current weather and 5-day forcast of a given city.
```

## User Story
***
```
As a traveler
I want to see the weather outlook for multiple cities
so that I can plan a trip accordingly
```

## Criteria For Completion
***
```
1. The app can search for a city given the city's name. I allow for any city the API has data on.
2. After searching for a valid city, it is added to a search history. I have a limit of 8 cities max, any more and the older one is removed.
3. When given a city, current weather data is shown, as well as a 5-day forcast. This information includes temp, hum, wind speed, UV index (current), and 
temp, hum, wind speed for the 5-day forcast.
4. The UV index indicator has a changing background colour depending on its value.
Green = favourable, Blue = moderate, and Red = severe.
5. Clicking any city in the history will bring its data up again.
Not a requirement, but my data updates every hour.

```

## Completion
***
The steps I took to coplete this challenge were:
- Added the initial file setup to the repository.
- Added the skeleton for the website.
![Preview of the web site. Skeleton.](https://github.com/NicolasRojas-CENG/WeatherDashboard/blob/b486b0f43d59fe529ecfb602875f50183334f4fd/assets/images/skeleton.PNG "Preview of the web site. Skeleton.")
- Added the search history
   - Added a limit to the history to 8 entries at a time.
      - If more are added, the older search is removed as to make space for the new one.
      - This will update the localStorage.
   - Added the ability to save the history to localStorage.
   - Added the logic to get the saved data from the localStorage.
![Preview of the web site. Search history.](https://github.com/NicolasRojas-CENG/WeatherDashboard/blob/b486b0f43d59fe529ecfb602875f50183334f4fd/assets/images/searchHistory.PNG "Preview of the web site. Search history.")
- Added API logic
   - Use the input box to get city name.
   - Gather current weather data of the city and display it.
   - Gather 5-day forcast data of the city and display it.
   - The data is updated every hour.
![Preview of the web site. Show data.](https://github.com/NicolasRojas-CENG/WeatherDashboard/blob/b486b0f43d59fe529ecfb602875f50183334f4fd/assets/images/showData.PNG "Preview of the web site. Show data.")
- Buttons now load data.
   - History is only updated with valid cities.
   - Added final styling.
- Added logic for city search outside of Canada.
   - Added Documentation in the form of comments.
   - Fixed some minor bugs.
   ![Preview of the web site. Multi-country search.](https://github.com/NicolasRojas-CENG/WeatherDashboard/blob/b486b0f43d59fe529ecfb602875f50183334f4fd/assets/images/multiCitySearch.PNG "Preview of the web site. Multi-country search.")

## Preview of the web site
![Preview of the web site.](https://github.com/NicolasRojas-CENG/WeatherDashboard/blob/b486b0f43d59fe529ecfb602875f50183334f4fd/assets/images/Final.PNG "Preview of the web site.")

Screenshots were taken at night so the UV index is always green.


## Completed web application
***
[Click here to view the final result of the web application.](https://nicolasrojas-ceng.github.io/WeatherDashboard/ "Weather Dashboard")
