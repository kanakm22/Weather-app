import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0cd2e22cf79e8426060550396f8a8bc5";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            return result;
        } catch (err) {
            throw err;
        }

    };

    let handleChange = (event) => {
        setCity(event.target.value);
        if (error) setError(false);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            // getWeatherInfo(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>

            <form action="" onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={city} /><br /><br />
                <Button
                    variant="contained"
                    type="submit"
                >
                    Search
                </Button>
                
                <br /><br />
                {error && <p style={{ color: "red" }}>No such place exists in our database!</p>}
            </form>
        </div>
    )
}