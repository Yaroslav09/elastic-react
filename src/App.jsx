import React from "react";
import Navbar from "./components/header/Navbar";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="dark:bg-blue-200">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
