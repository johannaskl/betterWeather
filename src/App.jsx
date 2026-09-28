import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <header>
        <h1>Bättre Väder</h1>
      </header>

      <main>
        <section className="weather">
          <h2>Dagens väder, fast som du vill ha det</h2>

          <p className="icon">☀️</p>
        </section>

        <section className="controls">
          <h3>Är vädret bra nog?</h3>

          <button>Bättre väder ☀️</button>
          <button>Sämre väder ☔</button>
        </section>
      </main>

      <footer>♡ Johanna Larsson 2026</footer>
    </>
  );
}

export default App;
