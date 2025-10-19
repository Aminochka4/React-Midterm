import "./WeatherCard.css";

function WeatherCard({ data, onMoreDetails }) {
    const city = data.name;
    const country = data.sys.country;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;

    return (
        <div className="weather-card">
            <p className="temp">{temperature}°C</p>

            <h2 className="city">
                {city}, <span className="country">{country}</span>
            </h2>

            <div className="description-block">
                <p className="label">Description</p>
                <p className="desc">{description}</p>
            </div>

            <button className="details-btn" onClick={onMoreDetails}>
                More Details
            </button>
        </div>
    );
}

export default WeatherCard;
