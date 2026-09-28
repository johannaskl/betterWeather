import { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({
    temperature: 24,
    condition: "Soligt såklaaart",
    wind: 0.3,
    clouds: 5,
  });

  function betterWeather() {
    setWeather((current) => ({
      ...current,
      temperature: Math.min(current.temperature + 1, 28),
      wind: Math.max(current.wind - 0.1, 0),
      clouds: Math.max(current.clouds - 5, 0),
    }));
  }

  function worseWeather() {
    setWeather((current) => ({
      ...current,
      temperature: Math.max(current.temperature - 1, 17),
      wind: current.wind + 0.1,
      clouds: Math.min(current.clouds + 5, 100),
    }));
  }

  return (
    <>
      <header>
        <h1>Bättre Väder</h1>
      </header>

      <main>
        <section className="weather">
          <h2>Dagens väder, fast som du vill ha det</h2>

          <p className="icon">☀️</p>

          <p className="temperature">{weather.temperature}°</p>

          <h3>{weather.condition}</h3>

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
