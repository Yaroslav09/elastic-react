import React from "react";
import { useState } from "react";
import Navbar from "./components/header/Navbar";
import Intro from "./components/Intro";
import Enterprise from "./components/Enterprise";
import DataIntegration from "./components/DataIntegration";
import Testimonial from "./components/Testimonial";
import Digital from "./components/Digital";
import Resources from "./components/Resources";
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-custom-gradient !dark:text-white ">
      <Navbar />
      <Intro />
      <Enterprise />
      <DataIntegration />
      <Testimonial />
      <Digital />
      <Resources />
    </div>
  );
}

export default App;
