import "./WeatherDetails.css";

function WeatherDetails({ data, onBack }) {
    return (
        <div className="weather-details">
            <h3>
                More Details for{" "}
                <span className="city-name">
                    {data.name}, {data.sys.country}
                </span>
            </h3>

            <div className="details-list">
                <div className="detail-item">
                    <span className="label">Humidity</span>
                    <span className="value">{data.main.humidity}%</span>
                </div>

                <div className="detail-item">
                    <span className="label">Pressure</span>
                    <span className="value">{data.main.pressure} hPa</span>
                </div>

                <div className="detail-item">
                    <span className="label">Wind Speed</span>
                    <span className="value">{data.wind.speed} m/s</span>
                </div>

                <div className="detail-item">
                    <span className="label">Feels Like</span>
                    <span className="value">{Math.round(data.main.feels_like)}°C</span>
                </div>
            </div>

            <button className="back-btn" onClick={onBack}>
                Back
            </button>
        </div>
    );
}

export default WeatherDetails;
