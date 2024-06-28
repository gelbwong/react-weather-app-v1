import React from "react";

import "./App.css";

import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="outside">
      <Weather defaultCity="Mongkok" />
      <Footer />
    </div>
  );
}

export default App;
