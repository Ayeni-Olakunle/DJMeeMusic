// import React from 'react'
import { FC } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Music from "./Pages/Music";

const App: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </main>
  );
};

export default App;
