import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layouts/MainLayout";
import SecondaryHeroSection from "./components/SecondaryHeroSection";
import Authentication from "./container/auth/Authentication";
import Authentication2 from "./libraries/formik/Authentication2";

import Landing from "./React-Navigation/NestedRouting/landing";
import Blog from "./React-Navigation/NestedRouting/Blog";
import Dashboard from "./React-Navigation/NestedRouting/DashBoard";

import Products from "./React-Navigation/DynamicRouting/Products";
import ProductDetail from "./React-Navigation/DynamicRouting/ProductDetail";
import Reviews from "./React-Navigation/DynamicRouting/Reviews";
import ReviewDetail from "./React-Navigation/DynamicRouting/ReviewID";
import Settings from "./React-Navigation/NestedRouting/Settings";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="container mx-auto p-4">
      <BrowserRouter>
        <MainLayout>
          <button
            onClick={() => setToggle(!toggle)}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mb-4"
          >
            Toggle Authentication
          </button>
          {/* ----------- conditional routes ----------------------- */}
          <Routes>
            <Route
              path="/"
              element={toggle ? <Authentication /> : <Authentication2 />}
            />

            {/* -------------  Nested routes -------------- */}
            <Route
              path="/home"
              element={
                <>
                  <HeroSection />
                  <SecondaryHeroSection />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/landing" element={<Landing />} />
            <Route path="blog/*" element={<Blog />} />
            <Route path="dashboard/*" element={<Dashboard />} />

            {/* ----------- Dynamic ROUTES ---------- */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:reviewId" element={<ReviewDetail />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
