import { useState } from "react";

import "./App.css";

import ItemHeader from "./component/ItemHeader.jsx";
import { skipData } from "./shared/data.js";

function App() {
  return (
    <div className=" w-full  px-4 justify-center">
      {/* header */}
      <ItemHeader currentStep={2} />

      <p className="text-2xl text-white font-semibold mt-5">
        Choose Your Skip Size
      </p>
      <p className="text-lg text-gray-400 mt-3">
        Select the skip size that best suits your needs
      </p>

      <div className="mt-4 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skipData?.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-[#1a1a1a] text-white border border-[#2a2a2a] rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
              {item?.yards} Yards
            </span>

            {/* Image */}
            <div className="w-full h-60 flex items-center justify-center overflow-hidden">
              <img
                src={item?.url}
                alt={`${item?.yards} Yard Skip`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">
                  {item?.yards} Yard Skip
                </h3>
                <p className="text-sm text-gray-400 mb-2">14 day hire period</p>
                <p className="text-xl font-bold text-blue-500">
                  £{item?.value}
                </p>
              </div>

              <button className="mt-4 w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white py-2 rounded-lg text-sm font-medium transition-colors">
                Select This Skip →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
