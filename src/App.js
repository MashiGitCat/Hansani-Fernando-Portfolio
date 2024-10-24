import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigation/navBar";

import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div>
      <NavBar />
     
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
