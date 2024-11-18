import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./style/_global.scss";
import "./style/_navbar.scss";
import "./style/_card.scss";
import "./style/_about.scss";
import About from "./components/About";
import Country from "./components/Country";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Country />
      <Footer />
    </>
  );
}

export default App;
