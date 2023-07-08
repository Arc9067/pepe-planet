import React from "react";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full relative font-secondary bg-green-600 text-white">
      <Loading />
      <Header />
      <Hero />
      <About />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
