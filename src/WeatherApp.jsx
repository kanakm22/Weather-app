import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "delhi",
            feelsLike: 24.84,
            temp: 56,
            tempMin: 78,
            tempMax: 89,
            humidity: 34,
            weather: "haze"
        }
    )


    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}