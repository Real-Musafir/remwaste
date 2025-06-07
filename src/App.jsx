import { useState } from "react";

import "./App.css";

import ItemHeader from "./component/ItemHeader.jsx";

function App() {
  return (
    <div className=" w-full h-screen px-4 justify-center">
      {/* header */}
      <ItemHeader currentStep={2} />

      <p className="text-2xl text-white font-semibold mt-5">
        Choose Your Skip Size
      </p>
      <p className="text-lg text-gray-400 mt-3">
        Select the skip size that best suits your needs
      </p>
    </div>
  );
}

export default App;
