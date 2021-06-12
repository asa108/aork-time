import React from "react";
import HomePage from "./pages/homepage/homepage";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <HomePage className="homepage_container" />
      <div className="img_container">
        <img src="./work_img.png" className="img" />
      </div>
    </div>
  );
};


export default App;
