import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen h-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}