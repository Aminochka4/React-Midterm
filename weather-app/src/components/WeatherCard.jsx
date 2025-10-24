import "./WeatherCard.css";

function WeatherCard({ data, onMoreDetails }) {
    return (
        <div className="weather-card">
            <p className="temp">{Math.round(data.main.temp)}°C</p>

            <h2 className="city">
                {data.name}, <span className="country">{data.sys.country}</span>
            </h2>

            <div className="description-block">
                <p className="label">Description</p>
                <p className="desc">{data.weather[0].description}</p>
            </div>

            <button className="details-btn" onClick={onMoreDetails}>
                More Details
            </button>
        </div>
    );
}

export default WeatherCard;
