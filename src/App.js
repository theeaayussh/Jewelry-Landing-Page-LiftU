import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";
import TraditionalGold from "./components/TraditionalGold";
import FindYourMatch from "./components/FindYourMatch";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <TraditionalGold />
      <FindYourMatch />
      <Footer />
    </div>
  );
}

export default App;
