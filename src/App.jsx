import { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({
    temperature: 24,
    wind: 0.3,
    clouds: 5,
  });

  /* Bättre-knapp */
  function betterWeather() {
    setWeather((current) => ({
      ...current,
      temperature: Math.min(current.temperature + 1, 28),
      wind: Math.max(current.wind - 0.1, 0),
      clouds: Math.max(current.clouds - 5, 0),
    }));
  }

  /* Sämre-knapp */
  function worseWeather() {
    setWeather((current) => ({
      ...current,
      temperature: Math.max(current.temperature - 1, 17),
      wind: current.wind + 0.1,
      clouds: Math.min(current.clouds + 5, 100),
    }));
  }

  /* Meddelande */
  function getWeatherMessage() {
    if (weather.temperature >= 27 && weather.clouds === 0) {
      return "Det här börjar bli svårt att förbättra.";
    }

    if (weather.temperature >= 23 && weather.clouds <= 10) {
      return "Perfekt väder!!";
    }

    if (weather.temperature >= 20 && weather.clouds <= 30) {
      return "Helt okej väder.";
    }

    if (weather.temperature >= 17) {
      return "Det hade kunnat vara lite bättre!";
    }

    return "Vem godkände det här?";
  }

  /* Ikoner */
  function getWeatherIcon() {
    if (weather.clouds >= 70) {
      return "☁️";
    }

    if (weather.clouds >= 30) {
      return "🌤️";
    }

    if (weather.temperature < 17) {
      return "🌧️";
    }

    return "☀️";
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

          <p className="temperature">{weather.temperature}°</p>

          <h3 className="message">{getWeatherMessage()}</h3>

          <div className="weather-details">
            <span>💨 {weather.wind} m/s</span>
            <span>☁️ {weather.clouds}%</span>
          </div>
        </section>

        <section className="controls">
          <h3>Är vädret bra nog?</h3>

          <button onClick={betterWeather}>Bättre väder ☀️</button>
          <button onClick={worseWeather}>Sämre väder ☔</button>
        </section>
      </main>

      <footer>♡ Johanna Larsson 2026</footer>
    </>
  );
}

export default App;
