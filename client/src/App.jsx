import React from "react";
import "./App.scss";
import "normalize.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
