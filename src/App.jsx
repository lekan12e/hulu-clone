import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import HeaderLinks from "./components/HeaderLinks";

const App = () => {
  return (
    <div className="app font-poppins h-screen w-screen overflow-y-scroll">
      <NavBar />
      <HeaderLinks />
    </div>
  );
};

export default App;
