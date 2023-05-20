import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import NasaPhoto from "./Components/NasaPhoto.js";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nashaphoto" element={<NasaPhoto />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <NasaPhoto /> */}
    </>
  );
}

export default App;