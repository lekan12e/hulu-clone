import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeaderLinks from "./components/HeaderLinks";
import Body from "./components/Body";
import "./App.css";
import Detail from "./pages/Detail";

const App = () => {
  const [category, setCategory] = useState("movies");

  return (
    <Router>
      <div className="app font-poppins h-screen w-screen overflow-y-scroll">
        <NavBar />
        <HeaderLinks setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<Body category={category} />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
