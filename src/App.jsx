import React from "react";
import { useState } from "react";
import Navbar from "./components/header/Navbar";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="min-h-screen dark:bg-custom-gradient !dark:text-white bg-white">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
