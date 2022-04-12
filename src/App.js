import React from "react";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Home from "./Pages/Home";

export default function app() {
  return (
    <div>
      <Home />
      <Card />
      <Portfolio />
      <Footer />
    </div>
  );
}
