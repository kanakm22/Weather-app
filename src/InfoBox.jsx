import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1000&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1000&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1000&auto=format&fit=crop";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Min Temp: {info.tempMin}&deg;C</p>
                            <p>Max Temp: {info.tempMax}&deg;C</p>
                            <p>The weather feels like {info.feelsLike}&deg;C with <i>{info.weather}</i>.</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}