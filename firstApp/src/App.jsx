import React from "react";
import "./App.css";
import Andrew from "./components/Andrew";

function App() {
  return (
    <div className=" container mx-10 w-full">
      <nav className="flex items-center justify-between my-4 ">
        <header>
          {/* --------- logo ------------- */}
          <p className="text-3xl font-bold">LOGO</p>
        </header>

        <div>
          {/* ------------- li ----------------- */}
          <ul className="flex space-x-4 font-semibold">
            <li> Home</li>
            <li> About </li>
            <li> Portfolio</li>
            <li> Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
