import React from "react";
import { useState } from "react";
import Navbar from "./components/header/Navbar";
import Intro from "./components/Intro";
import Enterprise from "./components/Enterprise";

function App() {
  return (
    <div className="min-h-screen dark:bg-custom-gradient !dark:text-white bg-white">
      <Navbar />
      <Intro />
      <Enterprise />
    </div>
  );
}

export default App;
