import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import Settings from "./Settings";

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dash Board</h1>
      <nav className="mt-4 space-x-4">
        <Link to="" className="text-blue-500 hover:underline">
          OverView
        </Link>
        <Link to="Settings" className="text-blue-500 hover:underline">
          Settings
        </Link>
      </nav>

      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
