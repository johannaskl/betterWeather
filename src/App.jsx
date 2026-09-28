import { useState } from "react";
import "./App.css";

function App() {
  const getStartingWeather = () => ({
    temperature: Math.floor(Math.random() * 12) + 17,
    wind: Number((Math.random() * 0.5).toFixed(1)),
    clouds: Math.floor(Math.random() * 11),
  });

  const [weather, setWeather] = useState(getStartingWeather);

  // Bättre väder
  function betterWeather() {
    setWeather((current) => {
      const newTemperature = Math.min(current.temperature + 1, 35);

      return {
        ...current,
        temperature: newTemperature,
        wind: Number((Math.random() * 2.5).toFixed(1)),
        clouds: Math.floor(Math.random() * 11),
      };
    });
  }

  // Sämre väder
  function worseWeather() {
    setWeather((current) => {
      const newTemperature = Math.max(current.temperature - 1, -15);

      let newClouds;

      if (newTemperature >= 17 && newTemperature <= 28) {
        newClouds = Math.floor(Math.random() * 11);
      }

      else if (newTemperature >= 10) {
        newClouds = Math.floor(Math.random() * 51);
      }

      else if (newTemperature >= 0) {
        newClouds = Math.floor(Math.random() * 81);
      }

      else {
        newClouds = Math.floor(Math.random() * 101);
      }

      return {
        ...current,
        temperature: newTemperature,
        wind: Number((Math.random() * 12).toFixed(1)),
        clouds: newClouds,
      };
    });
  }

  // Meddelande
  function getWeatherMessage() {
    if (weather.temperature >= 35) {
      return "Chilla, nu räcker det!!";
    }

    if (weather.temperature >= 29) {
      return "Nu är det riktigt varmt..";
    }

    if (weather.temperature >= 26) {
      return "Det här börjar bli svårt att förbättra.";
    }

    if (weather.temperature >= 23 && weather.clouds <= 10) {
      return "Perfekt!!";
    }

    if (weather.temperature >= 17 && weather.clouds <= 10) {
      return "Helt okej såhär.";
    }

    if (weather.temperature >= 8) {
      return "Det här duger om man är sjuk.";
    }

    if (weather.temperature >= 0) {
      return "Brrr.. nu börjar det bli kallt. 🐻‍❄️";
    }

    return "Vem godkände det här?";
  }

  // Ikoner
  function getWeatherIcon() {
    if (weather.temperature < 0) {
      return "❄️";
    }

    if (weather.temperature >= 31) {
      return "🥵";
    }

    if (weather.temperature >= 17) {
      return "☀️";
    }

    if (weather.clouds >= 70) {
      return "☁️";
    }

    if (weather.clouds >= 30) {
      return "🌤️";
    }

    return "🌥️";
  }

  return (
    <>
      <header>
        <h1>Bättre Väder</h1>
      </header>

      <main>
        <section className="weather">
          <h2>Dagens väder, fast som du vill ha det</h2>

          <p className="icon">{getWeatherIcon()}</p>

          <p className="temperature">{weather.temperature} °C</p>

          <h3 className="message">{getWeatherMessage()}</h3>

          <div className="weather-details">
            <span>💨 {weather.wind.toFixed(1)} m/s</span>
            <span>☁️ {weather.clouds}%</span>
          </div>
        </section>

        <section className="controls">
          <h3>Är vädret bra nog?</h3>

          <button onClick={betterWeather}>
            Bättre väder ☀️
          </button>

          <button onClick={worseWeather}>
            Sämre väder ☔
          </button>
        </section>
      </main>

      <footer>♡ Johanna Larsson 2026</footer>
    </>
  );
}

export default App;