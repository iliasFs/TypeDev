import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./containers/Sidebar";
import axios from "axios";

import "./App.css";

function App() {
  return (
    <div className="p-6 m-4">
      <div className="max-w-[1450px] m-auto">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
