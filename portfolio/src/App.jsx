import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "../src/Components/NavBar/NavBar";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-gradient-to-r from-sky-300 to bg-pink-200">
        <div className="relative z-10">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
