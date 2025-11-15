// src/App.js
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <WhatWeDo />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
