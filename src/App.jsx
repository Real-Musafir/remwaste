import { useState } from "react";

import "./App.css";

import ItemHeader from "./component/ItemHeader.jsx";

function App() {
  return (
    <div className=" w-full h-screen px-4">
      {/* header */}
      <ItemHeader currentStep={2} />
    </div>
  );
}

export default App;
