import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
