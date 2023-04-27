import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./containers/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="p-6 m-4">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
