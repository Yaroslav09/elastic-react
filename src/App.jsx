import React from "react";
import { useState } from "react";
import Navbar from "./components/header/Navbar";
import Intro from "./components/Intro";
import Enterprise from "./components/Enterprise";
import DataIntegration from "./components/DataIntegration";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-custom-gradient !dark:text-white ">
      <Navbar />
      <Intro />
      <Enterprise />
      <DataIntegration />
      <Testimonial />
    </div>
  );
}

export default App;
