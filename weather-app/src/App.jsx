import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError("Invalid City Name");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
        setCity("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleClear = () => {
    setCity("");
    setWeatherData(null);
    setShowDetails(false);
    setError("");
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={fetchWeather}
        onClear={handleClear}
      />

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      {error && <ErrorMessage message={error} />}

      {!loading && weatherData && !showDetails && (
        <WeatherCard data={weatherData} onMoreDetails={() => setShowDetails(true)} />
      )}

      {!loading && weatherData && showDetails && (
        <WeatherDetails data={weatherData} onBack={() => setShowDetails(false)} />
      )}
    </div>
  );
}

export default App;
