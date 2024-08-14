import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layouts/MainLayout";
import SecondaryHeroSection from "./components/SecondaryHeroSection";

function App() {
  const [isChange, setIsChange] = useState(false);

  // Toggle the component being rendered
  const toggleElements = () => {
    setIsChange((prevState) => !prevState);
  };

  return (
    <div>
      <button
        onClick={toggleElements}
        className="py-2 px-4 bg-blue-500 text-white font-semibold"
      >
        {" "}
        CLICK TO CHANGE
      </button>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route
              path="/"
              element={isChange ? <HeroSection /> : <SecondaryHeroSection />}
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
