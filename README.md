# Weather App

A dynamic React weather application built using Vite, Material-UI (MUI), and the OpenWeatherMap API. The app allows users to search for real-time weather details of any city and visually presents the results with dynamic cards and context-aware weather icons.

## Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── InfoBox.css
│   ├── InfoBox.jsx
│   ├── main.jsx
│   ├── SearchBox.css
│   ├── SearchBox.jsx
│   ├── WeatherApp.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

##  Features

* **Real-time Search:** Instantly fetch weather statistics like temperature, humidity, and atmospheric descriptions for global cities.
* **Dynamic Visuals:** The card background image dynamically shifts between hot cityscapes, snowy environments, or rainy views depending on the city's current conditions.
* **Contextual Icons:** Integrated Material-UI icons (`WbSunny`, `AcUnit`, `Thunderstorm`) append automatically beside the city name depending on state parameters.
* **Error Prevention:** Fully equipped error catching prevents application crashes if a searched city does not exist in the database.

---

## 🛠️ Tech Stack

* Frontend Library: React (Functional Components, Hooks)
* Build Tool: Vite
* UI Components: Material-UI (MUI Core & MUI Icons)
* API Data Source: OpenWeatherMap API

  ##  Future Improvements

- Add 5-day / weekly weather forecast support  
- Integrate geolocation to fetch weather for the user’s current location  
- Implement dark mode and theme customization  
- Display additional weather metrics like wind speed, pressure, and UV index  
- Add weather alerts and notifications for extreme conditions  
- Improve mobile responsiveness and UI animations  
- Integrate AI-based weather insights using OpenAI API for smart travel or clothing recommendations based on weather conditions  
