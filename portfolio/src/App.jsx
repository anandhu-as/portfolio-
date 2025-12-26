import React from "react";


import NavBar from "../src/Components/NavBar/NavBar"
import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import {BrowserRouter,Route,Routes} from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen '>
        <div className="relative z-10">
         <NavBar/>
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
