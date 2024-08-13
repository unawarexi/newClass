import React from "react";
import NavBar from "../container/NavBar";
import Footer from "../container/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
