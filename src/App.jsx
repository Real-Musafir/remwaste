import { useState } from "react";

import "./App.css";

import ItemHeader from "./component/ItemHeader.jsx";
import { skipData } from "./shared/data.js";

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

      <div className="mt-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skipData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border border-green-900 rounded-lg shadow hover:shadow-lg overflow-hidden"
          >
            <img
              src={item?.url}
              alt="4 Yard Skip"
              className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
