import React from "react";
import { useState } from "react";
import Navbar from "./components/header/Navbar";
import Intro from "./components/Intro";
import Enterprise from "./components/Enterprise";
import DataIntegration from "./components/DataIntegration";
function App() {
  return (
    <div className="min-h-screen dark:bg-custom-gradient !dark:text-white bg-white">
      <Navbar />
      <Intro />
      <Enterprise />
      <DataIntegration />
    </div>
  );
}

export default App;
